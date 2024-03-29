// Generated from d:\Daniel\blog-examples\regex-engine\grammar\regex.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class regexLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, BACKSLASH=2, ESCAPED_RESERVED_CHAR=3, BACKREFERENCE=4, CHARACTER_CLASS=5, 
		OPEN_PAR=6, CLOSE_PAR=7, ASTERISK=8, PLUS=9, DOT=10, QUESTION_MARK=11, 
		OPEN_BRACKET=12, CLOSE_BRACKET=13, DASH=14, GREATER_THAN=15, LOWER_THAN=16, 
		COLON=17, CARET=18, DOLLAR=19, CHAR=20;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "BACKSLASH", "ESCAPED_RESERVED_CHAR", "BACKREFERENCE", "CHARACTER_CLASS", 
			"OPEN_PAR", "CLOSE_PAR", "ASTERISK", "PLUS", "DOT", "QUESTION_MARK", 
			"OPEN_BRACKET", "CLOSE_BRACKET", "DASH", "GREATER_THAN", "LOWER_THAN", 
			"COLON", "CARET", "DOLLAR", "CHAR"
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


	public regexLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "regex.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\26g\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\3\2\3\2\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4?\n\4\3\5\3\5\6\5C\n\5\r\5\16"+
		"\5D\3\6\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\r"+
		"\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3\21\3\21\3\22\3\22\3\23\3\23\3\24"+
		"\3\24\3\25\3\25\2\2\26\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27"+
		"\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26\3\2\5\6\2ddppttvv\3\2"+
		"\62;\b\2FFUUYYffuuyy\2t\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2"+
		"\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25"+
		"\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2"+
		"\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\3+\3\2\2"+
		"\2\5-\3\2\2\2\7/\3\2\2\2\t@\3\2\2\2\13F\3\2\2\2\rI\3\2\2\2\17K\3\2\2\2"+
		"\21M\3\2\2\2\23O\3\2\2\2\25Q\3\2\2\2\27S\3\2\2\2\31U\3\2\2\2\33W\3\2\2"+
		"\2\35Y\3\2\2\2\37[\3\2\2\2!]\3\2\2\2#_\3\2\2\2%a\3\2\2\2\'c\3\2\2\2)e"+
		"\3\2\2\2+,\7~\2\2,\4\3\2\2\2-.\7^\2\2.\6\3\2\2\2/>\5\5\3\2\60?\5\5\3\2"+
		"\61?\5\r\7\2\62?\5\17\b\2\63?\5\21\t\2\64?\5\23\n\2\65?\5\25\13\2\66?"+
		"\5\31\r\2\67?\5\33\16\28?\5\37\20\29?\5!\21\2:?\5#\22\2;?\5%\23\2<?\5"+
		"\'\24\2=?\t\2\2\2>\60\3\2\2\2>\61\3\2\2\2>\62\3\2\2\2>\63\3\2\2\2>\64"+
		"\3\2\2\2>\65\3\2\2\2>\66\3\2\2\2>\67\3\2\2\2>8\3\2\2\2>9\3\2\2\2>:\3\2"+
		"\2\2>;\3\2\2\2><\3\2\2\2>=\3\2\2\2?\b\3\2\2\2@B\5\5\3\2AC\t\3\2\2BA\3"+
		"\2\2\2CD\3\2\2\2DB\3\2\2\2DE\3\2\2\2E\n\3\2\2\2FG\5\5\3\2GH\t\4\2\2H\f"+
		"\3\2\2\2IJ\7*\2\2J\16\3\2\2\2KL\7+\2\2L\20\3\2\2\2MN\7,\2\2N\22\3\2\2"+
		"\2OP\7-\2\2P\24\3\2\2\2QR\7\60\2\2R\26\3\2\2\2ST\7A\2\2T\30\3\2\2\2UV"+
		"\7]\2\2V\32\3\2\2\2WX\7_\2\2X\34\3\2\2\2YZ\7/\2\2Z\36\3\2\2\2[\\\7@\2"+
		"\2\\ \3\2\2\2]^\7>\2\2^\"\3\2\2\2_`\7<\2\2`$\3\2\2\2ab\7`\2\2b&\3\2\2"+
		"\2cd\7&\2\2d(\3\2\2\2ef\13\2\2\2f*\3\2\2\2\5\2>D\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}