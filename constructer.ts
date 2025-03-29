// Constructer is like a recipe that tells the computer how to make a new "thing" based on a blueprint. It's a first thing that runs when you create a new object. 
// constructer wo maang rha jo naya hoga jo naya banana hai
class humanMaker{
  age = 0;
  constructor(public name: string, public isHandsome: boolean){

  }
}
new humanMaker("harsh", true)
// if you write constructer then public is to be written is necessary

class bottleMaker{
  constructor (public brand: string, public price: number, public color: string, 
     public material : string
  )
  {
    
  }
}
 new bottleMaker("milton", 1200 , "red", "metal");