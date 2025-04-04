// optional properties are more flexible and maintainable and backward - compilatble by allowing properties to be missing when not needed..

class User{
  constructor(public   name:string){
    //if we use readonly method it can not change the name, because we uses the readonly that's why it is showing error
    //you can not change the name and ts will this but the code will definately run 
    // "readonly" uses because this will not change the name when it is decided

  }
  changename(){
    this.name = "saurav";
  }
}
let u1 = new User("Harsh");
//u1.changename()


class Profile{
  constructor (public name : string , public age : number, public gender?:string)   {
// This is called the parameter properties
  }
}
let p1 = new Profile("Avii" , 22, "male")
let p2 = new Profile("saurav" , 22, )
// That's how we write the optional properties in ts

// How can we write parameter properties?
//That's how we create the parameter in ts
// first create the class , define the constructer and access from the class
class Interface {
  public name;
  public age;
  constructor (name:string,age : number){
    this.name = name;
    this.age = age;
  }
}

// Jab aap constructer ke andar hi access modifer define kar dete ho to wo parameter khete hai