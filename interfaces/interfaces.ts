interface WindowTitle {
  title: string;
}

interface WindowTitle {
  ts: string;
}

let ejemplo: WindowTitle = {
  title: "Titulo",
  ts: "ts",
};

interface Client1 {
  name: string;
  age: number;
  adress: {
    id: number;
    zipCode: string;
    city: string;
  };
}

interface Adress {
  id: number;
  zipCode: string;
  city: string;
}

interface Client {
  name: string;
  age: number;
  adress: Adress;
}

interface Client3 {
  name: string;
  age: number;
  adress: Adress;
  getFullName(name: string): void;
  getAlgo: () => string;
}

const client: Client3 = {
  name: "Client3",
  age: 24,
  adress: {
    id: 1,
    zipCode: "AD100",
    city: "Tavernes de la valldigna",
  },
  getFullName(name: string) {
    console.log("name");
  },
  getAlgo: function () {
    return "Client3";
  },
};

interface Xmen {
  name: string;
  realName: string;
  mutantPower: (id: number) => string;
  getName(): string; // Usar esta forma en las funciones, ya que el autocompletado funciona muy bien.
}

interface Human {
  age: number;
}

class Mutant implements Xmen, Human {
  constructor(
    public name: string,
    public realName: string,
    public mutantPower: (id: number) => string,
    public age: number
  ) {}

  public getName(): string {
    return this.name;
  }
}

type HumanType = {
  age: number;
};

type XmenType = {
  name: string;
  realName: string;
  mutantPower: (id: number) => string;
  getName(): string; // Usar esta forma en las funciones, ya que el autocompletado funciona muy bien.
};

class MutantTyped implements XmenType, HumanType {
  constructor(
    public name: string,
    public realName: string,
    public mutantPower: (id: number) => string,
    public age: number
  ) {}

  public getName(): string {
    return this.name;
  }
}

interface AddNumbers {
  (a: number, b: number): number;
}

let addNumberFunct: AddNumbers;
let addNumberArrowFunct: AddNumbers;

addNumberFunct = function (numero1: number, numero2: number) {
  return numero1 + numero2;
};

addNumberArrowFunct = (numero1: number, numero2: number): number => {
  return numero1 + numero2;
};

addNumberFunct(1, 2);
addNumberArrowFunct(1, 2);
