"use strict";
(() => {
    // Tipos
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    // Arreglos
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
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
    // Retorno de funciones
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    // Aserciones de Tipo
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
