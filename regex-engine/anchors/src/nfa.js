class State {
    constructor(name) {
        this.name = name;
        this.transitions = [];
        this.startsGroups = [];
        this.endsGroups = [];
        this.startsGroups = [];
        this.endsGroups = [];
    }

    addTransition(toState, matcher) {
        this.transitions.push([matcher, toState]);
    }

    unshiftTransition(toState, matcher) {
        this.transitions.unshift([matcher, toState]);
    }

    addStartGroup(group) {
        this.startsGroups.push(group);
    }

    addEndGroup(group) {
        this.endsGroups.push(group);
    }
}

class Matcher {
    /**
     * Returns true if 'char' can be consumed by the matcher
     */
    matches(string, pos) {
        return false;
    }

    isEpsilon() {
        return null;
    }

    get label() {
        return "undefined-matcher"
    }
}

class CharacterMatcher extends Matcher{
    constructor(c) {
        super();
        this.c = c;
    }

    matches(string, pos) {
        return this.c === string[pos];
    }

    isEpsilon() {
        return false;
    }

    get label() {
        return this.c;
    }
}

class EpsilonMatcher extends Matcher {
    matches() {
        return true;
    }

    isEpsilon() {
        return true;
    }

    get label() {
        return "ε";
    }
}

class EndOfStringMatcher extends Matcher {

    isEpsilon() {
        // This is a pseudo-epsilon transition, since it doesn't consume any input 
        // (even though the matcher can't transverse it freely)
        return true; 
    }

    matches(string, pos) {
        return string[pos] === undefined;
    }

    get label() {
        return "$";
    }
}

class EndOfLineMatcher extends Matcher {

    isEpsilon() {
        // This is a pseudo-epsilon transition, since it doesn't consume any input 
        // (even though the matcher can't transverse it freely)
        return true; 
    }

    matches(string, pos) {
        return string[pos] === undefined || string[pos] === "\n";
    }

    get label() {
        return "$";
    }
}

class StartOfStringMatcher extends Matcher {

    isEpsilon() {
        // This is a pseudo-epsilon transition, since it doesn't consume any input 
        // (even though the matcher can't transverse it freely)
        return true; 
    }
    
    matches(string, i) {
        return i == 0;
    }

    get label() {
        return "$";
    }
}

class StartOfLineMatcher extends Matcher {

    isEpsilon() {
        // This is a pseudo-epsilon transition, since it doesn't consume any input 
        // (even though the matcher can't transverse it freely)
        return true; 
    }
    
    matches(string, i) {
        return i == 0 || string[i-1] === "\n";
    }

    get label() {
        return "$";
    }
}

class CustomMatcher extends Matcher {
    constructor(matcher, label) {
        super();
        this._matcher = matcher; 
        this._label = label;
    }
    
    matches(string, pos) {
        const c = string[pos];
        // The engine tries to match with c = undefined when it has run out of input. We have to ensure that in that case it doesn't match, or it could get stuck 
        // in an infinite loop
        if (c === undefined) return false;
        return this._matcher(c);
    }

    isEpsilon() {
        return false;
    }

    get label() {
        return this._label;
    }
}

class EngineNFA {
    constructor() {
        this.states = {};
        this.initialState = null;
        this.endingStates = null;
    }

    setInitialState(state) {
        this.initialState = state;
    }

    setEndingStates(states) {
        this.endingStates = states;
    }

    addState(name) {
        this.states[name] = new State(name);
    }

    declareStates(...names) {
        for (const n of names) this.addState(n);
    }

    addTransition(fromState, toState, matcher) {
        this.states[fromState].addTransition(this.states[toState], matcher);
    }

    /**
     * Like 'addTransition' but the transition is given the highest priority
     */
    unshiftTransition(fromState, toState, matcher) {
        this.states[fromState].unshiftTransition(this.states[toState], matcher);
    }

    /** 
    * This should only be used when:
    * - There are no transitions in otherNFA that go to otherNFA's initial state
    * - The nfa (this) 'unionState' doesn't have transitions
    * The main use of this method in thompson constructions to avoid unnecessary epsilon transitions.
    * If the assertios aren't true, the append might not be correct.
    */
    appendNFA(otherNfa, unionState) {
        for (const s in otherNfa.states) {
            this.states[s] = otherNfa.states[s]; //Add all the states of 'otherNfa' to 'this'. Notice it's the actual states rather than a copy. This is dangerous
        } 
        delete this.states[otherNfa.initialState]; // This state is simplified

        // Before we just added the transitions of the deleted state to the unionState
        for (const [matcher, toTransition] of otherNfa.states[otherNfa.initialState].transitions)
            this.addTransition(unionState, toTransition.name, matcher);

        // Now we also move the groups
        for (const group of otherNfa.states[otherNfa.initialState].startsGroups)
            this.states[unionState].addStartGroup(group);
        for (const group of otherNfa.states[otherNfa.initialState].endsGroups)
            this.states[unionState].addEndGroup(group);

        // If the unionState is and end state, then the end states of the appended nfa are also end states of the fusion.
        if (this.endingStates && this.endingStates.includes(unionState)) {
            this.endingStates.splice(this.endingStates.indexOf(unionState),1, ...otherNfa.endingStates);
        }
    }
    
    compute(string) {
        const stack = [];
        stack.push({i: 0, currentState: this.states[this.initialState], memory: {GROUP_MATCHES:{}, EPSILON_VISITED: []}})
    
        while (stack.length) {
            const {currentState, i, memory} = stack.pop();
            this.computeGroups(currentState, memory, i); // <-- This is new

            if (this.endingStates.includes(currentState.name)) 
                return memory;
            
            const input = string[i];
            
            // Transitions are pushed in reverse order because we want the first transition to be in the last position of the stack
            for (let c = currentState.transitions.length-1; c >= 0; c--) {
                const [matcher, toState] = currentState.transitions[c];
                if (matcher.matches(string, i)) { 
                    const copyMemory = JSON.parse(JSON.stringify(memory));
                    if (matcher.isEpsilon()) {
                        // Don't follow the transition. We already have been in that state
                        if (memory.EPSILON_VISITED.includes(toState.name))
                            break;
                        copyMemory.EPSILON_VISITED.push(currentState.name);
                    } else 
                        copyMemory.EPSILON_VISITED = [];
                    const nextI = matcher.isEpsilon() ? i : i+1;
                    stack.push({i: nextI, currentState: toState, memory: copyMemory});
                }
            }
        }
        return null;
    }
    
    computeGroups(currentState, memory, i) {
        for (const group of currentState.startsGroups) {
            memory.GROUP_MATCHES[group] =  [group, i, null];
        }
        for (const group of currentState.endsGroups) {
            memory.GROUP_MATCHES[group][2] = i;
        }
    }
  
    addGroup(start, end, group) {
        this.states[start].addStartGroup(group);
        this.states[end].addEndGroup(group);
    }
}

Object.assign(exports, {State, Matcher, EngineNFA, CharacterMatcher, EpsilonMatcher,StartOfStringMatcher, EndOfStringMatcher, 
    StartOfLineMatcher, EndOfLineMatcher,CustomMatcher});