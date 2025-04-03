// this keyword: 
//this keyword refers to the current instance of the class or object that is calling a method. It is used to access instance properties and methods inside the class.
// Jab alag alag methods bante hai to hume this ka reference dena padta hai. Kisi variable ko call krne ke liye we use this function
// means when we wanted to access the part which  is not the part of the class method we can use this. method 
class BottleMaker {
  public name;
  constructor(name : string){
    this.name = name;
  }
}
let b1 = new BottleMaker("milton")

class ABCD {
  name = "avii";
  changesomemorestuff(){
    this.name 
    this.changesomemorestuff
    console.log("hey");
    console.log(this.name);
    
    
  }
 
}

class Bottlemaker {
  public name;
  constructor(name : string){
    this.name = name;
  }
}
let c1 = new Bottlemaker("milton")