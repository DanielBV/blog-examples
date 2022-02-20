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
        return this.nfa.compute(string);
    }
}

Object.assign(exports, {NFARegex});
