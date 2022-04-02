const {regexVisitor: RegexVisitor} = require('./generated/regexVisitor');
const {Regex, Expression, AtomicPattern, RegexAlternative, DotPattern, ComplexClass, DollarAnchor, CaretAnchor, ComplexClassRange} = require('./ast');
const EPSILON = Symbol("epsilon");
const ASTERISK = Symbol("*");
const PLUS = Symbol("+");
const OPTIONAL = Symbol("?");
const LAZY_ASTERISK = Symbol("*?");
const LAZY_PLUS = Symbol("+?");
const LAZY_OPTIONAL = Symbol("??");

const SHORTHAND_CHARACTER_CLASSES = {
    "\\d": new ComplexClass([], [new ComplexClassRange("0", "9")], "\d", false),
    "\\D": new ComplexClass([], [new ComplexClassRange("0", "9")], "\D", true),
    "\\w": new ComplexClass(["_"], [new ComplexClassRange("A", "Z"), new ComplexClassRange("a", "z"), new ComplexClassRange("0", "9")], "\w", false),
    "\\W": new ComplexClass(["_"], [new ComplexClassRange("A", "Z"), new ComplexClassRange("a", "z"), new ComplexClassRange("0", "9")], "\W", true),
    "\\s": new ComplexClass( [" ", "\f", "\n", "\r", "\t", "\v", "\u00a0", "\u1680", "\u2028","\u2029","\u202f", "\u205f", "\u3000", "\ufeff"],
       [new ComplexClassRange("\u2000", "\u200a")], "\s", false),
    "\\S": new ComplexClass( [" ", "\f", "\n", "\r", "\t", "\v", "\u00a0", "\u1680", "\u2028","\u2029","\u202f", "\u205f", "\u3000", "\ufeff"],
       [new ComplexClassRange("\u2000", "\u200a")], "\S", true),
};

const ESPECIAL_ESCAPE_CHARACTERS = {"\\n": "\n", "\\b": "\b", "\\t": "\t"};


class AstBuilder extends RegexVisitor {

    visitMain(ctx) {
        return this.visit(ctx.regex());
    }

    visitRegex(ctx) {
        if (ctx.alternative().length === 0)
            return new Regex(this.visit(ctx.expr()));
        else {
            const main = ctx.expr().length === 0 ? this._epsilonAlternative() : new Regex(this.visit(ctx.expr()));
            const alternatives = this.visit(ctx.alternative());
            main.nonCapturing();
            alternatives.forEach(x => x.nonCapturing());
            return new RegexAlternative(main,  ...alternatives);
        }
    }

    visitAlternative(ctx) {
        if (ctx.expr().length !== 0)
            return new Regex(this.visit(ctx.expr()));
        else 
            return this._epsilonAlternative();
    }

    _epsilonAlternative() {
        return new Regex([new Expression(null,new AtomicPattern(EPSILON))]);
    }

    visitExpr(ctx) {
        return new Expression(ctx.quantifier() ? this.visit(ctx.quantifier()) : null, this.visit(ctx.subexpr()));
    }

    visitAtomicPattern(ctx) {
        return new AtomicPattern(ctx.getText());
    }

    visitEscapedReservedAtomicPattern(ctx) {
        const char = ctx.getText();
        const pattern = char in ESPECIAL_ESCAPE_CHARACTERS ? ESPECIAL_ESCAPE_CHARACTERS[char] : char.substring(1); 
        return new AtomicPattern(pattern);
    }

    visitCharacterClass(ctx) {
        const txt = ctx.getText();
        return SHORTHAND_CHARACTER_CLASSES[txt];
    }

      
    visitComplexCharacterClass(ctx) {
        const negated = Boolean(ctx.negated);
        const children = this.visit(ctx.complexCCPiece());
        const single = [];
        const ranges = [];
        for (const c of children) {
           single.push(...c.singles);
           ranges.push(...c.ranges);
        }
        return new ComplexClass(single, ranges, ctx.getText(), negated);
    }
    

    /**
     * This is a single piece, so it's either a single or a range
     * @param {} ctx 
     * @returns 
     */
    visitCcPiece_Respone(ctx) {
        const piece = this.visit(ctx.allowedCharInCharacterClass());
        const base =  {singles: [], ranges: []};
        if (piece.length === 1)
            base.singles.push(piece[0]);
        else 
            base.ranges.push(new ComplexClassRange(piece[0], piece[1]));
        return base;   
    }

  /**
     * This is shorthand like \w. It can include multiple ranges and singles
     * @returns 
     */
    visitCcPiece_Escape(ctx) {
        const txt = ctx.getText();
        const base = {singles: [], ranges: []};
        base.ranges.push(SHORTHAND_CHARACTER_CLASSES[txt]);
        return base;
    }
  
    visitDotPattern() {
        return new ComplexClass(["\n", "\r"], [], true, ".");
    }

    visitDollarAnchor() {
        return new DollarAnchor();
    }

    visitCaretAnchor() {
        return new CaretAnchor();
    }
  
    visitComplexClass(ctx) {
       return this.visit(ctx.complexCharacterClass());
    }

    visitAllowedCharInCharacterClass(ctx) {
        const txt = ctx.getText();
        return txt[0] === "\\" ? txt.substring(1) : txt;
    }

    visitAsteriskQuantifier() {
        return ASTERISK;
    }

    visitQuestionQuantifier() {
        return OPTIONAL;
    }

    visitLazyAsteriskQuantifier() {
        return LAZY_ASTERISK;
    }

    visitLazyPlusQuantifier() {
        return LAZY_PLUS;
    }

    visitLazyQuestionQuantifier() {
        return LAZY_OPTIONAL;
    }
    
    visitGroupPattern(ctx) {
        return this.visit(ctx.regexGroup());
    }

    visitRegexGroup(ctx) {
        const alternative = this.visit(ctx.regex());
        alternative.groupName = ctx.name.map(x => x.text).join("");
        if (ctx.nonCapture) alternative.nonCapturing();
        return alternative;
    }

    visitPlusQuantifier() {
        return PLUS;
    }
}


Object.assign(exports, {AstBuilder, PLUS, LAZY_PLUS, ASTERISK, LAZY_ASTERISK, OPTIONAL, LAZY_OPTIONAL, EPSILON});