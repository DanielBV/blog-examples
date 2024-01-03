"use strict";
const AST = require('./src/ast.js');

const Expr = AST.extend(); // This is simply to have a node instanceof Expr
const Literal = Expr.extend("Literal", ["value", "type"]);
const Variable = Expr.extend("Variable", ["name", "type"]);
const FunctionCall = Expr.extend("FunctionCall", ["name", "args"], {
    attrEquals: function(attr, first, second) {
        if (attr === "args") {
            if (first.length !== second.length) return false;
            return first.every((val, i) => val.equals(second[i]));
        }
        return this.super().attrEquals(attr, first, second);
    }
});

const ifThenElse = new FunctionCall("ifthenelse", [
    new FunctionCall("equal", [
        new Variable("foo", "integer"),
        new Literal(3, "integer")
    ]),
    new Literal(1, "integer"),
    new Literal(0, "integer")
]); 

const ifThenElse2 = new FunctionCall("ifthenelse", [
    new FunctionCall("equal", [
        new Variable("foo", "integer"),
        new Literal(3, "integer")
    ]),
    new Literal(1, "integer"),
    new Literal(0, "integer")
]); 

const ifThenElseWithDifferentArguments = ifThenElse.with().args([
    new Literal(true, "boolean"),
    new Variable("foo", "integer"),
    new Variable("var", "integer")
]).build();

console.log(ifThenElse.equals(ifThenElse2)); // true
console.log(ifThenElse.equals(ifThenElseWithDifferentArguments)); //false

const myVisitor = {
    visitFunctionCall: () => console.log("IT WORKS🎉🎉🎉")
}

ifThenElse.accept(myVisitor);