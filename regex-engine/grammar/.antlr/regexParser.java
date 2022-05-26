// Generated from d:\Daniel\blog-examples\regex-engine\grammar\regex.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class regexParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, BACKSLASH=2, ESCAPED_RESERVED_CHAR=3, BACKREFERENCE=4, CHARACTER_CLASS=5, 
		OPEN_PAR=6, CLOSE_PAR=7, ASTERISK=8, PLUS=9, DOT=10, QUESTION_MARK=11, 
		OPEN_BRACKET=12, CLOSE_BRACKET=13, DASH=14, GREATER_THAN=15, LOWER_THAN=16, 
		COLON=17, CARET=18, DOLLAR=19, CHAR=20;
	public static final int
		RULE_main = 0, RULE_regex = 1, RULE_alternative = 2, RULE_expr = 3, RULE_subexpr = 4, 
		RULE_regexGroup = 5, RULE_complexCharacterClass = 6, RULE_complexCCPiece = 7, 
		RULE_allowedCharInCharacterClass = 8, RULE_atomicChar = 9, RULE_quantifier = 10;
	private static String[] makeRuleNames() {
		return new String[] {
			"main", "regex", "alternative", "expr", "subexpr", "regexGroup", "complexCharacterClass", 
			"complexCCPiece", "allowedCharInCharacterClass", "atomicChar", "quantifier"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'|'", "'\\'", null, null, null, "'('", "')'", "'*'", "'+'", "'.'", 
			"'?'", "'['", "']'", "'-'", "'>'", "'<'", "':'", "'^'", "'$'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, "BACKSLASH", "ESCAPED_RESERVED_CHAR", "BACKREFERENCE", "CHARACTER_CLASS", 
			"OPEN_PAR", "CLOSE_PAR", "ASTERISK", "PLUS", "DOT", "QUESTION_MARK", 
			"OPEN_BRACKET", "CLOSE_BRACKET", "DASH", "GREATER_THAN", "LOWER_THAN", 
			"COLON", "CARET", "DOLLAR", "CHAR"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "regex.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public regexParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class MainContext extends ParserRuleContext {
		public RegexContext regex() {
			return getRuleContext(RegexContext.class,0);
		}
		public TerminalNode EOF() { return getToken(regexParser.EOF, 0); }
		public MainContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_main; }
	}

	public final MainContext main() throws RecognitionException {
		MainContext _localctx = new MainContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_main);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(22);
			regex();
			setState(23);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RegexContext extends ParserRuleContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public List<AlternativeContext> alternative() {
			return getRuleContexts(AlternativeContext.class);
		}
		public AlternativeContext alternative(int i) {
			return getRuleContext(AlternativeContext.class,i);
		}
		public RegexContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_regex; }
	}

	public final RegexContext regex() throws RecognitionException {
		RegexContext _localctx = new RegexContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_regex);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(28);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ESCAPED_RESERVED_CHAR) | (1L << BACKREFERENCE) | (1L << CHARACTER_CLASS) | (1L << OPEN_PAR) | (1L << DOT) | (1L << OPEN_BRACKET) | (1L << CLOSE_BRACKET) | (1L << DASH) | (1L << GREATER_THAN) | (1L << LOWER_THAN) | (1L << COLON) | (1L << CARET) | (1L << DOLLAR) | (1L << CHAR))) != 0)) {
				{
				{
				setState(25);
				expr();
				}
				}
				setState(30);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(34);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0) {
				{
				{
				setState(31);
				alternative();
				}
				}
				setState(36);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlternativeContext extends ParserRuleContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public AlternativeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alternative; }
	}

	public final AlternativeContext alternative() throws RecognitionException {
		AlternativeContext _localctx = new AlternativeContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_alternative);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(37);
			match(T__0);
			setState(41);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ESCAPED_RESERVED_CHAR) | (1L << BACKREFERENCE) | (1L << CHARACTER_CLASS) | (1L << OPEN_PAR) | (1L << DOT) | (1L << OPEN_BRACKET) | (1L << CLOSE_BRACKET) | (1L << DASH) | (1L << GREATER_THAN) | (1L << LOWER_THAN) | (1L << COLON) | (1L << CARET) | (1L << DOLLAR) | (1L << CHAR))) != 0)) {
				{
				{
				setState(38);
				expr();
				}
				}
				setState(43);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public SubexprContext subexpr() {
			return getRuleContext(SubexprContext.class,0);
		}
		public QuantifierContext quantifier() {
			return getRuleContext(QuantifierContext.class,0);
		}
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		ExprContext _localctx = new ExprContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(44);
			subexpr();
			setState(46);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ASTERISK) | (1L << PLUS) | (1L << QUESTION_MARK))) != 0)) {
				{
				setState(45);
				quantifier();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SubexprContext extends ParserRuleContext {
		public SubexprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_subexpr; }
	 
		public SubexprContext() { }
		public void copyFrom(SubexprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class DotPatternContext extends SubexprContext {
		public TerminalNode DOT() { return getToken(regexParser.DOT, 0); }
		public DotPatternContext(SubexprContext ctx) { copyFrom(ctx); }
	}
	public static class ComplexClassContext extends SubexprContext {
		public ComplexCharacterClassContext complexCharacterClass() {
			return getRuleContext(ComplexCharacterClassContext.class,0);
		}
		public ComplexClassContext(SubexprContext ctx) { copyFrom(ctx); }
	}
	public static class BackreferenceContext extends SubexprContext {
		public TerminalNode BACKREFERENCE() { return getToken(regexParser.BACKREFERENCE, 0); }
		public BackreferenceContext(SubexprContext ctx) { copyFrom(ctx); }
	}
	public static class GroupPatternContext extends SubexprContext {
		public RegexGroupContext regexGroup() {
			return getRuleContext(RegexGroupContext.class,0);
		}
		public GroupPatternContext(SubexprContext ctx) { copyFrom(ctx); }
	}
	public static class CharacterClassContext extends SubexprContext {
		public TerminalNode CHARACTER_CLASS() { return getToken(regexParser.CHARACTER_CLASS, 0); }
		public CharacterClassContext(SubexprContext ctx) { copyFrom(ctx); }
	}
	public static class CaretAnchorContext extends SubexprContext {
		public TerminalNode CARET() { return getToken(regexParser.CARET, 0); }
		public CaretAnchorContext(SubexprContext ctx) { copyFrom(ctx); }
	}
	public static class DollarAnchorContext extends SubexprContext {
		public TerminalNode DOLLAR() { return getToken(regexParser.DOLLAR, 0); }
		public DollarAnchorContext(SubexprContext ctx) { copyFrom(ctx); }
	}
	public static class EscapedReservedAtomicPatternContext extends SubexprContext {
		public TerminalNode ESCAPED_RESERVED_CHAR() { return getToken(regexParser.ESCAPED_RESERVED_CHAR, 0); }
		public EscapedReservedAtomicPatternContext(SubexprContext ctx) { copyFrom(ctx); }
	}
	public static class AtomicPatternContext extends SubexprContext {
		public AtomicCharContext atomicChar() {
			return getRuleContext(AtomicCharContext.class,0);
		}
		public AtomicPatternContext(SubexprContext ctx) { copyFrom(ctx); }
	}

	public final SubexprContext subexpr() throws RecognitionException {
		SubexprContext _localctx = new SubexprContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_subexpr);
		try {
			setState(57);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OPEN_PAR:
				_localctx = new GroupPatternContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(48);
				regexGroup();
				}
				break;
			case CLOSE_BRACKET:
			case DASH:
			case GREATER_THAN:
			case LOWER_THAN:
			case COLON:
			case CHAR:
				_localctx = new AtomicPatternContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(49);
				atomicChar();
				}
				break;
			case ESCAPED_RESERVED_CHAR:
				_localctx = new EscapedReservedAtomicPatternContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(50);
				match(ESCAPED_RESERVED_CHAR);
				}
				break;
			case CHARACTER_CLASS:
				_localctx = new CharacterClassContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(51);
				match(CHARACTER_CLASS);
				}
				break;
			case OPEN_BRACKET:
				_localctx = new ComplexClassContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(52);
				complexCharacterClass();
				}
				break;
			case BACKREFERENCE:
				_localctx = new BackreferenceContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(53);
				match(BACKREFERENCE);
				}
				break;
			case DOLLAR:
				_localctx = new DollarAnchorContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(54);
				match(DOLLAR);
				}
				break;
			case CARET:
				_localctx = new CaretAnchorContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(55);
				match(CARET);
				}
				break;
			case DOT:
				_localctx = new DotPatternContext(_localctx);
				enterOuterAlt(_localctx, 9);
				{
				setState(56);
				match(DOT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RegexGroupContext extends ParserRuleContext {
		public Token CHAR;
		public List<Token> name = new ArrayList<Token>();
		public Token nonCapture;
		public Token atomic;
		public TerminalNode OPEN_PAR() { return getToken(regexParser.OPEN_PAR, 0); }
		public RegexContext regex() {
			return getRuleContext(RegexContext.class,0);
		}
		public TerminalNode CLOSE_PAR() { return getToken(regexParser.CLOSE_PAR, 0); }
		public TerminalNode QUESTION_MARK() { return getToken(regexParser.QUESTION_MARK, 0); }
		public TerminalNode COLON() { return getToken(regexParser.COLON, 0); }
		public TerminalNode GREATER_THAN() { return getToken(regexParser.GREATER_THAN, 0); }
		public TerminalNode LOWER_THAN() { return getToken(regexParser.LOWER_THAN, 0); }
		public List<TerminalNode> CHAR() { return getTokens(regexParser.CHAR); }
		public TerminalNode CHAR(int i) {
			return getToken(regexParser.CHAR, i);
		}
		public RegexGroupContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_regexGroup; }
	}

	public final RegexGroupContext regexGroup() throws RecognitionException {
		RegexGroupContext _localctx = new RegexGroupContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_regexGroup);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(59);
			match(OPEN_PAR);
			setState(72);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==QUESTION_MARK) {
				{
				setState(60);
				match(QUESTION_MARK);
				setState(70);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case LOWER_THAN:
					{
					{
					setState(61);
					match(LOWER_THAN);
					setState(63); 
					_errHandler.sync(this);
					_la = _input.LA(1);
					do {
						{
						{
						setState(62);
						((RegexGroupContext)_localctx).CHAR = match(CHAR);
						((RegexGroupContext)_localctx).name.add(((RegexGroupContext)_localctx).CHAR);
						}
						}
						setState(65); 
						_errHandler.sync(this);
						_la = _input.LA(1);
					} while ( _la==CHAR );
					setState(67);
					match(GREATER_THAN);
					}
					}
					break;
				case COLON:
					{
					setState(68);
					((RegexGroupContext)_localctx).nonCapture = match(COLON);
					}
					break;
				case GREATER_THAN:
					{
					setState(69);
					((RegexGroupContext)_localctx).atomic = match(GREATER_THAN);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			setState(74);
			regex();
			setState(75);
			match(CLOSE_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComplexCharacterClassContext extends ParserRuleContext {
		public Token negated;
		public TerminalNode OPEN_BRACKET() { return getToken(regexParser.OPEN_BRACKET, 0); }
		public TerminalNode CLOSE_BRACKET() { return getToken(regexParser.CLOSE_BRACKET, 0); }
		public List<ComplexCCPieceContext> complexCCPiece() {
			return getRuleContexts(ComplexCCPieceContext.class);
		}
		public ComplexCCPieceContext complexCCPiece(int i) {
			return getRuleContext(ComplexCCPieceContext.class,i);
		}
		public TerminalNode CARET() { return getToken(regexParser.CARET, 0); }
		public ComplexCharacterClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_complexCharacterClass; }
	}

	public final ComplexCharacterClassContext complexCharacterClass() throws RecognitionException {
		ComplexCharacterClassContext _localctx = new ComplexCharacterClassContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_complexCharacterClass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(77);
			match(OPEN_BRACKET);
			setState(79);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				setState(78);
				((ComplexCharacterClassContext)_localctx).negated = match(CARET);
				}
				break;
			}
			setState(84);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ESCAPED_RESERVED_CHAR) | (1L << CHARACTER_CLASS) | (1L << OPEN_PAR) | (1L << CLOSE_PAR) | (1L << ASTERISK) | (1L << PLUS) | (1L << DOT) | (1L << QUESTION_MARK) | (1L << OPEN_BRACKET) | (1L << DASH) | (1L << GREATER_THAN) | (1L << LOWER_THAN) | (1L << COLON) | (1L << CARET) | (1L << DOLLAR) | (1L << CHAR))) != 0)) {
				{
				{
				setState(81);
				complexCCPiece();
				}
				}
				setState(86);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(87);
			match(CLOSE_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComplexCCPieceContext extends ParserRuleContext {
		public ComplexCCPieceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_complexCCPiece; }
	 
		public ComplexCCPieceContext() { }
		public void copyFrom(ComplexCCPieceContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class CcPiece_ResponeContext extends ComplexCCPieceContext {
		public List<AllowedCharInCharacterClassContext> allowedCharInCharacterClass() {
			return getRuleContexts(AllowedCharInCharacterClassContext.class);
		}
		public AllowedCharInCharacterClassContext allowedCharInCharacterClass(int i) {
			return getRuleContext(AllowedCharInCharacterClassContext.class,i);
		}
		public TerminalNode DASH() { return getToken(regexParser.DASH, 0); }
		public CcPiece_ResponeContext(ComplexCCPieceContext ctx) { copyFrom(ctx); }
	}
	public static class CcPiece_EscapeContext extends ComplexCCPieceContext {
		public TerminalNode CHARACTER_CLASS() { return getToken(regexParser.CHARACTER_CLASS, 0); }
		public CcPiece_EscapeContext(ComplexCCPieceContext ctx) { copyFrom(ctx); }
	}

	public final ComplexCCPieceContext complexCCPiece() throws RecognitionException {
		ComplexCCPieceContext _localctx = new ComplexCCPieceContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_complexCCPiece);
		try {
			setState(95);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ESCAPED_RESERVED_CHAR:
			case OPEN_PAR:
			case CLOSE_PAR:
			case ASTERISK:
			case PLUS:
			case DOT:
			case QUESTION_MARK:
			case OPEN_BRACKET:
			case DASH:
			case GREATER_THAN:
			case LOWER_THAN:
			case COLON:
			case CARET:
			case DOLLAR:
			case CHAR:
				_localctx = new CcPiece_ResponeContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(89);
				allowedCharInCharacterClass();
				setState(92);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
				case 1:
					{
					setState(90);
					match(DASH);
					setState(91);
					allowedCharInCharacterClass();
					}
					break;
				}
				}
				break;
			case CHARACTER_CLASS:
				_localctx = new CcPiece_EscapeContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(94);
				match(CHARACTER_CLASS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AllowedCharInCharacterClassContext extends ParserRuleContext {
		public TerminalNode CHAR() { return getToken(regexParser.CHAR, 0); }
		public TerminalNode DASH() { return getToken(regexParser.DASH, 0); }
		public TerminalNode OPEN_BRACKET() { return getToken(regexParser.OPEN_BRACKET, 0); }
		public TerminalNode OPEN_PAR() { return getToken(regexParser.OPEN_PAR, 0); }
		public TerminalNode CLOSE_PAR() { return getToken(regexParser.CLOSE_PAR, 0); }
		public TerminalNode ASTERISK() { return getToken(regexParser.ASTERISK, 0); }
		public TerminalNode PLUS() { return getToken(regexParser.PLUS, 0); }
		public TerminalNode DOT() { return getToken(regexParser.DOT, 0); }
		public TerminalNode QUESTION_MARK() { return getToken(regexParser.QUESTION_MARK, 0); }
		public TerminalNode ESCAPED_RESERVED_CHAR() { return getToken(regexParser.ESCAPED_RESERVED_CHAR, 0); }
		public TerminalNode GREATER_THAN() { return getToken(regexParser.GREATER_THAN, 0); }
		public TerminalNode LOWER_THAN() { return getToken(regexParser.LOWER_THAN, 0); }
		public TerminalNode COLON() { return getToken(regexParser.COLON, 0); }
		public TerminalNode CARET() { return getToken(regexParser.CARET, 0); }
		public TerminalNode DOLLAR() { return getToken(regexParser.DOLLAR, 0); }
		public AllowedCharInCharacterClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_allowedCharInCharacterClass; }
	}

	public final AllowedCharInCharacterClassContext allowedCharInCharacterClass() throws RecognitionException {
		AllowedCharInCharacterClassContext _localctx = new AllowedCharInCharacterClassContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_allowedCharInCharacterClass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ESCAPED_RESERVED_CHAR) | (1L << OPEN_PAR) | (1L << CLOSE_PAR) | (1L << ASTERISK) | (1L << PLUS) | (1L << DOT) | (1L << QUESTION_MARK) | (1L << OPEN_BRACKET) | (1L << DASH) | (1L << GREATER_THAN) | (1L << LOWER_THAN) | (1L << COLON) | (1L << CARET) | (1L << DOLLAR) | (1L << CHAR))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AtomicCharContext extends ParserRuleContext {
		public TerminalNode CHAR() { return getToken(regexParser.CHAR, 0); }
		public TerminalNode CLOSE_BRACKET() { return getToken(regexParser.CLOSE_BRACKET, 0); }
		public TerminalNode DASH() { return getToken(regexParser.DASH, 0); }
		public TerminalNode GREATER_THAN() { return getToken(regexParser.GREATER_THAN, 0); }
		public TerminalNode LOWER_THAN() { return getToken(regexParser.LOWER_THAN, 0); }
		public TerminalNode COLON() { return getToken(regexParser.COLON, 0); }
		public AtomicCharContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atomicChar; }
	}

	public final AtomicCharContext atomicChar() throws RecognitionException {
		AtomicCharContext _localctx = new AtomicCharContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_atomicChar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(99);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLOSE_BRACKET) | (1L << DASH) | (1L << GREATER_THAN) | (1L << LOWER_THAN) | (1L << COLON) | (1L << CHAR))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QuantifierContext extends ParserRuleContext {
		public QuantifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quantifier; }
	 
		public QuantifierContext() { }
		public void copyFrom(QuantifierContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class LazyAsteriskQuantifierContext extends QuantifierContext {
		public TerminalNode ASTERISK() { return getToken(regexParser.ASTERISK, 0); }
		public TerminalNode QUESTION_MARK() { return getToken(regexParser.QUESTION_MARK, 0); }
		public LazyAsteriskQuantifierContext(QuantifierContext ctx) { copyFrom(ctx); }
	}
	public static class LazyPlusQuantifierContext extends QuantifierContext {
		public TerminalNode PLUS() { return getToken(regexParser.PLUS, 0); }
		public TerminalNode QUESTION_MARK() { return getToken(regexParser.QUESTION_MARK, 0); }
		public LazyPlusQuantifierContext(QuantifierContext ctx) { copyFrom(ctx); }
	}
	public static class QuestionQuantifierContext extends QuantifierContext {
		public TerminalNode QUESTION_MARK() { return getToken(regexParser.QUESTION_MARK, 0); }
		public QuestionQuantifierContext(QuantifierContext ctx) { copyFrom(ctx); }
	}
	public static class LazyQuestionQuantifierContext extends QuantifierContext {
		public List<TerminalNode> QUESTION_MARK() { return getTokens(regexParser.QUESTION_MARK); }
		public TerminalNode QUESTION_MARK(int i) {
			return getToken(regexParser.QUESTION_MARK, i);
		}
		public LazyQuestionQuantifierContext(QuantifierContext ctx) { copyFrom(ctx); }
	}
	public static class PlusQuantifierContext extends QuantifierContext {
		public TerminalNode PLUS() { return getToken(regexParser.PLUS, 0); }
		public PlusQuantifierContext(QuantifierContext ctx) { copyFrom(ctx); }
	}
	public static class AsteriskQuantifierContext extends QuantifierContext {
		public TerminalNode ASTERISK() { return getToken(regexParser.ASTERISK, 0); }
		public AsteriskQuantifierContext(QuantifierContext ctx) { copyFrom(ctx); }
	}

	public final QuantifierContext quantifier() throws RecognitionException {
		QuantifierContext _localctx = new QuantifierContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_quantifier);
		try {
			setState(110);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				_localctx = new AsteriskQuantifierContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(101);
				match(ASTERISK);
				}
				break;
			case 2:
				_localctx = new PlusQuantifierContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(102);
				match(PLUS);
				}
				break;
			case 3:
				_localctx = new QuestionQuantifierContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(103);
				match(QUESTION_MARK);
				}
				break;
			case 4:
				_localctx = new LazyAsteriskQuantifierContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(104);
				match(ASTERISK);
				setState(105);
				match(QUESTION_MARK);
				}
				break;
			case 5:
				_localctx = new LazyPlusQuantifierContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(106);
				match(PLUS);
				setState(107);
				match(QUESTION_MARK);
				}
				break;
			case 6:
				_localctx = new LazyQuestionQuantifierContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(108);
				match(QUESTION_MARK);
				setState(109);
				match(QUESTION_MARK);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\26s\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t\13\4"+
		"\f\t\f\3\2\3\2\3\2\3\3\7\3\35\n\3\f\3\16\3 \13\3\3\3\7\3#\n\3\f\3\16\3"+
		"&\13\3\3\4\3\4\7\4*\n\4\f\4\16\4-\13\4\3\5\3\5\5\5\61\n\5\3\6\3\6\3\6"+
		"\3\6\3\6\3\6\3\6\3\6\3\6\5\6<\n\6\3\7\3\7\3\7\3\7\6\7B\n\7\r\7\16\7C\3"+
		"\7\3\7\3\7\5\7I\n\7\5\7K\n\7\3\7\3\7\3\7\3\b\3\b\5\bR\n\b\3\b\7\bU\n\b"+
		"\f\b\16\bX\13\b\3\b\3\b\3\t\3\t\3\t\5\t_\n\t\3\t\5\tb\n\t\3\n\3\n\3\13"+
		"\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\5\fq\n\f\3\f\2\2\r\2\4\6\b\n"+
		"\f\16\20\22\24\26\2\4\5\2\5\5\b\16\20\26\4\2\17\23\26\26\2\u0080\2\30"+
		"\3\2\2\2\4\36\3\2\2\2\6\'\3\2\2\2\b.\3\2\2\2\n;\3\2\2\2\f=\3\2\2\2\16"+
		"O\3\2\2\2\20a\3\2\2\2\22c\3\2\2\2\24e\3\2\2\2\26p\3\2\2\2\30\31\5\4\3"+
		"\2\31\32\7\2\2\3\32\3\3\2\2\2\33\35\5\b\5\2\34\33\3\2\2\2\35 \3\2\2\2"+
		"\36\34\3\2\2\2\36\37\3\2\2\2\37$\3\2\2\2 \36\3\2\2\2!#\5\6\4\2\"!\3\2"+
		"\2\2#&\3\2\2\2$\"\3\2\2\2$%\3\2\2\2%\5\3\2\2\2&$\3\2\2\2\'+\7\3\2\2(*"+
		"\5\b\5\2)(\3\2\2\2*-\3\2\2\2+)\3\2\2\2+,\3\2\2\2,\7\3\2\2\2-+\3\2\2\2"+
		".\60\5\n\6\2/\61\5\26\f\2\60/\3\2\2\2\60\61\3\2\2\2\61\t\3\2\2\2\62<\5"+
		"\f\7\2\63<\5\24\13\2\64<\7\5\2\2\65<\7\7\2\2\66<\5\16\b\2\67<\7\6\2\2"+
		"8<\7\25\2\29<\7\24\2\2:<\7\f\2\2;\62\3\2\2\2;\63\3\2\2\2;\64\3\2\2\2;"+
		"\65\3\2\2\2;\66\3\2\2\2;\67\3\2\2\2;8\3\2\2\2;9\3\2\2\2;:\3\2\2\2<\13"+
		"\3\2\2\2=J\7\b\2\2>H\7\r\2\2?A\7\22\2\2@B\7\26\2\2A@\3\2\2\2BC\3\2\2\2"+
		"CA\3\2\2\2CD\3\2\2\2DE\3\2\2\2EI\7\21\2\2FI\7\23\2\2GI\7\21\2\2H?\3\2"+
		"\2\2HF\3\2\2\2HG\3\2\2\2IK\3\2\2\2J>\3\2\2\2JK\3\2\2\2KL\3\2\2\2LM\5\4"+
		"\3\2MN\7\t\2\2N\r\3\2\2\2OQ\7\16\2\2PR\7\24\2\2QP\3\2\2\2QR\3\2\2\2RV"+
		"\3\2\2\2SU\5\20\t\2TS\3\2\2\2UX\3\2\2\2VT\3\2\2\2VW\3\2\2\2WY\3\2\2\2"+
		"XV\3\2\2\2YZ\7\17\2\2Z\17\3\2\2\2[^\5\22\n\2\\]\7\20\2\2]_\5\22\n\2^\\"+
		"\3\2\2\2^_\3\2\2\2_b\3\2\2\2`b\7\7\2\2a[\3\2\2\2a`\3\2\2\2b\21\3\2\2\2"+
		"cd\t\2\2\2d\23\3\2\2\2ef\t\3\2\2f\25\3\2\2\2gq\7\n\2\2hq\7\13\2\2iq\7"+
		"\r\2\2jk\7\n\2\2kq\7\r\2\2lm\7\13\2\2mq\7\r\2\2no\7\r\2\2oq\7\r\2\2pg"+
		"\3\2\2\2ph\3\2\2\2pi\3\2\2\2pj\3\2\2\2pl\3\2\2\2pn\3\2\2\2q\27\3\2\2\2"+
		"\17\36$+\60;CHJQV^ap";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}