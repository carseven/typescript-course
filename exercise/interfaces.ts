// Crear interfaces
interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}
// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = (auto: Auto): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
};

const batimovil = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... gogogo!!!");
  },
};

conducirBatimovil(batimovil);

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason = {
  reir: true,
  comer: true,
  llorar: false,
};

const reir = (guason: Guason): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
};

// Cree una interfaz para la siguiente funcion
interface GetNumberCiudadanos {
  (ciudadanos: string[]): number;
}

const ciudadGotica: GetNumberCiudadanos = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

type Sexo = "M" | "F";
type EstadoCivil = "Soltero" | "Casado";

interface Human {
  nombre: string;
  edad: number;
  sexo: Sexo;
  estadoCivil: EstadoCivil;
  imprimir(): void;
}

class Persona implements Human {
  constructor(
    public nombre: string,
    public edad: number,
    public sexo: Sexo,
    public estadoCivil: EstadoCivil
  ) {}

  imprimir(): void {
    console.log(`${this.nombre} ${this.edad} ${this.sexo} ${this.estadoCivil}`);
  }
}

const carles: Persona = new Persona("Carles", 20, "M", "Soltero");

carles.imprimir();
