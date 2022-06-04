"use strict";
var conducirBatimovil = function (auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
var batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar: function () {
        console.log("...... gogogo!!!");
    },
};
conducirBatimovil(batimovil);
var guason = {
    reir: true,
    comer: true,
    llorar: false,
};
var reir = function (guason) {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
var ciudadGotica = function (ciudadanos) {
    return ciudadanos.length;
};
var Persona = (function () {
    function Persona(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    Persona.prototype.imprimir = function () {
        console.log("".concat(this.nombre, " ").concat(this.edad, " ").concat(this.sexo, " ").concat(this.estadoCivil));
    };
    return Persona;
}());
var carles = new Persona("Carles", 20, "M", "Soltero");
carles.imprimir();
//# sourceMappingURL=main.js.map