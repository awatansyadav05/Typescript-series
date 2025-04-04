// A getter method returns the value of the property’s value. A getter is also called an accessor.
// A setter method updated the property's value. A setter is also known as mutator. 
/// A getter method starts with the keyword "get" and a setter method begins with "set" method
// Class ke andar ek aisa method jo class ko change kar dein called getter
// Setter wo jo tumse value lein aur class ke andar change kar dein


class Male {
  constructor (public name : string , public age: number  ){ }
  getName(){
    return this.name;
  }
  setName(value:string){
      this.name = value;
  }
}
let k1 = new Male("Harishata",34)
// That's how we use getter and setter in js but in the case of typescript we uses the getter and setter with different method

class Female {
  constructor(public _name : string , public _age: number){}
  //"_name" to indicate that a variable should not be accessed directly outside the class.
  get name(){
    return this._name;

  }
  get age(){
    return this._age;
  }
  set changemyname(value:string){
     this._name = value
  }
  // "set" is the we can cahnge the method name in the class which we gave value to the class method
}
let F1 = new Female("Shevta", 22);
F1.name

