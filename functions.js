// Functions in typescript are used to encapsulate resubale logic , improve code structure and enforce type safety.
//Functions is use to return the callback function like that if we write the 12 line of code for the login page so we will simply return that function.
function abcd(name, cb) {
}
abcd("Avii", function (value) {
    console.log(value);
});
function abscde(name, age, cb) {
    cb("hey");
    //cb is callback funtion
}
abscde("Avii", 22, function (arg) {
    console.log("abcd");
});
// How optional Parameter work in Typescript
// we can not use "?" because it is giving error of typeerror
function Persons(name, age, gender) {
    if (gender === void 0) { gender = "not to be disclosed"; }
    console.log(name, age, gender);
}
Persons("saurav", 21, "male");
Persons("Hemant", 21);
// REST parameter 
//How to use and what is the use
// ...args is called spread opertor it means that we dont have to set the parameter in the function 
// simple use ...args "spread operator" to make it simple
function sum() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    console.log(arr);
}
sum(1, 2, 3, 6, 45, 5, 6, 5);
function abcdg(a, b) {
    if (typeof a === "string" && typeof b === undefined) {
        console.log("hey");
    }
    if (typeof a === "string" && typeof b === "number") {
        return 123;
    }
    else
        throw new Error("Something went wrong");
}
abcdg("hey");
abcdg("hey", 13);
