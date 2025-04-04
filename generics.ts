// Generics : Hum function use karte wqt bata skte hai ki funcion argument ko kis type se treat karein
function fghj<T>(a:T){

}
fghj<string>("Harhs");
fghj<number>(12);
// Here "T" is the template that used in the cpp type where as the "T" is the template we can use it afterwards 
// Its syntax of using is <T> and tell the a : T

// What its use case 
// You write the console.log functions that is to avoid we use genric function to write log function more times
function log<T> (val:T){
  console.log(val);
  
}
log("hey");

// Generic interface
// Refer Lecture 2 for the interface
interface Fashion<T> {
  name:string;
  brand:string;
  price: number
  key:T;
}
function tyui(obj:Fashion<string>){
  
}
tyui({name: "Mens Clothing", brand:"jack and jones", price: 330, key:"herf"})

// Genric classes
class mobilephones<T>{
  constructor (public key:T){}
}
let m1 = new mobilephones<string> ("hey")
let m2 = new mobilephones<number> (34);

console.log(m1,m2);
// you will see the output that both keys are coming one is string and one is number that's because of generic classes

