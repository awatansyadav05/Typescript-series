var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract means that we create the class methods and we extends it further
// Abstract classes in typescript is a class that cannot be intiated directly. 
// It servers as a blueprint for other classes and can define the both abstract.
var Payments = /** @class */ (function () {
    function Payments(amount, account) {
        this.amount = amount;
        this.account = account;
    }
    Payments.prototype.ispaymentValid = function (amount) {
        return this.amount > 0;
    };
    return Payments;
}());
var paytm = /** @class */ (function (_super) {
    __extends(paytm, _super);
    function paytm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return paytm;
}(Payments));
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("Moving...");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Bark!");
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.makeSound();
dog.move();
