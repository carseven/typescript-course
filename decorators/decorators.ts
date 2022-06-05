// En el fondo las classes con funciones, pero en ES2015
// se implementaran por primera vez la sintaxis de class
// en el fondo son sintactic sugar de las funciones.
function printToConsole(constructor: Function) {
  console.log(constructor);
}

// @printToConsole
class Pokemon {
  public url: string = "https://pokeapi.co";

  constructor(public name: string) {}
}
typeof Pokemon; // function
const pokemon = new Pokemon("Charmander");

function PluginDecorator(name: string) {
  return (constructor: Function) => {
    console.log(constructor);
    console.log("Plugin found: " + name);
  };
}

function BlockPrototype(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

function CheckValidPokemonId() {
  return function (
    target: any,
    propertykey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (id: number) {
      if (id > 0 && id < 800) {
        return originalMethod(id);
      }
      return console.error("[ERROR] - ID not valid!");
    };
  };
}

enum EnumDeprecated {
  ERROR = "ERROR",
  WARN = "WARN",
}

function Deprecated(deprecatedType: EnumDeprecated = EnumDeprecated.WARN) {
  return function (
    _target: any,
    propertykey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (id: number) {
      switch (deprecatedType) {
        case EnumDeprecated.ERROR:
          console.error(
            `[${EnumDeprecated.ERROR}] - Method ${propertykey} deprecated!`
          );
          break;
        case EnumDeprecated.WARN:
          console.warn(
            `[${EnumDeprecated.WARN}] - Method ${propertykey} deprecated!`
          );
      }
      return originalMethod(id);
    };
  };
}

// @BlockPrototype
@PluginDecorator("My first Plugin")
class MyFirstPlugin {
  @Deprecated(EnumDeprecated.ERROR)
  @CheckValidPokemonId()
  savePokemon(id: number): void {
    console.log(`Saved pokemon ${id} into DB`);
  }
}

const newPlugin = new MyFirstPlugin();
(MyFirstPlugin.prototype as any).newProperty = "Ejemplo";

newPlugin.savePokemon(1);
newPlugin.savePokemon(0);

function readonly(isReadOnly: boolean = true): Function {
  return function (target: any, propertykey: string): PropertyDescriptor {
    const propertyDescriptor: PropertyDescriptor = {
      set(this, value: string) {
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
  @readonly()
  public url: string = "https://www.google.com";
}
const ejemplo = new Ejemplo();

// ejemplo.url = "ejemplo";
