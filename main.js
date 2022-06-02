"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hero = (function () {
    function Hero(name, surname, hasSuperPower, age, isFavHero, realName) {
        if (isFavHero === void 0) { isFavHero = false; }
        this.typeOfHero = "Default";
        this.name = name;
        this.surname = surname;
        this.hasSuperPower = hasSuperPower;
        this.isFavHero = isFavHero;
        this.realName = realName;
        Hero.age = age;
    }
    Hero.prototype.printTypeOfHero = function () {
        console.log(this.typeOfHero);
    };
    Hero.age = 35;
    return Hero;
}());
console.log(Hero.age);
var hero = new Hero("Batman", "Caballero Oscuro", true, 40);
hero.printTypeOfHero();
console.log(Hero.age);
var HeroShort = (function () {
    function HeroShort(name, surname, age, realName) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.realName = realName;
    }
    return HeroShort;
}());
var heroShort = new HeroShort("name", "surname", 45);
console.log({ heroShort: heroShort });
var Person = (function () {
    function Person(name, gender, birthday) {
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
    }
    return Person;
}());
var User = (function (_super) {
    __extends(User, _super);
    function User(email, role, name, gender, birthday) {
        var _this = _super.call(this, name, gender, birthday) || this;
        _this.email = email;
        _this.role = role;
        _this.lastAccess = new Date();
        return _this;
    }
    User.prototype.getLastAcess = function () {
        return this.lastAccess;
    };
    return User;
}(Person));
var ClassGetSet = (function () {
    function ClassGetSet(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Object.defineProperty(ClassGetSet.prototype, "fullName", {
        get: function () {
            return "".concat(this.name, " - ").concat(this.surname);
        },
        enumerable: false,
        configurable: true
    });
    return ClassGetSet;
}());
var classGetSet = new ClassGetSet("Carles", "Sanchez");
classGetSet.fullName;
var Mutante = (function () {
    function Mutante(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    return Mutante;
}());
var Xmen = (function (_super) {
    __extends(Xmen, _super);
    function Xmen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Xmen;
}(Mutante));
console.log(new Xmen("Mutante", "Xman"));
var Apocalipsis = (function () {
    function Apocalipsis(name) {
        this.name = name;
    }
    Apocalipsis.build = function () {
        if (!Apocalipsis.instance) {
            Apocalipsis.instance = new Apocalipsis("Name");
        }
        return Apocalipsis.instance;
    };
    Apocalipsis.prototype.changeName = function (newName) {
        this.name = newName;
    };
    return Apocalipsis;
}());
var apocalispsis = Apocalipsis.build();
var apocalispsis2 = Apocalipsis.build();
var apocalispsis3 = Apocalipsis.build();
console.log({ apocalispsis: apocalispsis, apocalispsis2: apocalispsis2, apocalispsis3: apocalispsis3 });
apocalispsis.changeName("New name");
//# sourceMappingURL=main.js.map