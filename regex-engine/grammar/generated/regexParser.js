// Generated from ./grammar/regex.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var regexVisitor = require('./regexVisitor').regexVisitor;

var grammarFileName = "regex.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0015r\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0007\u0003\u001d\n\u0003",
    "\f\u0003\u000e\u0003 \u000b\u0003\u0003\u0003\u0007\u0003#\n\u0003\f",
    "\u0003\u000e\u0003&\u000b\u0003\u0003\u0004\u0003\u0004\u0007\u0004",
    "*\n\u0004\f\u0004\u000e\u0004-\u000b\u0004\u0003\u0005\u0003\u0005\u0005",
    "\u00051\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006;\n\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0006\u0007A\n\u0007\r\u0007",
    "\u000e\u0007B\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007H\n\u0007",
    "\u0005\u0007J\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0005\bQ\n\b\u0003\b\u0007\bT\n\b\f\b\u000e\bW\u000b\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0005\t^\n\t\u0003\t\u0005\ta\n\t\u0003\n",
    "\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\fp\n\f\u0003\f\u0002\u0002",
    "\r\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0002\u0004",
    "\u0005\u0002\u0005\u0005\u0007\r\u000f\u0015\u0004\u0002\u000e\u0012",
    "\u0015\u0015\u0002~\u0002\u0018\u0003\u0002\u0002\u0002\u0004\u001e",
    "\u0003\u0002\u0002\u0002\u0006\'\u0003\u0002\u0002\u0002\b.\u0003\u0002",
    "\u0002\u0002\n:\u0003\u0002\u0002\u0002\f<\u0003\u0002\u0002\u0002\u000e",
    "N\u0003\u0002\u0002\u0002\u0010`\u0003\u0002\u0002\u0002\u0012b\u0003",
    "\u0002\u0002\u0002\u0014d\u0003\u0002\u0002\u0002\u0016o\u0003\u0002",
    "\u0002\u0002\u0018\u0019\u0005\u0004\u0003\u0002\u0019\u001a\u0007\u0002",
    "\u0002\u0003\u001a\u0003\u0003\u0002\u0002\u0002\u001b\u001d\u0005\b",
    "\u0005\u0002\u001c\u001b\u0003\u0002\u0002\u0002\u001d \u0003\u0002",
    "\u0002\u0002\u001e\u001c\u0003\u0002\u0002\u0002\u001e\u001f\u0003\u0002",
    "\u0002\u0002\u001f$\u0003\u0002\u0002\u0002 \u001e\u0003\u0002\u0002",
    "\u0002!#\u0005\u0006\u0004\u0002\"!\u0003\u0002\u0002\u0002#&\u0003",
    "\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002",
    "%\u0005\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002\u0002\'+\u0007\u0003",
    "\u0002\u0002(*\u0005\b\u0005\u0002)(\u0003\u0002\u0002\u0002*-\u0003",
    "\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002",
    ",\u0007\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002.0\u0005\n",
    "\u0006\u0002/1\u0005\u0016\f\u00020/\u0003\u0002\u0002\u000201\u0003",
    "\u0002\u0002\u00021\t\u0003\u0002\u0002\u00022;\u0005\f\u0007\u0002",
    "3;\u0005\u0014\u000b\u00024;\u0007\u0005\u0002\u00025;\u0007\u0006\u0002",
    "\u00026;\u0005\u000e\b\u00027;\u0007\u0014\u0002\u00028;\u0007\u0013",
    "\u0002\u00029;\u0007\u000b\u0002\u0002:2\u0003\u0002\u0002\u0002:3\u0003",
    "\u0002\u0002\u0002:4\u0003\u0002\u0002\u0002:5\u0003\u0002\u0002\u0002",
    ":6\u0003\u0002\u0002\u0002:7\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002",
    "\u0002:9\u0003\u0002\u0002\u0002;\u000b\u0003\u0002\u0002\u0002<I\u0007",
    "\u0007\u0002\u0002=G\u0007\f\u0002\u0002>@\u0007\u0011\u0002\u0002?",
    "A\u0007\u0015\u0002\u0002@?\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002",
    "\u0002B@\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002CD\u0003\u0002",
    "\u0002\u0002DH\u0007\u0010\u0002\u0002EH\u0007\u0012\u0002\u0002FH\u0007",
    "\u0010\u0002\u0002G>\u0003\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002",
    "GF\u0003\u0002\u0002\u0002HJ\u0003\u0002\u0002\u0002I=\u0003\u0002\u0002",
    "\u0002IJ\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002KL\u0005\u0004",
    "\u0003\u0002LM\u0007\b\u0002\u0002M\r\u0003\u0002\u0002\u0002NP\u0007",
    "\r\u0002\u0002OQ\u0007\u0013\u0002\u0002PO\u0003\u0002\u0002\u0002P",
    "Q\u0003\u0002\u0002\u0002QU\u0003\u0002\u0002\u0002RT\u0005\u0010\t",
    "\u0002SR\u0003\u0002\u0002\u0002TW\u0003\u0002\u0002\u0002US\u0003\u0002",
    "\u0002\u0002UV\u0003\u0002\u0002\u0002VX\u0003\u0002\u0002\u0002WU\u0003",
    "\u0002\u0002\u0002XY\u0007\u000e\u0002\u0002Y\u000f\u0003\u0002\u0002",
    "\u0002Z]\u0005\u0012\n\u0002[\\\u0007\u000f\u0002\u0002\\^\u0005\u0012",
    "\n\u0002][\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^a\u0003",
    "\u0002\u0002\u0002_a\u0007\u0006\u0002\u0002`Z\u0003\u0002\u0002\u0002",
    "`_\u0003\u0002\u0002\u0002a\u0011\u0003\u0002\u0002\u0002bc\t\u0002",
    "\u0002\u0002c\u0013\u0003\u0002\u0002\u0002de\t\u0003\u0002\u0002e\u0015",
    "\u0003\u0002\u0002\u0002fp\u0007\t\u0002\u0002gp\u0007\n\u0002\u0002",
    "hp\u0007\f\u0002\u0002ij\u0007\t\u0002\u0002jp\u0007\f\u0002\u0002k",
    "l\u0007\n\u0002\u0002lp\u0007\f\u0002\u0002mn\u0007\f\u0002\u0002np",
    "\u0007\f\u0002\u0002of\u0003\u0002\u0002\u0002og\u0003\u0002\u0002\u0002",
    "oh\u0003\u0002\u0002\u0002oi\u0003\u0002\u0002\u0002ok\u0003\u0002\u0002",
    "\u0002om\u0003\u0002\u0002\u0002p\u0017\u0003\u0002\u0002\u0002\u000f",
    "\u001e$+0:BGIPU]`o"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'|'", "'\\'", null, null, "'('", "')'", "'*'", 
                     "'+'", "'.'", "'?'", "'['", "']'", "'-'", "'>'", "'<'", 
                     "':'", "'^'", "'$'" ];

var symbolicNames = [ null, null, "BACKSLASH", "ESCAPED_RESERVED_CHAR", 
                      "CHARACTER_CLASS", "OPEN_PAR", "CLOSE_PAR", "ASTERISK", 
                      "PLUS", "DOT", "QUESTION_MARK", "OPEN_BRACKET", "CLOSE_BRACKET", 
                      "DASH", "GREATER_THAN", "LOWER_THAN", "COLON", "CARET", 
                      "DOLLAR", "CHAR" ];

var ruleNames =  [ "main", "regex", "alternative", "expr", "subexpr", "regexGroup", 
                   "complexCharacterClass", "complexCCPiece", "allowedCharInCharacterClass", 
                   "atomicChar", "quantifier" ];

function regexParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

regexParser.prototype = Object.create(antlr4.Parser.prototype);
regexParser.prototype.constructor = regexParser;

Object.defineProperty(regexParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

regexParser.EOF = antlr4.Token.EOF;
regexParser.T__0 = 1;
regexParser.BACKSLASH = 2;
regexParser.ESCAPED_RESERVED_CHAR = 3;
regexParser.CHARACTER_CLASS = 4;
regexParser.OPEN_PAR = 5;
regexParser.CLOSE_PAR = 6;
regexParser.ASTERISK = 7;
regexParser.PLUS = 8;
regexParser.DOT = 9;
regexParser.QUESTION_MARK = 10;
regexParser.OPEN_BRACKET = 11;
regexParser.CLOSE_BRACKET = 12;
regexParser.DASH = 13;
regexParser.GREATER_THAN = 14;
regexParser.LOWER_THAN = 15;
regexParser.COLON = 16;
regexParser.CARET = 17;
regexParser.DOLLAR = 18;
regexParser.CHAR = 19;

regexParser.RULE_main = 0;
regexParser.RULE_regex = 1;
regexParser.RULE_alternative = 2;
regexParser.RULE_expr = 3;
regexParser.RULE_subexpr = 4;
regexParser.RULE_regexGroup = 5;
regexParser.RULE_complexCharacterClass = 6;
regexParser.RULE_complexCCPiece = 7;
regexParser.RULE_allowedCharInCharacterClass = 8;
regexParser.RULE_atomicChar = 9;
regexParser.RULE_quantifier = 10;


function MainContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = regexParser.RULE_main;
    return this;
}

MainContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MainContext.prototype.constructor = MainContext;

MainContext.prototype.regex = function() {
    return this.getTypedRuleContext(RegexContext,0);
};

MainContext.prototype.EOF = function() {
    return this.getToken(regexParser.EOF, 0);
};

MainContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitMain(this);
    } else {
        return visitor.visitChildren(this);
    }
};




regexParser.MainContext = MainContext;

regexParser.prototype.main = function() {

    var localctx = new MainContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, regexParser.RULE_main);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        this.regex();
        this.state = 23;
        this.match(regexParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RegexContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = regexParser.RULE_regex;
    return this;
}

RegexContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RegexContext.prototype.constructor = RegexContext;

RegexContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

RegexContext.prototype.alternative = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AlternativeContext);
    } else {
        return this.getTypedRuleContext(AlternativeContext,i);
    }
};

RegexContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitRegex(this);
    } else {
        return visitor.visitChildren(this);
    }
};




regexParser.RegexContext = RegexContext;

regexParser.prototype.regex = function() {

    var localctx = new RegexContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, regexParser.RULE_regex);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << regexParser.ESCAPED_RESERVED_CHAR) | (1 << regexParser.CHARACTER_CLASS) | (1 << regexParser.OPEN_PAR) | (1 << regexParser.DOT) | (1 << regexParser.OPEN_BRACKET) | (1 << regexParser.CLOSE_BRACKET) | (1 << regexParser.DASH) | (1 << regexParser.GREATER_THAN) | (1 << regexParser.LOWER_THAN) | (1 << regexParser.COLON) | (1 << regexParser.CARET) | (1 << regexParser.DOLLAR) | (1 << regexParser.CHAR))) !== 0)) {
            this.state = 25;
            this.expr();
            this.state = 30;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 34;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===regexParser.T__0) {
            this.state = 31;
            this.alternative();
            this.state = 36;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AlternativeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = regexParser.RULE_alternative;
    return this;
}

AlternativeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AlternativeContext.prototype.constructor = AlternativeContext;

AlternativeContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

AlternativeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitAlternative(this);
    } else {
        return visitor.visitChildren(this);
    }
};




regexParser.AlternativeContext = AlternativeContext;

regexParser.prototype.alternative = function() {

    var localctx = new AlternativeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, regexParser.RULE_alternative);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 37;
        this.match(regexParser.T__0);
        this.state = 41;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << regexParser.ESCAPED_RESERVED_CHAR) | (1 << regexParser.CHARACTER_CLASS) | (1 << regexParser.OPEN_PAR) | (1 << regexParser.DOT) | (1 << regexParser.OPEN_BRACKET) | (1 << regexParser.CLOSE_BRACKET) | (1 << regexParser.DASH) | (1 << regexParser.GREATER_THAN) | (1 << regexParser.LOWER_THAN) | (1 << regexParser.COLON) | (1 << regexParser.CARET) | (1 << regexParser.DOLLAR) | (1 << regexParser.CHAR))) !== 0)) {
            this.state = 38;
            this.expr();
            this.state = 43;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = regexParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.subexpr = function() {
    return this.getTypedRuleContext(SubexprContext,0);
};

ExprContext.prototype.quantifier = function() {
    return this.getTypedRuleContext(QuantifierContext,0);
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




regexParser.ExprContext = ExprContext;

regexParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, regexParser.RULE_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        this.subexpr();
        this.state = 46;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << regexParser.ASTERISK) | (1 << regexParser.PLUS) | (1 << regexParser.QUESTION_MARK))) !== 0)) {
            this.state = 45;
            this.quantifier();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SubexprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = regexParser.RULE_subexpr;
    return this;
}

SubexprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubexprContext.prototype.constructor = SubexprContext;


 
SubexprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function DotPatternContext(parser, ctx) {
	SubexprContext.call(this, parser);
    SubexprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DotPatternContext.prototype = Object.create(SubexprContext.prototype);
DotPatternContext.prototype.constructor = DotPatternContext;

regexParser.DotPatternContext = DotPatternContext;

DotPatternContext.prototype.DOT = function() {
    return this.getToken(regexParser.DOT, 0);
};
DotPatternContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitDotPattern(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ComplexClassContext(parser, ctx) {
	SubexprContext.call(this, parser);
    SubexprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ComplexClassContext.prototype = Object.create(SubexprContext.prototype);
ComplexClassContext.prototype.constructor = ComplexClassContext;

regexParser.ComplexClassContext = ComplexClassContext;

ComplexClassContext.prototype.complexCharacterClass = function() {
    return this.getTypedRuleContext(ComplexCharacterClassContext,0);
};
ComplexClassContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitComplexClass(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GroupPatternContext(parser, ctx) {
	SubexprContext.call(this, parser);
    SubexprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GroupPatternContext.prototype = Object.create(SubexprContext.prototype);
GroupPatternContext.prototype.constructor = GroupPatternContext;

regexParser.GroupPatternContext = GroupPatternContext;

GroupPatternContext.prototype.regexGroup = function() {
    return this.getTypedRuleContext(RegexGroupContext,0);
};
GroupPatternContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitGroupPattern(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CharacterClassContext(parser, ctx) {
	SubexprContext.call(this, parser);
    SubexprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CharacterClassContext.prototype = Object.create(SubexprContext.prototype);
CharacterClassContext.prototype.constructor = CharacterClassContext;

regexParser.CharacterClassContext = CharacterClassContext;

CharacterClassContext.prototype.CHARACTER_CLASS = function() {
    return this.getToken(regexParser.CHARACTER_CLASS, 0);
};
CharacterClassContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitCharacterClass(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CaretAnchorContext(parser, ctx) {
	SubexprContext.call(this, parser);
    SubexprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CaretAnchorContext.prototype = Object.create(SubexprContext.prototype);
CaretAnchorContext.prototype.constructor = CaretAnchorContext;

regexParser.CaretAnchorContext = CaretAnchorContext;

CaretAnchorContext.prototype.CARET = function() {
    return this.getToken(regexParser.CARET, 0);
};
CaretAnchorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitCaretAnchor(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DollarAnchorContext(parser, ctx) {
	SubexprContext.call(this, parser);
    SubexprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DollarAnchorContext.prototype = Object.create(SubexprContext.prototype);
DollarAnchorContext.prototype.constructor = DollarAnchorContext;

regexParser.DollarAnchorContext = DollarAnchorContext;

DollarAnchorContext.prototype.DOLLAR = function() {
    return this.getToken(regexParser.DOLLAR, 0);
};
DollarAnchorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitDollarAnchor(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EscapedReservedAtomicPatternContext(parser, ctx) {
	SubexprContext.call(this, parser);
    SubexprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EscapedReservedAtomicPatternContext.prototype = Object.create(SubexprContext.prototype);
EscapedReservedAtomicPatternContext.prototype.constructor = EscapedReservedAtomicPatternContext;

regexParser.EscapedReservedAtomicPatternContext = EscapedReservedAtomicPatternContext;

EscapedReservedAtomicPatternContext.prototype.ESCAPED_RESERVED_CHAR = function() {
    return this.getToken(regexParser.ESCAPED_RESERVED_CHAR, 0);
};
EscapedReservedAtomicPatternContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitEscapedReservedAtomicPattern(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AtomicPatternContext(parser, ctx) {
	SubexprContext.call(this, parser);
    SubexprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AtomicPatternContext.prototype = Object.create(SubexprContext.prototype);
AtomicPatternContext.prototype.constructor = AtomicPatternContext;

regexParser.AtomicPatternContext = AtomicPatternContext;

AtomicPatternContext.prototype.atomicChar = function() {
    return this.getTypedRuleContext(AtomicCharContext,0);
};
AtomicPatternContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitAtomicPattern(this);
    } else {
        return visitor.visitChildren(this);
    }
};



regexParser.SubexprContext = SubexprContext;

regexParser.prototype.subexpr = function() {

    var localctx = new SubexprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, regexParser.RULE_subexpr);
    try {
        this.state = 56;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case regexParser.OPEN_PAR:
            localctx = new GroupPatternContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 48;
            this.regexGroup();
            break;
        case regexParser.CLOSE_BRACKET:
        case regexParser.DASH:
        case regexParser.GREATER_THAN:
        case regexParser.LOWER_THAN:
        case regexParser.COLON:
        case regexParser.CHAR:
            localctx = new AtomicPatternContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 49;
            this.atomicChar();
            break;
        case regexParser.ESCAPED_RESERVED_CHAR:
            localctx = new EscapedReservedAtomicPatternContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 50;
            this.match(regexParser.ESCAPED_RESERVED_CHAR);
            break;
        case regexParser.CHARACTER_CLASS:
            localctx = new CharacterClassContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 51;
            this.match(regexParser.CHARACTER_CLASS);
            break;
        case regexParser.OPEN_BRACKET:
            localctx = new ComplexClassContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 52;
            this.complexCharacterClass();
            break;
        case regexParser.DOLLAR:
            localctx = new DollarAnchorContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 53;
            this.match(regexParser.DOLLAR);
            break;
        case regexParser.CARET:
            localctx = new CaretAnchorContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 54;
            this.match(regexParser.CARET);
            break;
        case regexParser.DOT:
            localctx = new DotPatternContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 55;
            this.match(regexParser.DOT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RegexGroupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = regexParser.RULE_regexGroup;
    this._CHAR = null; // Token
    this.name = []; // of Tokens
    this.nonCapture = null; // Token
    this.atomic = null; // Token
    return this;
}

RegexGroupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RegexGroupContext.prototype.constructor = RegexGroupContext;

RegexGroupContext.prototype.OPEN_PAR = function() {
    return this.getToken(regexParser.OPEN_PAR, 0);
};

RegexGroupContext.prototype.regex = function() {
    return this.getTypedRuleContext(RegexContext,0);
};

RegexGroupContext.prototype.CLOSE_PAR = function() {
    return this.getToken(regexParser.CLOSE_PAR, 0);
};

RegexGroupContext.prototype.QUESTION_MARK = function() {
    return this.getToken(regexParser.QUESTION_MARK, 0);
};

RegexGroupContext.prototype.COLON = function() {
    return this.getToken(regexParser.COLON, 0);
};

RegexGroupContext.prototype.GREATER_THAN = function() {
    return this.getToken(regexParser.GREATER_THAN, 0);
};

RegexGroupContext.prototype.LOWER_THAN = function() {
    return this.getToken(regexParser.LOWER_THAN, 0);
};

RegexGroupContext.prototype.CHAR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(regexParser.CHAR);
    } else {
        return this.getToken(regexParser.CHAR, i);
    }
};


RegexGroupContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitRegexGroup(this);
    } else {
        return visitor.visitChildren(this);
    }
};




regexParser.RegexGroupContext = RegexGroupContext;

regexParser.prototype.regexGroup = function() {

    var localctx = new RegexGroupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, regexParser.RULE_regexGroup);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
        this.match(regexParser.OPEN_PAR);
        this.state = 71;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===regexParser.QUESTION_MARK) {
            this.state = 59;
            this.match(regexParser.QUESTION_MARK);
            this.state = 69;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case regexParser.LOWER_THAN:
                this.state = 60;
                this.match(regexParser.LOWER_THAN);
                this.state = 62; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 61;
                    localctx._CHAR = this.match(regexParser.CHAR);
                    localctx.name.push(localctx._CHAR);
                    this.state = 64; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===regexParser.CHAR);
                this.state = 66;
                this.match(regexParser.GREATER_THAN);
                break;
            case regexParser.COLON:
                this.state = 67;
                localctx.nonCapture = this.match(regexParser.COLON);
                break;
            case regexParser.GREATER_THAN:
                this.state = 68;
                localctx.atomic = this.match(regexParser.GREATER_THAN);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
        }

        this.state = 73;
        this.regex();
        this.state = 74;
        this.match(regexParser.CLOSE_PAR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ComplexCharacterClassContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = regexParser.RULE_complexCharacterClass;
    this.negated = null; // Token
    return this;
}

ComplexCharacterClassContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComplexCharacterClassContext.prototype.constructor = ComplexCharacterClassContext;

ComplexCharacterClassContext.prototype.OPEN_BRACKET = function() {
    return this.getToken(regexParser.OPEN_BRACKET, 0);
};

ComplexCharacterClassContext.prototype.CLOSE_BRACKET = function() {
    return this.getToken(regexParser.CLOSE_BRACKET, 0);
};

ComplexCharacterClassContext.prototype.complexCCPiece = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ComplexCCPieceContext);
    } else {
        return this.getTypedRuleContext(ComplexCCPieceContext,i);
    }
};

ComplexCharacterClassContext.prototype.CARET = function() {
    return this.getToken(regexParser.CARET, 0);
};

ComplexCharacterClassContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitComplexCharacterClass(this);
    } else {
        return visitor.visitChildren(this);
    }
};




regexParser.ComplexCharacterClassContext = ComplexCharacterClassContext;

regexParser.prototype.complexCharacterClass = function() {

    var localctx = new ComplexCharacterClassContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, regexParser.RULE_complexCharacterClass);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this.match(regexParser.OPEN_BRACKET);
        this.state = 78;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        if(la_===1) {
            this.state = 77;
            localctx.negated = this.match(regexParser.CARET);

        }
        this.state = 83;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << regexParser.ESCAPED_RESERVED_CHAR) | (1 << regexParser.CHARACTER_CLASS) | (1 << regexParser.OPEN_PAR) | (1 << regexParser.CLOSE_PAR) | (1 << regexParser.ASTERISK) | (1 << regexParser.PLUS) | (1 << regexParser.DOT) | (1 << regexParser.QUESTION_MARK) | (1 << regexParser.OPEN_BRACKET) | (1 << regexParser.DASH) | (1 << regexParser.GREATER_THAN) | (1 << regexParser.LOWER_THAN) | (1 << regexParser.COLON) | (1 << regexParser.CARET) | (1 << regexParser.DOLLAR) | (1 << regexParser.CHAR))) !== 0)) {
            this.state = 80;
            this.complexCCPiece();
            this.state = 85;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 86;
        this.match(regexParser.CLOSE_BRACKET);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ComplexCCPieceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = regexParser.RULE_complexCCPiece;
    return this;
}

ComplexCCPieceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComplexCCPieceContext.prototype.constructor = ComplexCCPieceContext;


 
ComplexCCPieceContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function CcPiece_ResponeContext(parser, ctx) {
	ComplexCCPieceContext.call(this, parser);
    ComplexCCPieceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CcPiece_ResponeContext.prototype = Object.create(ComplexCCPieceContext.prototype);
CcPiece_ResponeContext.prototype.constructor = CcPiece_ResponeContext;

regexParser.CcPiece_ResponeContext = CcPiece_ResponeContext;

CcPiece_ResponeContext.prototype.allowedCharInCharacterClass = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AllowedCharInCharacterClassContext);
    } else {
        return this.getTypedRuleContext(AllowedCharInCharacterClassContext,i);
    }
};

CcPiece_ResponeContext.prototype.DASH = function() {
    return this.getToken(regexParser.DASH, 0);
};
CcPiece_ResponeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitCcPiece_Respone(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CcPiece_EscapeContext(parser, ctx) {
	ComplexCCPieceContext.call(this, parser);
    ComplexCCPieceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CcPiece_EscapeContext.prototype = Object.create(ComplexCCPieceContext.prototype);
CcPiece_EscapeContext.prototype.constructor = CcPiece_EscapeContext;

regexParser.CcPiece_EscapeContext = CcPiece_EscapeContext;

CcPiece_EscapeContext.prototype.CHARACTER_CLASS = function() {
    return this.getToken(regexParser.CHARACTER_CLASS, 0);
};
CcPiece_EscapeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitCcPiece_Escape(this);
    } else {
        return visitor.visitChildren(this);
    }
};



regexParser.ComplexCCPieceContext = ComplexCCPieceContext;

regexParser.prototype.complexCCPiece = function() {

    var localctx = new ComplexCCPieceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, regexParser.RULE_complexCCPiece);
    try {
        this.state = 94;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case regexParser.ESCAPED_RESERVED_CHAR:
        case regexParser.OPEN_PAR:
        case regexParser.CLOSE_PAR:
        case regexParser.ASTERISK:
        case regexParser.PLUS:
        case regexParser.DOT:
        case regexParser.QUESTION_MARK:
        case regexParser.OPEN_BRACKET:
        case regexParser.DASH:
        case regexParser.GREATER_THAN:
        case regexParser.LOWER_THAN:
        case regexParser.COLON:
        case regexParser.CARET:
        case regexParser.DOLLAR:
        case regexParser.CHAR:
            localctx = new CcPiece_ResponeContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 88;
            this.allowedCharInCharacterClass();
            this.state = 91;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
            if(la_===1) {
                this.state = 89;
                this.match(regexParser.DASH);
                this.state = 90;
                this.allowedCharInCharacterClass();

            }
            break;
        case regexParser.CHARACTER_CLASS:
            localctx = new CcPiece_EscapeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 93;
            this.match(regexParser.CHARACTER_CLASS);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AllowedCharInCharacterClassContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = regexParser.RULE_allowedCharInCharacterClass;
    return this;
}

AllowedCharInCharacterClassContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AllowedCharInCharacterClassContext.prototype.constructor = AllowedCharInCharacterClassContext;

AllowedCharInCharacterClassContext.prototype.CHAR = function() {
    return this.getToken(regexParser.CHAR, 0);
};

AllowedCharInCharacterClassContext.prototype.DASH = function() {
    return this.getToken(regexParser.DASH, 0);
};

AllowedCharInCharacterClassContext.prototype.OPEN_BRACKET = function() {
    return this.getToken(regexParser.OPEN_BRACKET, 0);
};

AllowedCharInCharacterClassContext.prototype.OPEN_PAR = function() {
    return this.getToken(regexParser.OPEN_PAR, 0);
};

AllowedCharInCharacterClassContext.prototype.CLOSE_PAR = function() {
    return this.getToken(regexParser.CLOSE_PAR, 0);
};

AllowedCharInCharacterClassContext.prototype.ASTERISK = function() {
    return this.getToken(regexParser.ASTERISK, 0);
};

AllowedCharInCharacterClassContext.prototype.PLUS = function() {
    return this.getToken(regexParser.PLUS, 0);
};

AllowedCharInCharacterClassContext.prototype.DOT = function() {
    return this.getToken(regexParser.DOT, 0);
};

AllowedCharInCharacterClassContext.prototype.QUESTION_MARK = function() {
    return this.getToken(regexParser.QUESTION_MARK, 0);
};

AllowedCharInCharacterClassContext.prototype.ESCAPED_RESERVED_CHAR = function() {
    return this.getToken(regexParser.ESCAPED_RESERVED_CHAR, 0);
};

AllowedCharInCharacterClassContext.prototype.GREATER_THAN = function() {
    return this.getToken(regexParser.GREATER_THAN, 0);
};

AllowedCharInCharacterClassContext.prototype.LOWER_THAN = function() {
    return this.getToken(regexParser.LOWER_THAN, 0);
};

AllowedCharInCharacterClassContext.prototype.COLON = function() {
    return this.getToken(regexParser.COLON, 0);
};

AllowedCharInCharacterClassContext.prototype.CARET = function() {
    return this.getToken(regexParser.CARET, 0);
};

AllowedCharInCharacterClassContext.prototype.DOLLAR = function() {
    return this.getToken(regexParser.DOLLAR, 0);
};

AllowedCharInCharacterClassContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitAllowedCharInCharacterClass(this);
    } else {
        return visitor.visitChildren(this);
    }
};




regexParser.AllowedCharInCharacterClassContext = AllowedCharInCharacterClassContext;

regexParser.prototype.allowedCharInCharacterClass = function() {

    var localctx = new AllowedCharInCharacterClassContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, regexParser.RULE_allowedCharInCharacterClass);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << regexParser.ESCAPED_RESERVED_CHAR) | (1 << regexParser.OPEN_PAR) | (1 << regexParser.CLOSE_PAR) | (1 << regexParser.ASTERISK) | (1 << regexParser.PLUS) | (1 << regexParser.DOT) | (1 << regexParser.QUESTION_MARK) | (1 << regexParser.OPEN_BRACKET) | (1 << regexParser.DASH) | (1 << regexParser.GREATER_THAN) | (1 << regexParser.LOWER_THAN) | (1 << regexParser.COLON) | (1 << regexParser.CARET) | (1 << regexParser.DOLLAR) | (1 << regexParser.CHAR))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AtomicCharContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = regexParser.RULE_atomicChar;
    return this;
}

AtomicCharContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomicCharContext.prototype.constructor = AtomicCharContext;

AtomicCharContext.prototype.CHAR = function() {
    return this.getToken(regexParser.CHAR, 0);
};

AtomicCharContext.prototype.CLOSE_BRACKET = function() {
    return this.getToken(regexParser.CLOSE_BRACKET, 0);
};

AtomicCharContext.prototype.DASH = function() {
    return this.getToken(regexParser.DASH, 0);
};

AtomicCharContext.prototype.GREATER_THAN = function() {
    return this.getToken(regexParser.GREATER_THAN, 0);
};

AtomicCharContext.prototype.LOWER_THAN = function() {
    return this.getToken(regexParser.LOWER_THAN, 0);
};

AtomicCharContext.prototype.COLON = function() {
    return this.getToken(regexParser.COLON, 0);
};

AtomicCharContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitAtomicChar(this);
    } else {
        return visitor.visitChildren(this);
    }
};




regexParser.AtomicCharContext = AtomicCharContext;

regexParser.prototype.atomicChar = function() {

    var localctx = new AtomicCharContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, regexParser.RULE_atomicChar);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 98;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << regexParser.CLOSE_BRACKET) | (1 << regexParser.DASH) | (1 << regexParser.GREATER_THAN) | (1 << regexParser.LOWER_THAN) | (1 << regexParser.COLON) | (1 << regexParser.CHAR))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function QuantifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = regexParser.RULE_quantifier;
    return this;
}

QuantifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuantifierContext.prototype.constructor = QuantifierContext;


 
QuantifierContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function LazyAsteriskQuantifierContext(parser, ctx) {
	QuantifierContext.call(this, parser);
    QuantifierContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LazyAsteriskQuantifierContext.prototype = Object.create(QuantifierContext.prototype);
LazyAsteriskQuantifierContext.prototype.constructor = LazyAsteriskQuantifierContext;

regexParser.LazyAsteriskQuantifierContext = LazyAsteriskQuantifierContext;

LazyAsteriskQuantifierContext.prototype.ASTERISK = function() {
    return this.getToken(regexParser.ASTERISK, 0);
};

LazyAsteriskQuantifierContext.prototype.QUESTION_MARK = function() {
    return this.getToken(regexParser.QUESTION_MARK, 0);
};
LazyAsteriskQuantifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitLazyAsteriskQuantifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LazyPlusQuantifierContext(parser, ctx) {
	QuantifierContext.call(this, parser);
    QuantifierContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LazyPlusQuantifierContext.prototype = Object.create(QuantifierContext.prototype);
LazyPlusQuantifierContext.prototype.constructor = LazyPlusQuantifierContext;

regexParser.LazyPlusQuantifierContext = LazyPlusQuantifierContext;

LazyPlusQuantifierContext.prototype.PLUS = function() {
    return this.getToken(regexParser.PLUS, 0);
};

LazyPlusQuantifierContext.prototype.QUESTION_MARK = function() {
    return this.getToken(regexParser.QUESTION_MARK, 0);
};
LazyPlusQuantifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitLazyPlusQuantifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function QuestionQuantifierContext(parser, ctx) {
	QuantifierContext.call(this, parser);
    QuantifierContext.prototype.copyFrom.call(this, ctx);
    return this;
}

QuestionQuantifierContext.prototype = Object.create(QuantifierContext.prototype);
QuestionQuantifierContext.prototype.constructor = QuestionQuantifierContext;

regexParser.QuestionQuantifierContext = QuestionQuantifierContext;

QuestionQuantifierContext.prototype.QUESTION_MARK = function() {
    return this.getToken(regexParser.QUESTION_MARK, 0);
};
QuestionQuantifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitQuestionQuantifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LazyQuestionQuantifierContext(parser, ctx) {
	QuantifierContext.call(this, parser);
    QuantifierContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LazyQuestionQuantifierContext.prototype = Object.create(QuantifierContext.prototype);
LazyQuestionQuantifierContext.prototype.constructor = LazyQuestionQuantifierContext;

regexParser.LazyQuestionQuantifierContext = LazyQuestionQuantifierContext;

LazyQuestionQuantifierContext.prototype.QUESTION_MARK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(regexParser.QUESTION_MARK);
    } else {
        return this.getToken(regexParser.QUESTION_MARK, i);
    }
};

LazyQuestionQuantifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitLazyQuestionQuantifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PlusQuantifierContext(parser, ctx) {
	QuantifierContext.call(this, parser);
    QuantifierContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PlusQuantifierContext.prototype = Object.create(QuantifierContext.prototype);
PlusQuantifierContext.prototype.constructor = PlusQuantifierContext;

regexParser.PlusQuantifierContext = PlusQuantifierContext;

PlusQuantifierContext.prototype.PLUS = function() {
    return this.getToken(regexParser.PLUS, 0);
};
PlusQuantifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitPlusQuantifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AsteriskQuantifierContext(parser, ctx) {
	QuantifierContext.call(this, parser);
    QuantifierContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AsteriskQuantifierContext.prototype = Object.create(QuantifierContext.prototype);
AsteriskQuantifierContext.prototype.constructor = AsteriskQuantifierContext;

regexParser.AsteriskQuantifierContext = AsteriskQuantifierContext;

AsteriskQuantifierContext.prototype.ASTERISK = function() {
    return this.getToken(regexParser.ASTERISK, 0);
};
AsteriskQuantifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof regexVisitor ) {
        return visitor.visitAsteriskQuantifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};



regexParser.QuantifierContext = QuantifierContext;

regexParser.prototype.quantifier = function() {

    var localctx = new QuantifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, regexParser.RULE_quantifier);
    try {
        this.state = 109;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            localctx = new AsteriskQuantifierContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 100;
            this.match(regexParser.ASTERISK);
            break;

        case 2:
            localctx = new PlusQuantifierContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 101;
            this.match(regexParser.PLUS);
            break;

        case 3:
            localctx = new QuestionQuantifierContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 102;
            this.match(regexParser.QUESTION_MARK);
            break;

        case 4:
            localctx = new LazyAsteriskQuantifierContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 103;
            this.match(regexParser.ASTERISK);
            this.state = 104;
            this.match(regexParser.QUESTION_MARK);
            break;

        case 5:
            localctx = new LazyPlusQuantifierContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 105;
            this.match(regexParser.PLUS);
            this.state = 106;
            this.match(regexParser.QUESTION_MARK);
            break;

        case 6:
            localctx = new LazyQuestionQuantifierContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 107;
            this.match(regexParser.QUESTION_MARK);
            this.state = 108;
            this.match(regexParser.QUESTION_MARK);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.regexParser = regexParser;
