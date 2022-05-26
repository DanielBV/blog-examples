class State {
    constructor(name) {
        this.name = name;
        this.transitions = [];
        this.startsGroups = [];
        this.endsGroups = [];
        this.nukesStack = false;
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

/**
 * Represents a transition condition in the regex NFA
 */
class Matcher {
    /**
     * Returns an object thats either {matches: false} or {matches:true, consumes:int}
     */
    matches(string, pos, memory) {
        return {matches: false};
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
        return {matches: this.c === string[pos], consumes:1}
    }

    get label() {
        return this.c;
    }
}

class EpsilonMatcher extends Matcher {
    matches() {
        return {matches: true, consumes:0};

    }

    get label() {
        return "ε";
    }
}

class EndOfStringMatcher extends Matcher {

    matches(string, pos) {
        return {matches: string[pos] === undefined, consumes:0};
    }

    get label() {
        return "$";
    }
}

class EndOfLineMatcher extends Matcher {

    matches(string, pos) {
        return {matches: string[pos] === undefined || string[pos] === "\n", consumes: 0};
    }

    get label() {
        return "$";
    }
}

class StartOfStringMatcher extends Matcher {
    
    matches(string, i) {
        return {matches:i == 0, consumes: 0};
    }

    get label() {
        return "^";
    }
}

class StartOfLineMatcher extends Matcher {
    
    matches(string, i) {
        return {matches: i == 0 || string[i-1] === "\n", consumes: 0};
    }

    get label() {
        return "^";
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
        if (c === undefined) return {matches: false};
        return {matches: this._matcher(c), consumes: 1};
    }

    get label() {
        return this._label;
    }
}

class BackreferenceMatcher extends Matcher {
    constructor(groupNumber) {
        super();
        this.g = groupNumber;
    }

    matches(string, i, memory) {
        const group = memory.PREVIOUS_GROUP_MATCHES[this.g];
        if (!group)
            return {matches: false};
        const [_, start, end] = group;
        if (!end)
            return {matches: false};
        if (string.substring(start,end) === string.substring(i, i + end-start))
            return {matches: true, consumes: end - start};
        return {matches: false};
    }

    get label() {
        return `\\${this.g}`
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
    
    compute(string, i) {
        let stack = [];
        stack.push({i, currentState: this.states[this.initialState], memory: {GROUP_MATCHES:{}, EPSILON_VISITED: [], PREVIOUS_GROUP_MATCHES: []}})
    
        while (stack.length) {
            const {currentState, i, memory} = stack.pop();
            this.computeGroups(currentState, memory, i); 

            if (this.endingStates.includes(currentState.name)) 
                return memory;
            if (currentState.nukesStack)
                stack = [];            
            
            // Transitions are pushed in reverse order because we want the first transition to be in the last position of the stack
            for (let c = currentState.transitions.length-1; c >= 0; c--) {
                const [matcher, toState] = currentState.transitions[c];
                const match = matcher.matches(string, i, memory);
                if (match.matches) { 
                    const copyMemory = JSON.parse(JSON.stringify(memory));
                    const epsilonLoopPossible = matcher.consumes === 0;
                    if (epsilonLoopPossible) {
                        // Don't follow the transition. We already have been in that state
                        if (memory.EPSILON_VISITED.includes(toState.name))
                            continue;
                        copyMemory.EPSILON_VISITED.push(currentState.name);
                    } else 
                        copyMemory.EPSILON_VISITED = [];
                    const nextI = i + match.consumes;
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
            memory.PREVIOUS_GROUP_MATCHES[group] = memory.GROUP_MATCHES[group];
        }
    }
  
    addGroup(start, end, group) {
        this.states[start].addStartGroup(group);
        this.states[end].addEndGroup(group);
    }

    setNukeState(state) {
        this.states[state].nukesStack = true;
    }
}

Object.assign(exports, {State, Matcher, EngineNFA, CharacterMatcher, EpsilonMatcher,StartOfStringMatcher, EndOfStringMatcher, 
    StartOfLineMatcher, EndOfLineMatcher,CustomMatcher, BackreferenceMatcher});