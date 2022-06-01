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
let flash = {
    name: "Flash",
    age: 26,
    powers: ["Run", "Stamina"],
    callback: function () {
        var _a;
        return `${this.name} ${this.age} ${((_a = this.powers) === null || _a === void 0 ? void 0 : _a.join(" ")) || ""}`;
    },
};
flash.name = "Flash run";
console.log(flash.callback());
let objeto = {
    ALGO: {
        1: "One Algo",
    },
};
objeto["ALGO2"] = {
    1: "One Algo2",
};
console.log(objeto);
let superman;
superman = {
    name: "Superman",
    age: 40,
    powers: ["Fly"],
    callback: function () {
        return this.name;
    },
};
(() => {
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    let HeroForze;
    (function (HeroForze) {
        HeroForze[HeroForze["Acuaman"] = 0] = "Acuaman";
        HeroForze[HeroForze["Batman"] = 1] = "Batman";
        HeroForze[HeroForze["Flash"] = 5] = "Flash";
        HeroForze[HeroForze["Superman"] = 100] = "Superman";
    })(HeroForze || (HeroForze = {}));
    const fuerzaAcuaman = HeroForze.Acuaman;
    const fuerzaBatman = HeroForze.Batman;
    const fuerzaFlash = HeroForze.Flash;
    const fuerzaSuperman = HeroForze.Superman;
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    },
};
const villanos = [
    {
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false,
    },
    {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true,
    },
    {
        nombre: "James Logan",
        edad: undefined,
        mutante: true,
    },
];
const charles = {
    poder: "psiquico",
    estatura: 1.78,
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};
let mystique;
mystique = charles;
mystique = apocalipsis;
//# sourceMappingURL=main.js.map