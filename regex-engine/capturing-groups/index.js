

const { NFARegex } = require("./src/regex.js");


const CASES = [
    ["((?:a|b)+)(cd)", "bbaacd"],
    ["aaaa", "w"],
    ["(?<lotsOfA>a+)(?<lotsOfB>b+)", "aaabb"],

];

for (const [regex, input] of CASES) {
    const nfa = new NFARegex(regex);
    const result = nfa.compute(input);
    console.log(`Executing regex '${regex}' for input '${input}'. Result: ${JSON.stringify(result)}`)
}

