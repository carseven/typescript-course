"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = function (text) { return text.length > 3; };
    Validations.validateDate = function (date) { return !isNaN(date.valueOf()); };
})(Validations || (Validations = {}));
var Validations2;
(function (Validations2) {
    Validations2.validateText = function (text) { return text.length > 3; };
    Validations2.validateDate = function (date) { return !isNaN(date.valueOf()); };
})(Validations2 || (Validations2 = {}));
console.log(Validations.validateText("Carles"));
console.log(Validations.validateDate(new Date()));
console.log(Validations2.validateText("Carles"));
console.log(Validations2.validateDate(new Date()));
Validations.validateDate(new Date());
//# sourceMappingURL=main.js.map