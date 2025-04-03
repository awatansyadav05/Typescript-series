// public means khule ghum raha
// Accessbile everywhere (inside the class , subclass and outside the class)
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
var CarMaker = /** @class */ (function () {
    function CarMaker(name) {
        this.name = name;
        this.name = name;
    }
    CarMaker.prototype.changing = function () {
        this.name = "harsh";
    };
    return CarMaker;
}());
var a1 = new CarMaker("Nano");
//private: Accessbile only inside the class where it is defined
// Not accessible in subclass or outside the class
var bottlemaker = /** @class */ (function () {
    function bottlemaker(name) {
        this.name = name;
        this.name = name;
        // by using private you can use the constructor class in this only
    }
    bottlemaker.prototype.changing = function () {
        this.name = "Ramu";
    };
    return bottlemaker;
}());
var e1 = new bottlemaker("Avii");
var carmaker = /** @class */ (function () {
    function carmaker(name) {
        this.name = name;
        this.halwua = "halwua";
    }
    return carmaker;
}());
var Carmakermodel = /** @class */ (function (_super) {
    __extends(Carmakermodel, _super);
    function Carmakermodel(name) {
        return _super.call(this, name) || this;
    }
    Carmakermodel.prototype.getvalue = function () {
        console.log(this.name);
    };
    return Carmakermodel;
}(carmaker));
var f1 = new Carmakermodel("valvo");
f1.getvalue();
// Here we have made the "halwua " private hence we can't use this another class "carmakermodel" // basically the private we have made would be the only private and will be accessible only in that class
// PROTECTED : we can use accessible inside the class , subclass but not outside the class
var laptopmaker = /** @class */ (function () {
    function laptopmaker() {
        this.name = "hp";
    }
    return laptopmaker;
}());
var laptopmakermodel = /** @class */ (function (_super) {
    __extends(laptopmakermodel, _super);
    function laptopmakermodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.material = "metal";
        return _this;
    }
    laptopmakermodel.prototype.changename = function () {
        this.name = "some other metal";
    };
    return laptopmakermodel;
}(laptopmaker));
var g1 = new laptopmakermodel();
// g1.name = "some other "
//Here it will show the error while accessing the name because our class is protected but if we change the class name in that class we can change it and also in subclass also.
// we usually don't use protected class. 
