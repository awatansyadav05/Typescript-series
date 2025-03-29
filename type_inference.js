// Type Inference
// -Understaning type inference
// -Types annotations
// Means you can say that my 'e' would be the number or string or boolean it means that we can declared the anything in the future
var e;
// | is the union means that it can be this or this can be this may be number or string or boolean
e = 12;
e = "harsh";
e = false;
// Type annonations syntax
var w;
function absc(a, b) { }
function qwer(obj) { }
qwer({ name: "Awatans", email: "aviiyadav@gmail.com", password: "avii", gender: "male" });
function abce(obj) {
    obj.admin; // Here we can see that admin is shown on 'Obj'
}
function abccd(obj) {
    obj.email;
    obj.name;
}
//Here you can see that we have created two instances but it is merged into single instance
