const message: string = "Hola mundo";

console.log(Symbol(3) === Symbol(3));

const syaHello = (args: string[], separator: string): void => {
  console.log(args.join(separator));
};

syaHello(["Hello world", "people of the internet"], ", ");

console.log("Helo"[10]?.toUpperCase() || "");

function ejemplo(): undefined {
  return;
}

function ejemplo2(): void {}

const ecample: (string | number)[] = [];
const ecample2: Array<string | number> = [];

const tuple: [number, string] = [1, "Ejemplo"];

enum AudioLevel {
  min,
  medium,
  max,
}
console.log({ AudioLevel });
console.log(AudioLevel.medium);

enum AudioLevelIphone {
  min = 1,
  medium = 5,
  max = 10,
}
console.log({ AudioLevelIphone });
console.log(AudioLevelIphone.medium);

enum AudioLevelAndroid {
  min = 1,
  medium,
  max = 10,
  extra,
}
console.log({ AudioLevelAndroid });
console.log(AudioLevelAndroid.medium);

let ejemploNumber: number | null = null;

// Pequeño ejemplo mediante callbacks
const operation = (num: number, callback: (num: number) => void) => {
  setTimeout(() => {
    callback(num);
  }, 2000);
};

(() => {
  operation(1, (num: number) => {
    console.log(num);
  });
})();

const ejemplo12 = (arg?: string): string | undefined => {
  return arg;
};

function isNull(arg?: string, isNull: boolean = false): string | null {
  if (isNull) return null;
  return !!arg ? arg : "";
}

isNull();

function restArgs(firstName: string, ...restArgs: string[]): string {
  return `${firstName} ${restArgs.join(" ")}`;
}

const concatString: string = restArgs(
  "carles",
  "typescript",
  "something",
  "else"
);
console.log(concatString);

const functExample = (): void => {};
let myFunction: () => void;
myFunction = functExample;

let flash: {
  name: string;
  age: number;
  powers?: string[];
  callback: () => string;
} = {
  name: "Flash",
  age: 26,
  powers: ["Run", "Stamina"],
  callback: function (): string {
    return `${this.name} ${this.age} ${this.powers?.join(" ") || ""}`;
  },
};
flash.name = "Flash run";
console.log(flash.callback());

let objeto: { [key: string]: { [key: number]: string } } = {
  ALGO: {
    1: "One Algo",
  },
};

objeto["ALGO2"] = {
  1: "One Algo2",
};
console.log(objeto);

type Hero = {
  name: string;
  age: number;
  powers?: string[];
  callback: () => string;
};

let superman: Hero;

superman = {
  name: "Superman",
  age: 40,
  powers: ["Fly"],
  callback: function () {
    return this.name;
  },
};
