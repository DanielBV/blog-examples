# Formal regex engine

Contains the code of the four first posts about regular expressions. The result is a engine for formal regular expressions.
* [Introduction](https://www.abstractsyntaxseed.com/blog/regex-engine/introduction) (https://www.abstractsyntaxseed.com/blog/regex-engine/introduction)
* [Implementing a NFA](https://www.abstractsyntaxseed.com/blog/regex-engine/implementing-a-nfa) (https://www.abstractsyntaxseed.com/blog/regex-engine/implementing-a-nfa)
* [Building a NFA from a regex](https://www.abstractsyntaxseed.com/blog/regex-engine/regex-to-nfa) (https://www.abstractsyntaxseed.com/blog/regex-engine/regex-to-nfa)
* [Adding Capturing groups](https://www.abstractsyntaxseed.com/blog/regex-engine/capturing-groups) (https://www.abstractsyntaxseed.com/blog/regex-engine/capturing-groups)

**The main difference from the formal regex engine** is that it allows capturing groups, named capturing groups and non capturing groups. Also
executing the regex now returns an object like `{groups:{"0": "abcd", "namedGroup": "ab"}}`. The whole matched string is always in group 0.

## File structure
* `src`
    * `nfa.js`: Contains the defined in the second post: `State`, `Matcher`, `EpsilonMatcher`, `CharacterMatcher`, `EngineNFA`
    * `nfaBuilder.js`: Contains the code to transform from a regex AST to a NFA (explained in the third post)
    * `regex.js`: A wrapper for the whole regex.
* `index.js`: A simple test case for the regex. Feel free to modify it.

## Installation
```
cd ..
npm install
``` 
## Running the testcase
```
node index.js
``` 

## Allowed syntax
Currently, `regex.compute(string)` returns an object with a `group` attribute if it matches the string or `null` otherwise. `group` is a object, 
the keys are the name of the group and the value is the substring they matched.

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
    * Empty alternatives are allowed: `(a|)` is equivalent to `a?`

### Capturing groups:
* Capturing groups: `(ab)`
* Non-capturing groups: `(?:ab)`
* Named-capturing groups: `(?<name>ab)`
