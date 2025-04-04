// A getter method returns the value of the property’s value. A getter is also called an accessor.
// A setter method updated the property's value. A setter is also known as mutator. 
/// A getter method starts with the keyword "get" and a setter method begins with "set" method
// Class ke andar ek aisa method jo class ko change kar dein called getter
// Setter wo jo tumse value lein aur class ke andar change kar dein
var Male = /** @class */ (function () {
    function Male(name, age) {
        this.name = name;
        this.age = age;
    }
    Male.prototype.getName = function () {
        return this.name;
    };
    Male.prototype.setName = function (value) {
        this.name = value;
    };
    return Male;
}());
var k1 = new Male("Harishata", 34);
// That's how we use getter and setter in js but in the case of typescript we uses the getter and setter with different method
var Female = /** @class */ (function () {
    function Female(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Object.defineProperty(Female.prototype, "name", {
        //"_name" to indicate that a variable should not be accessed directly outside the class.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Female.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Female.prototype, "changemyname", {
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Female;
}());
var F1 = new Female("Shevta", 22);
F1.name;
