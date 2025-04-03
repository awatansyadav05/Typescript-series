// this keyword: 
//this keyword refers to the current instance of the class or object that is calling a method. It is used to access instance properties and methods inside the class.
// Jab alag alag methods bante hai to hume this ka reference dena padta hai. Kisi variable ko call krne ke liye we use this function
// means when we wanted to access the part which  is not the part of the class method we can use this. method 
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name) {
        this.name = name;
    }
    return BottleMaker;
}());
var b1 = new BottleMaker("milton");
var ABCD = /** @class */ (function () {
    function ABCD() {
        this.name = "avii";
    }
    ABCD.prototype.changesomemorestuff = function () {
        this.name;
        this.changesomemorestuff;
        console.log("hey");
        console.log(this.name);
    };
    return ABCD;
}());
var Bottlemaker = /** @class */ (function () {
    function Bottlemaker(name) {
        this.name = name;
    }
    return Bottlemaker;
}());
var c1 = new Bottlemaker("milton");
