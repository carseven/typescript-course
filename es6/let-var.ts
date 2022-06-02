type BumbleBee = {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number;
  disparar: () => void;
  nested: {
    name: string;
  };
};

const bumblebee: BumbleBee = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros: 4,
  nested: {
    name: "name",
  },
  disparar() {
    // El metodo disparar es opcional
    console.log("Disparando");
  },
};

const {
  carroceria: carro,
  modelo: model,
  pasajeros: passangers,
  nested: { name: nuevoNombre },
} = bumblebee;

console.log({ nuevoNombre });

function printBee({
  carroceria,
  modelo,
  pasajeros,
  ...restArgs
}: BumbleBee): void {
  console.log(`${carroceria} ${modelo} ${pasajeros}`);
  restArgs.disparar();
  console.log(restArgs.antibalas);
}
printBee(bumblebee);

const heros = ["Superman", "Iron Man", "Capitan America"];
const [captian, iron, america] = heros;

const herosOfHeros = [
  ["Superman", "Iron Man", "Capitan America"],
  ["Superman", "Iron Man", "Capitan America"],
];
const [heros1, [superman]] = herosOfHeros;
console.log(superman);
console.log(herosOfHeros[1][0]);

function call() {
  console.log(this);
}

const callBinded = call.bind(this);
callBinded();
