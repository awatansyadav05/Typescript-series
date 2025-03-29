// Objects and classes in typescript
// How can we create class?
// The members of class(properties and methods) are typed using type annotations, similar to variables.
class Device {
  name = "lg";
  price = 12000;
  category = "digital";
}
class car {
  name = "volvo";
  price = 1200000;
  category = "volkswagen";
}
class Person {
  name: string ="";
}
const person = new Person();
person.name = "john dae";
 let d1 = new Device();
 let d2 = new car();

 // for refering the class object we can create the index.html file that give the result of class 
 // How can I create class 
 // simply just write class and its name afterwards.

class toycaar {
  color : string ="";
  wheels: number = 4;

drive(){
  console.log("Vroom the toy car is moving!");
  
  }
}
// Here ToyCar is a class that says that every car has color and wheels and every car must drive . 

// Object = Actual Toy Car
// Object is that what we get from the class, we build something using blueprint.
const mycar = new toycaar();
mycar.color = "Red";
mycar.drive();
// Actual thing made from the blueprint