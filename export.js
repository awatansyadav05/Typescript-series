"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPayment = addPayment;
exports.getDetails = getDetails;
//How can we import and export 
function addPayment(val) {
    console.log(val);
}
function getDetails() { }
var Payment = /** @class */ (function () {
    function Payment(name) {
        this.name = name;
    }
    return Payment;
}());
exports.default = Payment;
