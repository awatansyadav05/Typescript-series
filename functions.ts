// Functions in typescript are used to encapsulate resubale logic , improve code structure and enforce type safety.
//Functions is use to return the callback function like that if we write the 12 line of code for the login page so we will simply return that function.

function abcd(name:string , cb:(value:string)=>void) {
  
}
abcd("Avii" , (value:string)=>{
  console.log(value);
  
})


function abscde(name: string , age:number ,cb:(arg:string)=>void){
    cb("hey");
  //cb is callback funtion
}
abscde("Avii", 22, (arg:string)=>{
  console.log("abcd");
})

// How optional Parameter work in Typescript
// we can not use "?" because it is giving error of typeerror
function Persons (name: string , age:number, gender: string = "not to be disclosed"){
    console.log(name, age , gender);
    
}
Persons("saurav" , 21, "male");
Persons("Hemant" , 21, );

// REST parameter 
//How to use and what is the use
// ...args is called spread opertor it means that we dont have to set the parameter in the function 
// simple use ...args "spread operator" to make it simple
function sum (...arr : number[]){
  console.log(arr);
  
}
sum(1,2,3,6,45,5,6,5);

// Function Overloading: Function overloading allows a function to have multiple type signatures, enabling different input types while keeping a single function implementation.

function abcdg(a:string ):void;
function abcdg(a:string, b:number):number;

function abcdg(a:any, b?:any){
  if(typeof a === "string" && typeof  b === undefined){
      console.log("hey");
      
  }
  if(typeof a === "string" && typeof b === "number"){
    return 123;
  }
 else throw new Error("Something went wrong");
}

abcdg("hey");
abcdg("hey",13);