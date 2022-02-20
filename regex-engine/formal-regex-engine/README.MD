# Formal regex engine

Contains the code of the three first posts about regular expressions. The result is a engine for formal regular expressions.
* [Introduction](https://www.abstractsyntaxseed.com/blog/regex-engine/introduction) (https://www.abstractsyntaxseed.com/blog/regex-engine/introduction)
* [Implementing a NFA](https://www.abstractsyntaxseed.com/blog/regex-engine/implementing-a-nfa) (https://www.abstractsyntaxseed.com/blog/regex-engine/implementing-a-nfa)
* [Building a NFA from a regex](https://www.abstractsyntaxseed.com/blog/regex-engine/regex-to-nfa) (https://www.abstractsyntaxseed.com/blog/regex-engine/regex-to-nfa)

## File structure
* `src`
    * `nfa.js`: Contains the defined in the second post: `State`, `Matcher`, `EpsilonMatcher`, `CharacterMatcher`, `EngineNFA`
    * `nfaBuilder.js`: Contains the code to transform from a regex AST to a NFA (explained in the third post)
    * `regex.js`: A wrapper for the whole regex.
* `index.js`: A simple test case for the regex. Feel free to modify it.

## Running the testcase
```
node index.js
``` 

## Allowed syntax
Currently, `regex.compute(string)` returns either `true` if it matches the string or `false` otherwise.

### Quantifiers
Quantifiers specify how many times a part of the regular expression should be repeated.
* `*` – match zero or more times
* `+` – match one or more times
* `?` – match zero or one time

Quantifiers are greedy by default, so they'll match as much input as they can. To make them lazy add a `?` at the end: `*?`, `+?` and `??`

> A regex like `.*(\w+).*` would fail to capture complete words because `.*` is greedy. For the input `aaa` the regex `(\w+)` would 
> only match one `a`. To fix this make both `.*` lazy: `.*?(\w+).*?`

### Alternation:
* `a|b`: Matches `a` or `b`

### Non-capturing groups
* `(ab|(cd))`