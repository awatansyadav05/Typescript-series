// Generics : Hum function use karte wqt bata skte hai ki funcion argument ko kis type se treat karein
function fghj(a) {
}
fghj("Harhs");
fghj(12);
// Here "T" is the template that used in the cpp type where as the "T" is the template we can use it afterwards 
// Its syntax of using is <T> and tell the a : T
// What its use case 
// You write the console.log functions that is to avoid we use genric function to write log function more times
function log(val) {
    console.log(val);
}
log("hey");
function tyui(obj) {
}
tyui({ name: "Mens Clothing", brand: "jack and jones", price: 330, key: "herf" });
// Genric classes
var mobilephones = /** @class */ (function () {
    function mobilephones(key) {
        this.key = key;
    }
    return mobilephones;
}());
var m1 = new mobilephones("hey");
var m2 = new mobilephones(34);
console.log(m1, m2);
// you will see the output that both keys are coming one is string and one is number that's because of generic classes
