const {regexVisitor: RegexVisitor} = require('./generated/regexVisitor');
const {Regex, Expression, AtomicPattern, RegexAlternative, DotPattern, CharacterClass, ComplexClass, DollarAnchor, CaretAnchor} = require('./ast');
const EPSILON = Symbol("epsilon");
const ASTERISK = Symbol("*");
const PLUS = Symbol("+");
const OPTIONAL = Symbol("?");
const LAZY_ASTERISK = Symbol("*?");
const LAZY_PLUS = Symbol("+?");
const LAZY_OPTIONAL = Symbol("??");

class AstBuilder extends RegexVisitor {

    visitMain(ctx) {
        return this.visit(ctx.regex()).nonCapturing();
    }

    visitRegex(ctx) {
        if (ctx.alternative().length === 0)
            return new Regex(this.visit(ctx.expr()));
        else {
            const main = ctx.expr().length === 0 ? this._epsilonAlternative() : new Regex(this.visit(ctx.expr()));
            return new RegexAlternative(main,  ...this.visit(ctx.alternative()));
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
        return new AtomicPattern(ctx.getText().substring(1));
    }

    visitCharacterClass(ctx) {
        return new CharacterClass(ctx.getText());
    }

    visitDotPattern() {
        return new DotPattern();
    }

    visitDollarAnchor() {
        return new DollarAnchor();
    }

    visitCaretAnchor() {
        return new CaretAnchor();
    }
    
    visitComplexCharacterClass(ctx) {
        const negated = Boolean(ctx.negated);
        const children = this.visit(ctx.complexCCPiece());
        const single = [];
        const ranges = [];
        for (const c of children) {
            if (c.length === 1) single.push(c[0]);
            else ranges.push(c);
        }
        return new ComplexClass(single, ranges, ctx.getText(), negated);
    }
    
    visitComplexClass(ctx) {
       return this.visit(ctx.complexCharacterClass());
    }

    visitComplexCCPiece(ctx) {
        return this.visit(ctx.allowedCharInCharacterClass());
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