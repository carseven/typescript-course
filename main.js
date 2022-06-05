"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function printToConsole(constructor) {
    console.log(constructor);
}
class Pokemon {
    constructor(name) {
        this.name = name;
        this.url = "https://pokeapi.co";
    }
}
typeof Pokemon;
const pokemon = new Pokemon("Charmander");
function PluginDecorator(name) {
    return (constructor) => {
        console.log(constructor);
        console.log("Plugin found: " + name);
    };
}
function BlockPrototype(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
function CheckValidPokemonId() {
    return function (target, propertykey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (id) {
            if (id > 0 && id < 800) {
                return originalMethod(id);
            }
            return console.error("[ERROR] - ID not valid!");
        };
    };
}
var EnumDeprecated;
(function (EnumDeprecated) {
    EnumDeprecated["ERROR"] = "ERROR";
    EnumDeprecated["WARN"] = "WARN";
})(EnumDeprecated || (EnumDeprecated = {}));
function Deprecated(deprecatedType = EnumDeprecated.WARN) {
    return function (_target, propertykey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (id) {
            switch (deprecatedType) {
                case EnumDeprecated.ERROR:
                    console.error(`[${EnumDeprecated.ERROR}] - Method ${propertykey} deprecated!`);
                    break;
                case EnumDeprecated.WARN:
                    console.warn(`[${EnumDeprecated.WARN}] - Method ${propertykey} deprecated!`);
            }
            return originalMethod(id);
        };
    };
}
let MyFirstPlugin = class MyFirstPlugin {
    savePokemon(id) {
        console.log(`Saved pokemon ${id} into DB`);
    }
};
__decorate([
    Deprecated(EnumDeprecated.ERROR),
    CheckValidPokemonId()
], MyFirstPlugin.prototype, "savePokemon", null);
MyFirstPlugin = __decorate([
    PluginDecorator("My first Plugin")
], MyFirstPlugin);
const newPlugin = new MyFirstPlugin();
MyFirstPlugin.prototype.newProperty = "Ejemplo";
newPlugin.savePokemon(1);
newPlugin.savePokemon(0);
function readonly(isReadOnly = true) {
    return function (target, propertykey) {
        const propertyDescriptor = {
            set(value) {
                Object.defineProperty(this, propertykey, {
                    value: value,
                    writable: !isReadOnly,
                });
            },
        };
        return propertyDescriptor;
    };
}
class Ejemplo {
    constructor() {
        this.url = "https://www.google.com";
    }
}
__decorate([
    readonly()
], Ejemplo.prototype, "url", void 0);
const ejemplo = new Ejemplo();
//# sourceMappingURL=main.js.map