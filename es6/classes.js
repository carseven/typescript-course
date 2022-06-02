class Ejemplo {
  name;
  power;
  constructor(name, power = 1) {
    this.name = name;
    this, (power = power);
  }
}
const ejemploInstance = new Ejemplo("Ejemplo", 1);
const ejemploInstance2 = new Ejemplo("Ejemplo");
console.log(ejemploInstance2);

class Ejemplo2 extends Ejemplo {
  hasSomething;
  constructor(hasSomething, power) {
    super("Ejemplo2", power);
    this.hasSomething = hasSomething;
  }
}
const ejemplo2Instance = new Ejemplo(false, 1);
const ejemplo2Instance2 = new Ejemplo(true, 4);
console.log(ejemplo2Instance);
