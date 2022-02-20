const {RegexAlternative, AtomicPattern} = require('../../grammar/ast');
const {EPSILON} = require('../../grammar/astBuilder');

const {ASTERISK, LAZY_ASTERISK, PLUS, LAZY_PLUS, OPTIONAL, LAZY_OPTIONAL} = require('../../grammar/astBuilder');
const {CharacterMatcher, EngineNFA, EpsilonMatcher} = require('./nfa');

const EPSILON_MATCHER = new EpsilonMatcher();

class NFABuilder {
    constructor() {
        this.stateNumber = 0;
    }

    newState() {
        const c = `q${this.stateNumber}`;
        this.stateNumber++;
        return c;
    }

    resetStateNumbers() {
        this.stateNumber = 0;
    }


    // This is the entry point from outside. 
    regexToNFA(regexAST) {
        this.resetStateNumbers();
        return this._regexToNFA(regexAST, true);
    }

    _regexToNFA(regexAST) {
        if (regexAST instanceof RegexAlternative) 
            return this._alternativeToNFA(regexAST);
        else 
            return this._singleRegexToNFA(regexAST);
    }

    _singleRegexToNFA(regexAST) {
        let nfa = null;
        // A regex is just a series of subpatterns. We iterate through them and concatenate them to 'nfa'
        for (const c of regexAST.subpatterns) {
            let baseBuilder, current, baseIsCapturing, namedGroup = null;
    
            // First we translate the base of the regex (ignoring the quantifier)
            if (c.child instanceof AtomicPattern) {
                baseBuilder = () => this._atomicPatternNFA(c.child.char);
            } else if (c.child instanceof RegexAlternative || c.child instanceof Regex) { // Groups
                baseIsCapturing = c.child.isCapturingGroup();
                baseBuilder = () => this._regexToNFA(c.child);
            }
    
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
        // The order is important to the NFA with capturing groups because when its executed it tries the transitions in order
        // Which means:
        // - If base.endingStates[0] -> base.initialState goes first, it's greedy 
        // - If base.endingStates[0] -> newEnd goes first, it's non greedy
        if (lazy) {
            if (asterisk) base.addTransition(newInit, newEnd, EPSILON_MATCHER);
            base.addTransition(newInit, base.initialState, EPSILON_MATCHER);
            base.addTransition(base.endingStates[0], newEnd, EPSILON_MATCHER);
            base.addTransition(base.endingStates[0], base.initialState, EPSILON_MATCHER);
        } else {
            base.addTransition(newInit, base.initialState, EPSILON_MATCHER);
            base.addTransition(base.endingStates[0], base.initialState, EPSILON_MATCHER);
            base.addTransition(base.endingStates[0], newEnd, EPSILON_MATCHER);
            if (asterisk) base.addTransition(newInit, newEnd, EPSILON_MATCHER);
        }
        
        base.setInitialState(newInit);
        base.setEndingStates([newEnd]);
        return base;
    }

    _alternativeToNFA(alternativeAst) {
        const nfa = new EngineNFA(); 
        const start = this.newState();
        nfa.addState(start);
        nfa.setInitialState(start);
        const endingStates = [];
    
        for (let i = 0; i < alternativeAst.alternatives.length; i++) {
            // Generate a NFA from the alternative AST //TODO explicar qué es un ast
            const tmp = this._regexToNFA(alternativeAst.alternatives[i], false);
            endingStates.push(...tmp.endingStates);
            nfa.appendNFA(tmp, start);
        }
    
        const end = this.newState();
        nfa.addState(end);
        // Point the end state of each alternative to the union end state
        endingStates.forEach(x => nfa.addTransition(x, end, new EpsilonMatcher()));
        nfa.setEndingStates([end]);
        return nfa;
    }
}

Object.assign(exports, {NFABuilder});
