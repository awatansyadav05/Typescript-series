// this is the type_aliases
// where we can define our type according to us in the type_aliases

let n : number;
// But can we know that n will be number it can be string or boolean
// so here comes that we can create our type as we want

type sankhya  = number;
let p : number;
// That's how we name our aliases

/// That's sound to be senseless why we are decalring it many times as if we know but here we'll understands by the example

type value = number | string | null;
let y : number;
 y =12;

 // In this example of function

 type  args  = string | number;
 function abcf(obj: args){

 }
 abcf("avii");
 // that's how we define in the function

 // Type ka kaam hota hai ek type banana not like that interface merges 

 type user  = {
  name: string,
  email : string
 }
 type admin = user & {
  getDetails (user: string) : void
 }
 function abcd (a: admin){
 a.getDetails
 }

 // Here we can see that we have intersected the user and admin as well , This is how type_aliases work 