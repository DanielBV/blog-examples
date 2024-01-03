

class AST {

    static attributes = [];
    _location;

    constructor() {
        this.constructor.attributes.forEach((x, i) => this["_" + x] = arguments[i]); 
    }

    static extend(name, attributes=[], methods=[], staticFunctions=[]) {
        const A = this;
        const myClass = class name extends this {
           
        }
        Object.keys(methods).forEach(name => {
            Object.defineProperty(myClass.prototype, name, {value: methods[name]})
        });
        Object.keys(staticFunctions).forEach(name => {
            Object.defineProperty(myClass, name, {value: staticFunctions[name]})
        });

        //Makes sure that the child at least has all the attributes of the parent class
        this.attributes.forEach(attr => {
            if (!attributes.includes(attr)) throw new Error(`Expected '${name}' to include the property '${attr}' from it's parent '${this.name}'.`)
        });

        attributes.forEach(attr=> Object.defineProperty(myClass.prototype, attr, 
            {
            get: function() {return this["_"+attr]}
            }
        ));
        
        myClass.attributes = attributes;
        Object.defineProperty (myClass, 'name', {value: name});
        this._extendModifier(this, myClass, attributes);
        return myClass;
    }

    static _extendModifier(parentClazz, childClazz, attributes) {
        childClazz.Modifier = class extends parentClazz.Modifier {
         
        };

        const mod = childClazz.Modifier;
        attributes.forEach(attr => {
            Object.defineProperty(mod.prototype, attr, {value: function(val) {this["_" + attr] = val; return this;}});
        });
    }
    

    equals(other, opts={}) {
        if (!other) return false;
        if (opts?.compareLocations && !this.location?.equals(other.location)) return false;
        if (other.prototype !== this.prototype) return false;
        return this.constructor.attributes.every(attr => this.attrEquals(attr, this[attr], other[attr]));
    }

    attrEquals(attr, first, second) {
        if (first === second) return true;
        if (first == null ||  second == null) return false;
        if (first.prototype !== second.prototype) return false;
        if (first instanceof AST) return first.equals(second);
        return false;
    }

    super() {
        return Object.getPrototypeOf(Object.getPrototypeOf(this));

    }

    get location() {
        return this._location;
    }

    with() {
        return new this.constructor.Modifier(this);
    }

    _cloneWithModifier(modifier) {
        const attrs = this.constructor.attributes;
        const cloned = new this.constructor(...attrs.map(x => modifier.getAttr(x)));
        cloned._location = modifier.getAttr("location");
        return cloned;
    }
    
    accept(visitor, ctxt) {
        return visitor["visit" + this.constructor.name](ctxt);
    }

}

AST.Modifier = class {
    constructor(ref) {
        this._location = null;
        this._ref = ref;
    }

    location(loc) {
        this._location = loc;
        return this;
    }

    getAttr(attr) {
        return this["_" + attr] ?? this._ref[attr];
    }


    build() {
        return this._ref._cloneWithModifier(this);
    }
};



module.exports = AST;