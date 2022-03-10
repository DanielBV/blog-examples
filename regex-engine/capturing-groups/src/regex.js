const parseRegex =  require("../../grammar/parser.js");
const { NFABuilder } = require("./nfaBuilder.js");


class NFARegex {
    constructor (regex) {
        this.source = regex;
        const ast = parseRegex(regex);
        const builder = new NFABuilder();
        this.nfa = builder.regexToNFA(ast);
    }

    compute(string) {
        const memory =  this.nfa.compute(string);
        if (!memory) return null;
        const result = {groups: {}};
        for (const [group, start, end] of Object.values(memory.GROUP_MATCHES)) {
            result.groups[group] = string.substring(start, end);
        }
        return result;
    }
}

Object.assign(exports, {NFARegex});
