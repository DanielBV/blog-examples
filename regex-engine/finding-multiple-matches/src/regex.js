const parseRegex =  require("../../grammar/parser.js");
const { NFABuilder } = require("./nfaBuilder.js");


class NFARegex {
    constructor (regex, modes) {
        this.source = regex;
        const ast = parseRegex(regex);
        const builder = new NFABuilder(modes);
        this.nfa = builder.regexToNFA(ast);
        this._currentPointer = 0;
    }

    _memoryToFinalResult(memory, string) {
        const result = {groups: {}};
        for (const [group, start, end] of Object.values(memory.GROUP_MATCHES)) {
            result.groups[group] = string.substring(start, end);
        }
        return result;
    }

    find(string) {
        for (let i = this._currentPointer; i < string.length; i++) {
            const r = this.nfa.compute(string, i);
            if (!r) continue;
            this._currentPointer = r.GROUP_MATCHES[0][2];
            return this._memoryToFinalResult(r, string);
        }
    }
    
    find(string) {
        for (let i = this._currentPointer; i < string.length; i++) {
            const r = this.nfa.compute(string, i);
            if (!r) continue;
            this._currentPointer = r.GROUP_MATCHES[0][2];
            return this._memoryToFinalResult(r, string);
        }
        this._currentPointer = string.length; // This is to cache that there are no more matches.
        return null;
    }

    findAll(string) {
        let i = 0;
        const matches = [];
        while (i < string.length) {
            const r = this.nfa.compute(string, i);
            if (r) {
                matches.push(this._memoryToFinalResult(r, string));
                i = i ===  r.GROUP_MATCHES[0][2] ? i + 1 :  r.GROUP_MATCHES[0][2];
            } else 
                i++;
        }
        return matches;
    }


    compute(string) {
        const memory =  this.nfa.compute(string, 0);
        if (!memory) return null;
        return this._memoryToFinalResult(memory, string);
    }
}

Object.assign(exports, {NFARegex});
