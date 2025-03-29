// Objects and classes in typescript
// How can we create class?
// The members of class(properties and methods) are typed using type annotations, similar to variables.
var Device = /** @class */ (function () {
    function Device() {
        this.name = "lg";
        this.price = 12000;
        this.category = "digital";
    }
    return Device;
}());
var car = /** @class */ (function () {
    function car() {
        this.name = "volvo";
        this.price = 1200000;
        this.category = "volkswagen";
    }
    return car;
}());
var Person = /** @class */ (function () {
    function Person() {
        this.name = "";
    }
    return Person;
}());
var person = new Person();
person.name = "john dae";
var d1 = new Device();
var d2 = new car();
// for refering the class object we can create the index.html file that give the result of class 
// How can I create class 
// simply just write class and its name afterwards.
var toycaar = /** @class */ (function () {
    function toycaar() {
        this.color = "";
        this.wheels = 4;
    }
    toycaar.prototype.drive = function () {
        console.log("Vroom the toy car is moving!");
    };
    return toycaar;
}());
// Here ToyCar is a class that says that every car has color and wheels and every car must drive . 
// Object = Actual Toy Car
// Object is that what we get from the class, we build something using blueprint.
var mycar = new toycaar();
mycar.color = "Red";
mycar.drive();
// Actual thing made from the blueprint
