

const { NFARegex } = require("./src/regex.js");


const CASES = [
    ["aaaa", "aaa"],
    ["aaaa", "aaaa"],
    ["a+", "aaaa"],
    ["(a|b)+", "abbabasbababababab"],
    ["(a|b)+c*", "abababacccc"],
    ["(a|b)+c*", "abababa"],
    ["a+c?b+", "acb"],
    ["a+c?b+", "accb"],
];

for (const [regex, input] of CASES) {
    const nfa = new NFARegex(regex);
    const result = nfa.compute(input);
    console.log(`Executing regex '${regex}' for input '${input}'. Result: ${result}`)
}

