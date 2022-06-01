"use strict";
var _a;
const message = "Hola mundo";
console.log(Symbol(3) === Symbol(3));
const syaHello = (args, separator) => {
    console.log(args.join(separator));
};
syaHello(["Hello world", "people of the internet"], ", ");
console.log(((_a = "Helo"[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "");
function ejemplo() {
    return;
}
function ejemplo2() { }
const ecample = [];
const ecample2 = [];
const tuple = [1, "Ejemplo"];
var AudioLevel;
(function (AudioLevel) {
    AudioLevel[AudioLevel["min"] = 0] = "min";
    AudioLevel[AudioLevel["medium"] = 1] = "medium";
    AudioLevel[AudioLevel["max"] = 2] = "max";
})(AudioLevel || (AudioLevel = {}));
console.log({ AudioLevel });
console.log(AudioLevel.medium);
var AudioLevelIphone;
(function (AudioLevelIphone) {
    AudioLevelIphone[AudioLevelIphone["min"] = 1] = "min";
    AudioLevelIphone[AudioLevelIphone["medium"] = 5] = "medium";
    AudioLevelIphone[AudioLevelIphone["max"] = 10] = "max";
})(AudioLevelIphone || (AudioLevelIphone = {}));
console.log({ AudioLevelIphone });
console.log(AudioLevelIphone.medium);
var AudioLevelAndroid;
(function (AudioLevelAndroid) {
    AudioLevelAndroid[AudioLevelAndroid["min"] = 1] = "min";
    AudioLevelAndroid[AudioLevelAndroid["medium"] = 2] = "medium";
    AudioLevelAndroid[AudioLevelAndroid["max"] = 10] = "max";
    AudioLevelAndroid[AudioLevelAndroid["extra"] = 11] = "extra";
})(AudioLevelAndroid || (AudioLevelAndroid = {}));
console.log({ AudioLevelAndroid });
console.log(AudioLevelAndroid.medium);
let ejemploNumber = null;
// Pequeño ejemplo mediante callbacks
const operation = (num, callback) => {
    setTimeout(() => {
        callback(num);
    }, 2000);
};
(() => {
    operation(1, (num) => {
        console.log(num);
    });
})();
const ejemplo12 = (arg) => {
    return arg;
};
function isNull(arg, isNull = false) {
    if (isNull)
        return null;
    return !!arg ? arg : "";
}
isNull();
function restArgs(firstName, ...restArgs) {
    return `${firstName} ${restArgs.join(" ")}`;
}
const concatString = restArgs("carles", "typescript", "something", "else");
console.log(concatString);
const functExample = () => { };
let myFunction;
myFunction = functExample;
