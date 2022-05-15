



class Regex {
    constructor(subpatterns) {
        this.subpatterns = subpatterns;
        this.groupName = null;
        this._capturing = true;
        this._atomic = false;
       }

    isCapturingGroup() {
        return this._capturing;
    }

    nonCapturing() {
        this._capturing = false;
        return this;
    }

    isAtomic() {
        return this._atomic;
    }

    atomic() {
        this._atomic = true;
        this._capturing = false;
        return this;
    }
}

class Expression {

    constructor(quantifier, child) {
        this.quantifier = quantifier;
        this.child = child;
    }
}

class RegexAlternative {
    /**
     * 
     * @param {*} groupName Null if it's not a named group.
     * @param  {...any} alternatives 
     */
    constructor(...alternatives) {
        this.groupName = null;
        this._capturing = true;
        this.alternatives = alternatives;
        this._atomic = false;
    }

    isCapturingGroup() {
        return this._capturing;
    }

    nonCapturing() {
        this._capturing = false;
        return this;
    }

    isAtomic() {
        return this._atomic;
    }
    
    atomic() {
        this._atomic = true;
        this._capturing = false;
        return this;
    }
}

class AtomicPattern {
    constructor(char) {
        this.char = char;
    }
}

class DotPattern {
}


class ComplexClassRange {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    matches(c) {
        return c >= this.start && this.end >= c;
    }
}

class ComplexClass {
    constructor(individialChars, ranges, name, negated) {
        this.chars = individialChars;
        this.ranges = ranges;
        this.name = name;
        this.negated = negated;
    }

    matches(c) {
        const base = this.chars.includes(c) || this.ranges.some(x => x.matches(c));
        return this.negated ? !base : base;
    }
}


class DollarAnchor {

}

class CaretAnchor {
    
}

Object.assign(exports, {Regex, Expression, RegexAlternative, AtomicPattern, DotPattern, ComplexClass, DollarAnchor, CaretAnchor, ComplexClassRange});