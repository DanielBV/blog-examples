

const { NFARegex } = require('../src/regex');
describe('test regex - capturing groups', () => {


    describe('alternatives', () => {
        const CASES = [
            ["(a|b)", "a", {groups: {0: "a", 1: "a"}}],
            ["(a|b)", "b", {groups: {0: "b", 1: "b"}}],
            ["(a|b|c)", "c", {groups: {0: "c", 1: "c"}}],
            ["b(a|)b", "bb", {groups: {0: "bb", 1: ""}}],
            ["b(|a)b", "bb", {groups: {0: "bb", 1: ""}}],
            ["b(|)b", "bb", {groups: {0: "bb", 1: ""}}],

        ];
    
        for (const [regex, input, result] of CASES) {
            it (`Regex ${regex} with input ${input}`, () => {
                expect(new NFARegex(regex).compute(input)).toEqual(result);
            });
        }
        
    });


    describe('quantifiers', () => {
        const CASES = [
            ["(a+?)(a+)", "aaaa", {groups: {0: "aaaa", 1: "a", 2: "aaa"}}],
            ["(a+)", "aab", {groups: {0: "aa", 1: "aa"}}],
            ["ab+a", "aba", {groups: {0: "aba"}}],
            ["ab+a", "aa", null],
            ["ab*a", "abbba", {groups: {0: "abbba"}}],
            ["ab*a", "aa", {groups: {0: "aa"}}],
            ["ab?a", "aa", {groups: {0: "aa"}}],
            ["(a??)a+", "aa", {groups: {0: "aa", 1: ""}}],
            ["(a*?)a+", "aa", {groups: {0: "aa", 1: ""}}],
        ];
    
        for (const [regex, input, result] of CASES) {
            it (`Regex ${regex} with input ${input}`, () => {
                expect(new NFARegex(regex).compute(input)).toEqual(result);
            });
        }
        
    });

    
    describe('groups', () => {
        const CASES = [
            ["((a))+", "aa", {groups: {0: "aa", 1: "a", 2: "a"}}],
            ["(?<name>a+)", "aaaa", {groups: {0: "aaaa", "name": "aaaa"}}],
            ["(?<name>a+)(?<name>b+)", "aabb", {groups: {0: "aabb", "name": "bb"}}],
            ["((?:ab)+)", "abab", {groups: {0: "abab", 1: "abab"}}],
            ["a(|)b", "ab", {groups: {0: "ab", 1: ""}}],
            ["(?:a|b|c)", "a", {groups: {0: "a"}}],
        ];
    
        for (const [regex, input, result] of CASES) {
            it (`Regex ${regex} with input ${input}`, () => {
                expect(new NFARegex(regex).compute(input)).toEqual(result);
            });
        }
        
    });

});

