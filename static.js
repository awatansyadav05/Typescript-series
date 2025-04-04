// Static member means that we can use static by the writing static means static is that we can access without making any instance
var Hero = /** @class */ (function () {
    function Hero() {
    }
    Hero.getRandomNumber = function () {
        return Math.random();
    };
    Hero.version = 1.0;
    return Hero;
}());
Hero.version;
// We can access any number from the static without creating any instances
