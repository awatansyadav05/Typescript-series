// Abstract means that we create the class methods and we extends it further
// Abstract classes in typescript is a class that cannot be intiated directly. 
// It servers as a blueprint for other classes and can define the both abstract.
class Payments{
  constructor(public amount: number , protected account:number){

  }
  ispaymentValid(amount:number){
      return this.amount > 0;
  }
}

class paytm extends Payments{

}

// Another example where to use Animal class extends its Dog
abstract class Animal {
  abstract makeSound(): void;

  move(): void{
    console.log("Moving...");
    
  }
}
class Dog extends Animal{
  makeSound(): void {
      console.log("Bark!");
      
  }
}

const dog = new Dog();
dog.makeSound();
dog.move();