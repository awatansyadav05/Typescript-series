// Type Inference
// -Understaning type inference
// -Types annotations


// Means you can say that my 'e' would be the number or string or boolean it means that we can declared the anything in the future
let e : number | string| boolean; 
// | is the union means that it can be this or this can be this may be number or string or boolean
e = 12;
e = "harsh";
e = false;

// Type annonations syntax
let w: boolean
function absc(a: number , b:string): void {}

// What is interface? 
// interface is the exact copy of the object
interface User {
  name : string,
  email : string,
  password: string,
  gender?: string  // ? means many people don't in favor of sharing the gender details that's why we use '?' to avoid the gender details
}

function qwer(obj:User){}
qwer({name: "Awatans" , email: "aviiyadav@gmail.com", password: "avii", gender: "male"})
// here what we declared in the interface User should be reflect same in function


// EXTENDEDS INTERFACE
// means that what we define in the interface will be extends extra like that more extended of interface
interface Admin extends User{
  admin : boolean
}

function abce(obj: Admin){

obj.admin // Here we can see that admin is shown on 'Obj'
}
// Mtlb jo jo user ke pass wo cheex addmin ke pass bhi hogi and iski extra cheexin bhi hogi


// Context ? 
// Can two inferaces can be merge ? Yes if we create two interfaces it will merge in single interface as the when we created function 
 interface ABCD {
      name: string
 }
 interface ABCD {
  email : string
 }

 function abccd(obj: ABCD){
obj.email
obj.name
 }
//Here you can see that we have created two instances but it is merged into single instance

