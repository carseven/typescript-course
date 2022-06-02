class Hero {
  public surname: string;
  public hasSuperPower: boolean | undefined;
  private name: string;
  private typeOfHero: string = "Default";
  private isFavHero: boolean | undefined;
  public realName?: string;
  static age: number = 35;

  constructor(
    name: string,
    surname: string,
    hasSuperPower: boolean,
    age: number,
    isFavHero: boolean = false,
    realName?: string
  ) {
    this.name = name;
    this.surname = surname;
    this.hasSuperPower = hasSuperPower;
    this.isFavHero = isFavHero;
    this.realName = realName;
    Hero.age = age;
  }

  public printTypeOfHero(): void {
    console.log(this.typeOfHero);
  }
}

console.log(Hero.age);
const hero: Hero = new Hero("Batman", "Caballero Oscuro", true, 40);
hero.printTypeOfHero();
console.log(Hero.age);

class HeroShort {
  constructor(
    public name: string,
    public surname: string,
    private age: number,
    private realName?: string
  ) {}
}

const heroShort: HeroShort = new HeroShort("name", "surname", 45);
console.log({ heroShort });

class Person {
  constructor(
    public name: string,
    public gender: "M" | "F",
    public birthday: Date
  ) {}
}

class User extends Person {
  private lastAccess: Date;
  constructor(
    public email: string,
    public role: string,
    name: string,
    gender: "M" | "F",
    birthday: Date
  ) {
    super(name, gender, birthday);
    this.lastAccess = new Date();
  }

  getLastAcess(): Date {
    return this.lastAccess;
  }
}

class ClassGetSet {
  constructor(public name: string, public surname: string) {}

  get fullName() {
    return `${this.name} - ${this.surname}`;
  }
}

const classGetSet: ClassGetSet = new ClassGetSet("Carles", "Sanchez");
classGetSet.fullName;

abstract class Mutante {
  constructor(public name: string, public surname: string) {}
}

class Xmen extends Mutante {}

console.log(new Xmen("Mutante", "Xman"));

class Apocalipsis {
  static instance: Apocalipsis;

  private constructor(public name: string) {}

  static build() {
    if (!Apocalipsis.instance) {
      Apocalipsis.instance = new Apocalipsis("Name");
    }
    return Apocalipsis.instance;
  }

  public changeName(newName: string): void {
    this.name = newName;
  }
}

const apocalispsis: Apocalipsis = Apocalipsis.build();
const apocalispsis2: Apocalipsis = Apocalipsis.build();
const apocalispsis3: Apocalipsis = Apocalipsis.build();

console.log({ apocalispsis, apocalispsis2, apocalispsis3 });

apocalispsis.changeName("New name");
