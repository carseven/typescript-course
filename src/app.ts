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
