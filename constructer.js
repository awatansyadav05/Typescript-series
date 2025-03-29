// Constructer is like a recipe that tells the computer how to make a new "thing" based on a blueprint. It's a first thing that runs when you create a new object. 
// constructer wo maang rha jo naya hoga jo naya banana hai
var humanMaker = /** @class */ (function () {
    function humanMaker(name, isHandsome) {
        this.name = name;
        this.isHandsome = isHandsome;
        this.age = 0;
    }
    return humanMaker;
}());
new humanMaker("harsh", true);
// if you write constructer then public is to be written is necessary
var bottleMaker = /** @class */ (function () {
    function bottleMaker(brand, price, color, material) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.material = material;
    }
    return bottleMaker;
}());
new bottleMaker("milton", 1200, "red", "metal");
