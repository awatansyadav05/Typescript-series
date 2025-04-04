// optional properties are more flexible and maintainable and backward - compilatble by allowing properties to be missing when not needed..
var User = /** @class */ (function () {
    function User(name) {
        //if we use readonly method it can not change the name, because we uses the readonly that's why it is showing error
        //you can not change the name and ts will this but the code will definately run 
        // "readonly" uses because this will not change the name when it is decided
        this.name = name;
    }
    User.prototype.changename = function () {
        this.name = "saurav";
    };
    return User;
}());
var u1 = new User("Harsh");
//u1.changename()
var Profile = /** @class */ (function () {
    function Profile(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        // This is called the parameter properties
    }
    return Profile;
}());
var p1 = new Profile("Avii", 22, "male");
var p2 = new Profile("saurav", 22);
// That's how we write the optional properties in ts
// How can we write parameter properties?
//That's how we create the parameter in ts
// first create the class , define the constructer and access from the class
var Interface = /** @class */ (function () {
    function Interface(name, age) {
        this.name = name;
        this.age = age;
    }
    return Interface;
}());
// Jab aap constructer ke andar hi access modifer define kar dete ho to wo parameter khete hai
