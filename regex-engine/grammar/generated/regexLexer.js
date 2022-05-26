// Generated from ./grammar/regex.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0016g\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004?",
    "\n\u0004\u0003\u0005\u0003\u0005\u0006\u0005C\n\u0005\r\u0005\u000e",
    "\u0005D\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015",
    "\u0003\u0015\u0002\u0002\u0016\u0003\u0003\u0005\u0004\u0007\u0005\t",
    "\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019",
    "\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015",
    ")\u0016\u0003\u0002\u0005\u0006\u0002ddppttvv\u0003\u00022;\b\u0002",
    "FFUUYYffuuyy\u0002t\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005",
    "\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t",
    "\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r",
    "\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011",
    "\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015",
    "\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019",
    "\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d",
    "\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!",
    "\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003",
    "\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002",
    "\u0002\u0002\u0003+\u0003\u0002\u0002\u0002\u0005-\u0003\u0002\u0002",
    "\u0002\u0007/\u0003\u0002\u0002\u0002\t@\u0003\u0002\u0002\u0002\u000b",
    "F\u0003\u0002\u0002\u0002\rI\u0003\u0002\u0002\u0002\u000fK\u0003\u0002",
    "\u0002\u0002\u0011M\u0003\u0002\u0002\u0002\u0013O\u0003\u0002\u0002",
    "\u0002\u0015Q\u0003\u0002\u0002\u0002\u0017S\u0003\u0002\u0002\u0002",
    "\u0019U\u0003\u0002\u0002\u0002\u001bW\u0003\u0002\u0002\u0002\u001d",
    "Y\u0003\u0002\u0002\u0002\u001f[\u0003\u0002\u0002\u0002!]\u0003\u0002",
    "\u0002\u0002#_\u0003\u0002\u0002\u0002%a\u0003\u0002\u0002\u0002\'c",
    "\u0003\u0002\u0002\u0002)e\u0003\u0002\u0002\u0002+,\u0007~\u0002\u0002",
    ",\u0004\u0003\u0002\u0002\u0002-.\u0007^\u0002\u0002.\u0006\u0003\u0002",
    "\u0002\u0002/>\u0005\u0005\u0003\u00020?\u0005\u0005\u0003\u00021?\u0005",
    "\r\u0007\u00022?\u0005\u000f\b\u00023?\u0005\u0011\t\u00024?\u0005\u0013",
    "\n\u00025?\u0005\u0015\u000b\u00026?\u0005\u0019\r\u00027?\u0005\u001b",
    "\u000e\u00028?\u0005\u001f\u0010\u00029?\u0005!\u0011\u0002:?\u0005",
    "#\u0012\u0002;?\u0005%\u0013\u0002<?\u0005\'\u0014\u0002=?\t\u0002\u0002",
    "\u0002>0\u0003\u0002\u0002\u0002>1\u0003\u0002\u0002\u0002>2\u0003\u0002",
    "\u0002\u0002>3\u0003\u0002\u0002\u0002>4\u0003\u0002\u0002\u0002>5\u0003",
    "\u0002\u0002\u0002>6\u0003\u0002\u0002\u0002>7\u0003\u0002\u0002\u0002",
    ">8\u0003\u0002\u0002\u0002>9\u0003\u0002\u0002\u0002>:\u0003\u0002\u0002",
    "\u0002>;\u0003\u0002\u0002\u0002><\u0003\u0002\u0002\u0002>=\u0003\u0002",
    "\u0002\u0002?\b\u0003\u0002\u0002\u0002@B\u0005\u0005\u0003\u0002AC",
    "\t\u0003\u0002\u0002BA\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002",
    "DB\u0003\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002E\n\u0003\u0002",
    "\u0002\u0002FG\u0005\u0005\u0003\u0002GH\t\u0004\u0002\u0002H\f\u0003",
    "\u0002\u0002\u0002IJ\u0007*\u0002\u0002J\u000e\u0003\u0002\u0002\u0002",
    "KL\u0007+\u0002\u0002L\u0010\u0003\u0002\u0002\u0002MN\u0007,\u0002",
    "\u0002N\u0012\u0003\u0002\u0002\u0002OP\u0007-\u0002\u0002P\u0014\u0003",
    "\u0002\u0002\u0002QR\u00070\u0002\u0002R\u0016\u0003\u0002\u0002\u0002",
    "ST\u0007A\u0002\u0002T\u0018\u0003\u0002\u0002\u0002UV\u0007]\u0002",
    "\u0002V\u001a\u0003\u0002\u0002\u0002WX\u0007_\u0002\u0002X\u001c\u0003",
    "\u0002\u0002\u0002YZ\u0007/\u0002\u0002Z\u001e\u0003\u0002\u0002\u0002",
    "[\\\u0007@\u0002\u0002\\ \u0003\u0002\u0002\u0002]^\u0007>\u0002\u0002",
    "^\"\u0003\u0002\u0002\u0002_`\u0007<\u0002\u0002`$\u0003\u0002\u0002",
    "\u0002ab\u0007`\u0002\u0002b&\u0003\u0002\u0002\u0002cd\u0007&\u0002",
    "\u0002d(\u0003\u0002\u0002\u0002ef\u000b\u0002\u0002\u0002f*\u0003\u0002",
    "\u0002\u0002\u0005\u0002>D\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function regexLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

regexLexer.prototype = Object.create(antlr4.Lexer.prototype);
regexLexer.prototype.constructor = regexLexer;

Object.defineProperty(regexLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

regexLexer.EOF = antlr4.Token.EOF;
regexLexer.T__0 = 1;
regexLexer.BACKSLASH = 2;
regexLexer.ESCAPED_RESERVED_CHAR = 3;
regexLexer.BACKREFERENCE = 4;
regexLexer.CHARACTER_CLASS = 5;
regexLexer.OPEN_PAR = 6;
regexLexer.CLOSE_PAR = 7;
regexLexer.ASTERISK = 8;
regexLexer.PLUS = 9;
regexLexer.DOT = 10;
regexLexer.QUESTION_MARK = 11;
regexLexer.OPEN_BRACKET = 12;
regexLexer.CLOSE_BRACKET = 13;
regexLexer.DASH = 14;
regexLexer.GREATER_THAN = 15;
regexLexer.LOWER_THAN = 16;
regexLexer.COLON = 17;
regexLexer.CARET = 18;
regexLexer.DOLLAR = 19;
regexLexer.CHAR = 20;

regexLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

regexLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

regexLexer.prototype.literalNames = [ null, "'|'", "'\\'", null, null, null, 
                                      "'('", "')'", "'*'", "'+'", "'.'", 
                                      "'?'", "'['", "']'", "'-'", "'>'", 
                                      "'<'", "':'", "'^'", "'$'" ];

regexLexer.prototype.symbolicNames = [ null, null, "BACKSLASH", "ESCAPED_RESERVED_CHAR", 
                                       "BACKREFERENCE", "CHARACTER_CLASS", 
                                       "OPEN_PAR", "CLOSE_PAR", "ASTERISK", 
                                       "PLUS", "DOT", "QUESTION_MARK", "OPEN_BRACKET", 
                                       "CLOSE_BRACKET", "DASH", "GREATER_THAN", 
                                       "LOWER_THAN", "COLON", "CARET", "DOLLAR", 
                                       "CHAR" ];

regexLexer.prototype.ruleNames = [ "T__0", "BACKSLASH", "ESCAPED_RESERVED_CHAR", 
                                   "BACKREFERENCE", "CHARACTER_CLASS", "OPEN_PAR", 
                                   "CLOSE_PAR", "ASTERISK", "PLUS", "DOT", 
                                   "QUESTION_MARK", "OPEN_BRACKET", "CLOSE_BRACKET", 
                                   "DASH", "GREATER_THAN", "LOWER_THAN", 
                                   "COLON", "CARET", "DOLLAR", "CHAR" ];

regexLexer.prototype.grammarFileName = "regex.g4";


exports.regexLexer = regexLexer;

