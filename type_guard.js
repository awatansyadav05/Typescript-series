// type guard Why we use?
// Type guards in TypeScript help narrow down types at runtime, ensuring safe property access and correct method usage when working with union types (string | number), any, or unknown.
function abcd(arg) {
    if (typeof arg === "number") {
        return "number";
    }
    if (typeof arg === "string") {
        return "string";
    }
    else {
        throw new Error("Somethhing is wrong");
    }
}
console.log(abcd(5));
console.log(abcd("Yashlok"));
