// type assertion ka matlab typescript ko batana ts ko ki particular cheej ka type kya hai, ye aap tab karte ho jab aap typescirpt se zada uss value ko jaante ho
let o: any = 12; // any can be the string number or null
(o as string).replace
// If you put "." after the string or number it can give the many options about the string or number 
// (<number>o)    this is also the way to write in assertion

console.log(o);
