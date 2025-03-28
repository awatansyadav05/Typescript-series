"use strict";
// this is the app.ts file converted into the 'js' file when we compile the 'ts' file it will be created 'js' file automatically
var a = 12;
// this is the datatype as same as the js datatypes
//That's how we declared the array in ts
//let arr =[1,2,3,34,"harsh"];
let arr1 = [1, 2, 3, 4, 5, " harsh"];
// this is the number[] 
let arr = [1, 2, 3, 4, 5];
// How can we create tuples?
let arr2 = [22, " saurav"];
// that's how we create tuple in this ts 
// First create the 'arr2' in this and describe the arr2:[number, string] and simply give the name and number in the above line as given in the example 
// How can you create the enum in the ts
// In TypeScript, an enum (enumeration) is a way to define a set of named constants. It improves code readability and maintainability
var userRoles;
(function (userRoles) {
    userRoles["ADMIN"] = "admin";
    userRoles["GUEST"] = "guest";
    userRoles["SUPER_ADMIN"] = "superAdmin";
})(userRoles || (userRoles = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode["ABANDONED"] = "abandoned status code 500";
    StatusCode["NOTFOUND"] = "not found status code 404";
})(StatusCode || (StatusCode = {}));
// You can see in the 'js' file how can that the enum got updated as we write the only enum code in the ts but in js file it got the changes
//How can we access the enum ?
console.log(userRoles.ADMIN);
// ~Any , unknown , Void , Null , Undefined , Never
// ~ Any --> In this ts is off 
// Means 'b' is not defined hence we can we assign the any number or string to the 'b' in future
let b;
b = 12;
b = true;
// ~ Unknown 
// In this unknown we declared the 'c' as unkown means we can define this as number or string
let c;
c = 13;
c = "avii";
if (typeof c == "string") {
    c.toUpperCase();
}
// Void : In this if we don't return anything in the console, it will term as the void 
function abcd() {
    console.log("hey");
}
//In this script we are not returning any function so it is void
function cdef() {
    return "harsh";
}
// now here we have return the string and declared also what we are declaring
// ~ NULL
// Means that "NULL" that  we can't declare the any value if it is once declared NULL
let f;
//f =12;
// here it is thorwing error that if 'f' is null how can you say that in future it is 'f = 12'
// ~ Undefined 
// Means that "undefined" any data set is not defined hence it will not defined
let d;
//d = 12;
// It will show error because we have given the undefined in 'd'
// ~ Never
// Means that once script is written and and you use the 'Never' it means the script will not run after you apply the 'Never' statement
function fghj() {
    while (true) { }
}
fghj();
console.log("hey");
// Here you can see that log statement is not got highlighted as we have applied that never statement since script will not run once 'Never' is used
