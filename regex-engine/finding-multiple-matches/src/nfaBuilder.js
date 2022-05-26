const {RegexAlternative, Regex,  AtomicPattern, ComplexClass, CaretAnchor, DollarAnchor} = require('../../grammar/ast');
const {EPSILON} = require('../../grammar/astBuilder');
const {ASTERISK, LAZY_ASTERISK, PLUS, LAZY_PLUS, OPTIONAL, LAZY_OPTIONAL} = require('../../grammar/astBuilder');
const {CharacterMatcher, EngineNFA, EpsilonMatcher, CustomMatcher, StartOfStringMatcher, EndOfStringMatcher, 
    EndOfLineMatcher, StartOfLineMatcher} = require('./nfa');

const EPSILON_MATCHER = new EpsilonMatcher();

class NFABuilder {
    constructor(modes) {
        this.stateNumber = 0;
        this.groupNumber = 0;
        this.modes = modes || {};
    }

    newState() {
        const c = `q${this.stateNumber}`;
        this.stateNumber++;
        return c;
    }

    resetStateNumbers() {
        this.stateNumber = 0;
    }

    newGroup() {
        const c = this.groupNumber;
        this.groupNumber++;
        return c;
    }

    resetGroupNumbers() {
        this.groupNumber = 0;
    }


    // This is the entry point from outside. 
    regexToNFA(regexAST) {
        this.resetStateNumbers();
        this.resetGroupNumbers();
        return this._regexToNFA(regexAST);
    }

    _regexToNFA(regexAST) {
        if (regexAST instanceof RegexAlternative) 
            return this._alternativeToNFA(regexAST);
        else 
            return this._singleRegexToNFA(regexAST);
    }

    _singleRegexToNFA(regexAST) {
        let nfa = null;
        if (regexAST.subpatterns.length === 0) {
            // Handles empty capturing groups
            nfa = this._oneStepNFA(new EpsilonMatcher());
        }
        // A regex is just a series of subpatterns. We iterate through them and concatenate them to 'nfa'
        const groupName = regexAST.isCapturingGroup() ? regexAST.groupName || this.newGroup() : null;
        for (const c of regexAST.subpatterns) {
            let baseBuilder, current;
    
            // First we translate the base of the regex (ignoring the quantifier)
            if (c.child instanceof AtomicPattern) {
                baseBuilder = () => this._atomicPatternNFA(c.child.char);
            } else if (c.child instanceof RegexAlternative || c.child instanceof Regex) { // Groups
                baseBuilder = () => this._regexToNFA(c.child);
            } else if (c.child instanceof ComplexClass) {
                baseBuilder = () => this._oneStepNFA(new CustomMatcher((char) => c.child.matches(char), c.child.name));
            } else if (c.child instanceof DollarAnchor)
                baseBuilder = () => this._oneStepNFA(this.modes.multiline ? new EndOfLineMatcher() : new EndOfStringMatcher());
            else if (c.child instanceof CaretAnchor)
                baseBuilder = () => this._oneStepNFA(this.modes.multiline ? new StartOfLineMatcher() : new StartOfStringMatcher());
    
            //Second: We apply the quantifier (if there is one)
            if (c.quantifier === ASTERISK || c.quantifier === LAZY_ASTERISK) {
                current = this._asterisk(() => baseBuilder(), c.quantifier === LAZY_ASTERISK);
            } else if (c.quantifier === PLUS || c.quantifier === LAZY_PLUS) {
                current = this._plus(() => baseBuilder(), c.quantifier === LAZY_PLUS);
            } else if (c.quantifier === OPTIONAL || c.quantifier === LAZY_OPTIONAL) {
                current = baseBuilder();
                if (c.quantifier === LAZY_OPTIONAL)
                    current.unshiftTransition(current.initialState, current.endingStates[0], EPSILON_MATCHER);
                else 
                    current.addTransition(current.initialState, current.endingStates[0], EPSILON_MATCHER);
            } else {
                // No quantifier
                current = baseBuilder();
            }
    
            if (nfa === null) 
                nfa = current 
            else 
                // Concatenate 'current' to the overall nfa
                nfa.appendNFA(current, nfa.endingStates[0]);
        }
        if (groupName !== null) nfa.addGroup(nfa.initialState, nfa.endingStates[0], groupName); 
        return nfa;
    }

    _atomicPatternNFA(character) {
        const matcher = character === EPSILON ? new EpsilonMatcher() : new CharacterMatcher(character);
        return this._oneStepNFA(matcher);
    }

    _oneStepNFA(matcher) {
        const nfa = new EngineNFA();
        let a = this.newState();
        let b = this.newState();
        nfa.declareStates(a,b);
        nfa.setInitialState(a);
        nfa.setEndingStates([b]);
    
        nfa.addTransition(a,b, matcher);
        return nfa;
    }

    _asterisk(builder, lazy) {
        return this._asteriskplus(builder, lazy, true);
    }
    
    _plus(builder, lazy) {
        return this._asteriskplus(builder, lazy, false);
    }
    
    _asteriskplus(builder, lazy, asterisk) {
        const newInit = this.newState();
        const base = builder(); // For 'r*' builder() returns the NFA of 'r'
        const newEnd = this.newState();
        base.addState(newInit); 
        base.addState(newEnd);
        if (lazy) {
            if (asterisk) base.addTransition(newInit, newEnd, EPSILON_MATCHER); // q_i -> q_f (Skip the loop)
            base.addTransition(newInit, base.initialState, EPSILON_MATCHER);    // r_i -> r_f (Enter the loop)
            base.addTransition(base.endingStates[0], newEnd, EPSILON_MATCHER);  // r_f -> q_f (Exit the loop)
            base.addTransition(base.endingStates[0], base.initialState, EPSILON_MATCHER); //r_f -> r_i (Stay in the loop)
        } else {
            base.addTransition(newInit, base.initialState, EPSILON_MATCHER); // r_i -> r_f (Enter the loop)
            base.addTransition(base.endingStates[0], base.initialState, EPSILON_MATCHER); //r_f -> r_i (Stay in the loop)
            base.addTransition(base.endingStates[0], newEnd, EPSILON_MATCHER);  // r_f -> q_f (Exit the loop)
            if (asterisk) base.addTransition(newInit, newEnd, EPSILON_MATCHER); // q_i -> q_f (Skip the loop)
        }
        
        base.setInitialState(newInit);
        base.setEndingStates([newEnd]);
        return base;
    }

    _alternativeToNFA(alternativeAst) {
        const groupName = alternativeAst.isCapturingGroup() ? alternativeAst.groupName || this.newGroup() : null;
        const nfa = new EngineNFA(); 
        const start = this.newState();
        nfa.addState(start);
        nfa.setInitialState(start);
        const endingStates = [];
    
        for (let i = 0; i < alternativeAst.alternatives.length; i++) {
            // Generate a NFA from the alternative AST
            const tmp = this._regexToNFA(alternativeAst.alternatives[i], false);
            endingStates.push(...tmp.endingStates);
            nfa.appendNFA(tmp, start);
        }
    
        const end = this.newState();
        nfa.addState(end);
        // Point the end state of each alternative to the union end state
        endingStates.forEach(x => nfa.addTransition(x, end, new EpsilonMatcher()));
        nfa.setEndingStates([end]);
        if (groupName !== null) nfa.addGroup(start, end, groupName);
        return nfa;
    }
}

Object.assign(exports, {NFABuilder});
