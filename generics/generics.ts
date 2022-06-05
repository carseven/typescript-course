function genericFunction<T, Y, Z>(
  argument1: T,
  argument2: Y,
  argument3: Z
): [T, Y, Z] {
  return [argument1, argument2, argument3];
}

console.log(genericFunction(2.112312, "Carles", "Carles")[0].toFixed(2));
console.log(genericFunction(2.112312, "Carles", "Carles")[1].slice(0, 2));

const generic = <T>(argument: T): T => argument;

const anonimGeneric = function <T>(argument: T): T {
  return argument;
};

interface Hero {
  name: string;
  realName: string;
}

interface Villano {
  name: string;
  dangerLevel: number;
}

const deadpool = {
  name: "Deadpool",
  realName: "Dead",
  dangerLevel: 1.2,
};

const deadHero: Hero = generic<Hero>(deadpool);
console.log(deadHero);

interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Species[];
  game_indices: GameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

interface Ability {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}

interface Species {
  name: string;
  url: string;
}

interface GameIndex {
  game_index: number;
  version: Species;
}

interface Move {
  move: Species;
  version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Species;
  version_group: Species;
}

interface GenerationV {
  "black-white": Sprites;
}

interface GenerationIv {
  "diamond-pearl": Sprites;
  "heartgold-soulsilver": Sprites;
  platinum: Sprites;
}

interface Versions {
  "generation-i": GenerationI;
  "generation-ii": GenerationIi;
  "generation-iii": GenerationIii;
  "generation-iv": GenerationIv;
  "generation-v": GenerationV;
  "generation-vi": { [key: string]: Home };
  "generation-vii": GenerationVii;
  "generation-viii": GenerationViii;
}

interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: Other;
  versions?: Versions;
  animated?: Sprites;
}

interface GenerationI {
  "red-blue": RedBlue;
  yellow: RedBlue;
}

interface RedBlue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent?: string;
}

interface GenerationIii {
  emerald: Emerald;
  "firered-leafgreen": Gold;
  "ruby-sapphire": Gold;
}

interface Emerald {
  front_default: string;
  front_shiny: string;
}

interface Home {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

interface GenerationVii {
  icons: DreamWorld;
  "ultra-sun-ultra-moon": Home;
}

interface DreamWorld {
  front_default: string;
  front_female: null;
}

interface GenerationViii {
  icons: DreamWorld;
}

interface Other {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
}

interface OfficialArtwork {
  front_default: string;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}

interface Type {
  slot: number;
  type: Species;
}

const getPokemonById = async (id: number): Promise<Pokemon> => {
  const request: Response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  return await request.json();
};

getPokemonById(1)
  .then((response: Pokemon) => {
    response.abilities.forEach((ability: Ability) => console.log(ability));
  })
  .catch(console.log);

const getData = async <R>(url: string): Promise<R> => {
  const request: Response = await fetch(url);
  return await request.json();
};

getData<Pokemon>("https://pokeapi.co/api/v2/pokemon/1").then(console.log);
