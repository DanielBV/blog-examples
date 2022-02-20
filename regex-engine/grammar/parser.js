
const antlr4 = require('antlr4');
const { ErrorListener } = require('antlr4/error');
const { AstBuilder } = require('./astBuilder');
const {regexLexer: RegexLexer} = require('./generated/regexLexer');
const {regexParser: RegexParser} = require('./generated/regexParser');

class CustomErrorListener extends ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        console.log(msg);
        throw Error(msg);
    }
}
function parseRegex(regex) {
    const chars = new antlr4.InputStream(regex)
    const lexer = new RegexLexer(chars)
    const tokens  = new antlr4.CommonTokenStream(lexer)
    const parser = new RegexParser(tokens)
    parser.buildParseTrees = true;
    parser.addErrorListener(new CustomErrorListener());
    const tree = parser.main();
    return new AstBuilder().visit(tree);
}

module.exports = parseRegex;