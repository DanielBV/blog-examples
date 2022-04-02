// Generated from ./grammar/regex.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by regexParser.

function regexVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

regexVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
regexVisitor.prototype.constructor = regexVisitor;

// Visit a parse tree produced by regexParser#main.
regexVisitor.prototype.visitMain = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by regexParser#regex.
regexVisitor.prototype.visitRegex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by regexParser#alternative.
regexVisitor.prototype.visitAlternative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by regexParser#expr.
regexVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by regexParser#groupPattern.
regexVisitor.prototype.visitGroupPattern = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by regexParser#atomicPattern.
regexVisitor.prototype.visitAtomicPattern = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by regexParser#escapedReservedAtomicPattern.
regexVisitor.prototype.visitEscapedReservedAtomicPattern = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by regexParser#characterClass.
regexVisitor.prototype.visitCharacterClass = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by regexParser#ComplexClass.
regexVisitor.prototype.visitComplexClass = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by regexParser#dollarAnchor.
regexVisitor.prototype.visitDollarAnchor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by regexParser#caretAnchor.
regexVisitor.prototype.visitCaretAnchor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by regexParser#dotPattern.
regexVisitor.prototype.visitDotPattern = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by regexParser#regexGroup.
regexVisitor.prototype.visitRegexGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by regexParser#complexCharacterClass.
regexVisitor.prototype.visitComplexCharacterClass = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by regexParser#ccPiece_Respone.
regexVisitor.prototype.visitCcPiece_Respone = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by regexParser#ccPiece_Escape.
regexVisitor.prototype.visitCcPiece_Escape = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by regexParser#allowedCharInCharacterClass.
regexVisitor.prototype.visitAllowedCharInCharacterClass = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by regexParser#atomicChar.
regexVisitor.prototype.visitAtomicChar = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by regexParser#asteriskQuantifier.
regexVisitor.prototype.visitAsteriskQuantifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by regexParser#plusQuantifier.
regexVisitor.prototype.visitPlusQuantifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by regexParser#questionQuantifier.
regexVisitor.prototype.visitQuestionQuantifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by regexParser#lazyAsteriskQuantifier.
regexVisitor.prototype.visitLazyAsteriskQuantifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by regexParser#lazyPlusQuantifier.
regexVisitor.prototype.visitLazyPlusQuantifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by regexParser#lazyQuestionQuantifier.
regexVisitor.prototype.visitLazyQuestionQuantifier = function(ctx) {
  return this.visitChildren(ctx);
};



exports.regexVisitor = regexVisitor;