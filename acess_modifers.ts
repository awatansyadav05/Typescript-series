// public means khule ghum raha
// Accessbile everywhere (inside the class , subclass and outside the class)

class CarMaker {
  constructor(public name:string){
    this.name = name;
  }
  changing(){
    this.name = "harsh";
  }
}

let a1 = new CarMaker("Nano");

//private: Accessbile only inside the class where it is defined
// Not accessible in subclass or outside the class

class bottlemaker{
  constructor(private name : string){
    this.name = name;
    // by using private you can use the constructor class in this only
  }
  changing(){
    this.name = "Ramu"
  }
}
let e1 = new bottlemaker("Avii");


class carmaker{
    private halwua: string = "halwua";
    constructor (public name: string){}
}

class Carmakermodel extends  carmaker{
  constructor (name:string){
    super(name);
  }
  getvalue(){
    console.log(this.name );
    
  }
}
let f1 = new Carmakermodel("valvo")
f1.getvalue()
// Here we have made the "halwua " private hence we can't use this another class "carmakermodel" // basically the private we have made would be the only private and will be accessible only in that class

// PROTECTED : we can use accessible inside the class , subclass but not outside the class
class laptopmaker{
  protected name = "hp"
}
class laptopmakermodel extends laptopmaker{
  public material  = "metal";
  changename(){
    this.name = "some other metal"
  }
}

let g1 = new laptopmakermodel();
// g1.name = "some other "
//Here it will show the error while accessing the name because our class is protected but if we change the class name in that class we can change it and also in subclass also.
// we usually don't use protected class. 