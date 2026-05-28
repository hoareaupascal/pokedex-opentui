export interface EvolutionStep {
  name: string;
  level?: string;
}

export interface PokemonData {
  id: number;
  name: string;
  types: string[];
  description: string;
  abilities: string[];
  height: string;
  weight: string;
  evolutionChain: EvolutionStep[];
}

export const POKEMON_DATA: PokemonData[] = [
  {
    id: 1,
    name: "bulbasaur",
    types: ["GRASS", "POISON"],
    description: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
    abilities: ["Overgrow", "Chlorophyll"],
    height: "0.7m",
    weight: "6.9kg",
    evolutionChain: [
      { name: "bulbasaur" },
      { name: "ivysaur", level: "Lvl 16" },
      { name: "venusaur", level: "Lvl 32" }
    ]
  },
  {
    id: 2,
    name: "ivysaur",
    types: ["GRASS", "POISON"],
    description: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    abilities: ["Overgrow", "Chlorophyll"],
    height: "1.0m",
    weight: "13.0kg",
    evolutionChain: [
      { name: "bulbasaur" },
      { name: "ivysaur", level: "Lvl 16" },
      { name: "venusaur", level: "Lvl 32" }
    ]
  },
  {
    id: 3,
    name: "venusaur",
    types: ["GRASS", "POISON"],
    description: "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    abilities: ["Overgrow", "Chlorophyll"],
    height: "2.0m",
    weight: "100.0kg",
    evolutionChain: [
      { name: "bulbasaur" },
      { name: "ivysaur", level: "Lvl 16" },
      { name: "venusaur", level: "Lvl 32" }
    ]
  },
  {
    id: 4,
    name: "charmander",
    types: ["FIRE"],
    description: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    abilities: ["Blaze", "Solar power"],
    height: "0.6m",
    weight: "8.5kg",
    evolutionChain: [
      { name: "charmander" },
      { name: "charmeleon", level: "Lvl 16" },
      { name: "charizard", level: "Lvl 36" }
    ]
  },
  {
    id: 5,
    name: "charmeleon",
    types: ["FIRE"],
    description: "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
    abilities: ["Blaze", "Solar power"],
    height: "1.1m",
    weight: "19.0kg",
    evolutionChain: [
      { name: "charmander" },
      { name: "charmeleon", level: "Lvl 16" },
      { name: "charizard", level: "Lvl 36" }
    ]
  },
  {
    id: 6,
    name: "charizard",
    types: ["FIRE", "FLYING"],
    description: "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
    abilities: ["Blaze", "Solar power"],
    height: "1.7m",
    weight: "90.5kg",
    evolutionChain: [
      { name: "charmander" },
      { name: "charmeleon", level: "Lvl 16" },
      { name: "charizard", level: "Lvl 36" }
    ]
  },
  {
    id: 7,
    name: "squirtle",
    types: ["WATER"],
    description: "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
    abilities: ["Torrent", "Rain dish"],
    height: "0.5m",
    weight: "9.0kg",
    evolutionChain: [{ name: "squirtle" }, { name: "wartortle", level: "Lvl 16" }, { name: "blastoise", level: "Lvl 36" }]
  },
  {
    id: 8,
    name: "wartortle",
    types: ["WATER"],
    description: "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
    abilities: ["Torrent", "Rain dish"],
    height: "1.0m",
    weight: "22.5kg",
    evolutionChain: [{ name: "squirtle" }, { name: "wartortle", level: "Lvl 16" }, { name: "blastoise", level: "Lvl 36" }]
  },
  {
    id: 9,
    name: "blastoise",
    types: ["WATER"],
    description: "A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles.",
    abilities: ["Torrent", "Rain dish"],
    height: "1.6m",
    weight: "85.5kg",
    evolutionChain: [{ name: "squirtle" }, { name: "wartortle", level: "Lvl 16" }, { name: "blastoise", level: "Lvl 36" }]
  },
  {
    id: 10,
    name: "caterpie",
    types: ["BUG"],
    description: "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
    abilities: ["Shield dust", "Run away"],
    height: "0.3m",
    weight: "2.9kg",
    evolutionChain: [{ name: "caterpie" }, { name: "metapod", level: "Lvl 7" }, { name: "butterfree", level: "Lvl 10" }]
  },
  {
    id: 11,
    name: "metapod",
    types: ["BUG"],
    description: "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless.",
    abilities: ["Shed skin"],
    height: "0.7m",
    weight: "9.9kg",
    evolutionChain: [{ name: "caterpie" }, { name: "metapod", level: "Lvl 7" }, { name: "butterfree", level: "Lvl 10" }]
  },
  {
    id: 12,
    name: "butterfree",
    types: ["BUG", "FLYING"],
    description: "In battle, it flaps its wings at high speed to release highly toxic dust into the air.",
    abilities: ["Compound eyes", "Tinted lens"],
    height: "1.1m",
    weight: "32.0kg",
    evolutionChain: [{ name: "caterpie" }, { name: "metapod", level: "Lvl 7" }, { name: "butterfree", level: "Lvl 10" }]
  },
  {
    id: 13,
    name: "weedle",
    types: ["BUG", "POISON"],
    description: "Often found in forests, eating leaves. It has a sharp, toxic barb of around two inches on top of its head.",
    abilities: ["Shield dust", "Run away"],
    height: "0.3m",
    weight: "3.2kg",
    evolutionChain: [{ name: "weedle" }, { name: "kakuna", level: "Lvl 7" }, { name: "beedrill", level: "Lvl 10" }]
  },
  {
    id: 14,
    name: "kakuna",
    types: ["BUG", "POISON"],
    description: "Almost incapable of moving, this Pokémon can only harden its shell to protect itself when endangered.",
    abilities: ["Shed skin"],
    height: "0.6m",
    weight: "10.0kg",
    evolutionChain: [{ name: "weedle" }, { name: "kakuna", level: "Lvl 7" }, { name: "beedrill", level: "Lvl 10" }]
  },
  {
    id: 15,
    name: "beedrill",
    types: ["BUG", "POISON"],
    description: "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
    abilities: ["Swarm", "Sniper"],
    height: "1.0m",
    weight: "29.5kg",
    evolutionChain: [{ name: "weedle" }, { name: "kakuna", level: "Lvl 7" }, { name: "beedrill", level: "Lvl 10" }]
  },
  {
    id: 16,
    name: "pidgey",
    types: ["NORMAL", "FLYING"],
    description: "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.",
    abilities: ["Keen eye", "Tangled feet", "Big pecks"],
    height: "0.3m",
    weight: "1.8kg",
    evolutionChain: [{ name: "pidgey" }, { name: "pidgeotto", level: "Lvl 18" }, { name: "pidgeot", level: "Lvl 36" }]
  },
  {
    id: 17,
    name: "pidgeotto",
    types: ["NORMAL", "FLYING"],
    description: "Very protective of its sprawling territory, this Pokémon will fiercely peck at any intruder.",
    abilities: ["Keen eye", "Tangled feet", "Big pecks"],
    height: "1.1m",
    weight: "30.0kg",
    evolutionChain: [{ name: "pidgey" }, { name: "pidgeotto", level: "Lvl 18" }, { name: "pidgeot", level: "Lvl 36" }]
  },
  {
    id: 18,
    name: "pidgeot",
    types: ["NORMAL", "FLYING"],
    description: "By flapping its wings with all its might, Pidgeot can create gusts of wind capable of bending tall trees.",
    abilities: ["Keen eye", "Tangled feet", "Big pecks"],
    height: "1.5m",
    weight: "39.5kg",
    evolutionChain: [{ name: "pidgey" }, { name: "pidgeotto", level: "Lvl 18" }, { name: "pidgeot", level: "Lvl 36" }]
  },
  {
    id: 19,
    name: "rattata",
    types: ["NORMAL"],
    description: "Will chew on anything with its tusks. If you see one, it is certain that 40 more live in the area.",
    abilities: ["Run away", "Guts", "Hustle"],
    height: "0.3m",
    weight: "3.5kg",
    evolutionChain: [{ name: "rattata" }, { name: "raticate", level: "Lvl 20" }]
  },
  {
    id: 20,
    name: "raticate",
    types: ["NORMAL"],
    description: "It uses its whiskers to maintain balance. It apparently slows down if it loses any whiskers.",
    abilities: ["Run away", "Guts", "Hustle"],
    height: "0.7m",
    weight: "18.5kg",
    evolutionChain: [{ name: "rattata" }, { name: "raticate", level: "Lvl 20" }]
  },
  {
    id: 21,
    name: "spearow",
    types: ["NORMAL", "FLYING"],
    description: "It flaps its small wings busily to fly. Using its beak, it searches for insects in grassy areas.",
    abilities: ["Keen eye", "Sniper"],
    height: "0.3m",
    weight: "2.0kg",
    evolutionChain: [{ name: "spearow" }, { name: "fearow", level: "Lvl 20" }]
  },
  {
    id: 22,
    name: "fearow",
    types: ["NORMAL", "FLYING"],
    description: "It has the ability to fly high in the sky. It catches small animals and insects with its long beak.",
    abilities: ["Keen eye", "Sniper"],
    height: "1.2m",
    weight: "38.0kg",
    evolutionChain: [{ name: "spearow" }, { name: "fearow", level: "Lvl 20" }]
  },
  {
    id: 23,
    name: "ekans",
    types: ["POISON"],
    description: "It moves silently and stealthily. It eats the eggs of birds, such as Pidgey and Spearow, whole.",
    abilities: ["Intimidate", "Shed skin", "Unnerve"],
    height: "2.0m",
    weight: "6.9kg",
    evolutionChain: [{ name: "ekans" }, { name: "arbok", level: "Lvl 22" }]
  },
  {
    id: 24,
    name: "arbok",
    types: ["POISON"],
    description: "It is said that the pattern on its belly is an intimidating face. It will not let go once it coils around a foe.",
    abilities: ["Intimidate", "Shed skin", "Unnerve"],
    height: "3.5m",
    weight: "65.0kg",
    evolutionChain: [{ name: "ekans" }, { name: "arbok", level: "Lvl 22" }]
  },
  {
    id: 25,
    name: "pikachu",
    types: ["ELECTRIC"],
    description: "When several of these Pokémon gather, their electricity could build and cause lightning storms.",
    abilities: ["Static", "Lightning rod"],
    height: "0.4m",
    weight: "6.0kg",
    evolutionChain: [{ name: "pichu" }, { name: "pikachu", level: "Happiness" }, { name: "raichu", level: "Thunder Stone" }]
  },
  {
    id: 26,
    name: "raichu",
    types: ["ELECTRIC"],
    description: "If the electric pouches on its cheeks become fully charged, its ears will stand straight up.",
    abilities: ["Static", "Lightning rod"],
    height: "0.8m",
    weight: "30.0kg",
    evolutionChain: [{ name: "pichu" }, { name: "pikachu", level: "Happiness" }, { name: "raichu", level: "Thunder Stone" }]
  },
  {
    id: 27,
    name: "sandshrew",
    types: ["GROUND"],
    description: "It loves to live in dry, sandy areas. It burrows underground to protect itself from enemies.",
    abilities: ["Sand veil", "Sand rush"],
    height: "0.6m",
    weight: "12.0kg",
    evolutionChain: [{ name: "sandshrew" }, { name: "sandslash", level: "Lvl 22" }]
  },
  {
    id: 28,
    name: "sandslash",
    types: ["GROUND"],
    description: "It is adept at climbing trees. It curls up into a spiny ball to protect itself from predators.",
    abilities: ["Sand veil", "Sand rush"],
    height: "1.0m",
    weight: "29.5kg",
    evolutionChain: [{ name: "sandshrew" }, { name: "sandslash", level: "Lvl 22" }]
  },
  {
    id: 29,
    name: "nidoranf",
    types: ["POISON"],
    description: "The female Nidoran has small, poison-secreting barbs. When enraged, it releases a toxic liquid.",
    abilities: ["Poison point", "Rivalry", "Hustle"],
    height: "0.4m",
    weight: "7.0kg",
    evolutionChain: [{ name: "nidoran-f" }, { name: "nidorina", level: "Lvl 16" }, { name: "nidoqueen", level: "Moon Stone" }]
  },
  {
    id: 30,
    name: "nidorina",
    types: ["POISON"],
    description: "When resting, it curls up to protect itself. It is gentle but will defend its young fiercely.",
    abilities: ["Poison point", "Rivalry", "Hustle"],
    height: "0.8m",
    weight: "20.0kg",
    evolutionChain: [{ name: "nidoran-f" }, { name: "nidorina", level: "Lvl 16" }, { name: "nidoqueen", level: "Moon Stone" }]
  },
  {
    id: 31,
    name: "nidoqueen",
    types: ["POISON", "GROUND"],
    description: "It uses its scaly, rugged body to seal the entrance of its burrow and protect its young from predators.",
    abilities: ["Poison point", "Rivalry", "Sheer force"],
    height: "1.3m",
    weight: "60.0kg",
    evolutionChain: [{ name: "nidoran-f" }, { name: "nidorina", level: "Lvl 16" }, { name: "nidoqueen", level: "Moon Stone" }]
  },
  {
    id: 32,
    name: "nidoran-m",
    types: ["POISON"],
    description: "The horn on its forehead contains a powerful poison. This is a very cautious Pokémon that is easily agitated.",
    abilities: ["Poison point", "Rivalry", "Hustle"],
    height: "0.5m",
    weight: "9.0kg",
    evolutionChain: [{ name: "nidoran-m" }, { name: "nidorino", level: "Lvl 16" }, { name: "nidoking", level: "Moon Stone" }]
  },
  {
    id: 33,
    name: "nidorino",
    types: ["POISON"],
    description: "It has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once.",
    abilities: ["Poison point", "Rivalry", "Hustle"],
    height: "0.9m",
    weight: "19.5kg",
    evolutionChain: [{ name: "nidoran-m" }, { name: "nidorino", level: "Lvl 16" }, { name: "nidoking", level: "Moon Stone" }]
  },
  {
    id: 34,
    name: "nidoking",
    types: ["POISON", "GROUND"],
    description: "It uses its thick tail to smash, constrict, and break the bones of its prey.",
    abilities: ["Poison point", "Rivalry", "Sheer force"],
    height: "1.4m",
    weight: "62.0kg",
    evolutionChain: [{ name: "nidoran-m" }, { name: "nidorino", level: "Lvl 16" }, { name: "nidoking", level: "Moon Stone" }]
  },
  {
    id: 35,
    name: "clefairy",
    types: ["FAIRY"],
    description: "Its magical and cute appeal has many admirers. It is rare and is found only in certain areas.",
    abilities: ["Cute charm", "Magic guard", "Friend guard"],
    height: "0.6m",
    weight: "7.5kg",
    evolutionChain: [{ name: "cleffa" }, { name: "clefairy", level: "Happiness" }, { name: "clefable", level: "Moon Stone" }]
  },
  {
    id: 36,
    name: "clefable",
    types: ["FAIRY"],
    description: "A timid fairy Pokémon that is rarely seen. It will run and hide the moment it senses people.",
    abilities: ["Cute charm", "Magic guard", "Unaware"],
    height: "1.3m",
    weight: "40.0kg",
    evolutionChain: [{ name: "cleffa" }, { name: "clefairy", level: "Happiness" }, { name: "clefable", level: "Moon Stone" }]
  },
  {
    id: 37,
    name: "vulpix",
    types: ["FIRE"],
    description: "At the time of birth, Vulpix has one white tail. The tail divides into six if this Pokémon receives proper love from its owner.",
    abilities: ["Flash fire", "Drought"],
    height: "0.6m",
    weight: "9.9kg",
    evolutionChain: [{ name: "vulpix" }, { name: "ninetales", level: "Fire Stone" }]
  },
  {
    id: 38,
    name: "ninetales",
    types: ["FIRE"],
    description: "It is said to live for a thousand years. Each of its nine tails is said to be imbued with supernatural power.",
    abilities: ["Flash fire", "Drought"],
    height: "1.1m",
    weight: "19.9kg",
    evolutionChain: [{ name: "vulpix" }, { name: "ninetales", level: "Fire Stone" }]
  },
  {
    id: 39,
    name: "jigglypuff",
    types: ["NORMAL", "FAIRY"],
    description: "When its huge eyes waver, it sings a mysteriously soothing melody that lulls its enemies to sleep.",
    abilities: ["Cute charm", "Competitive", "Friend guard"],
    height: "0.5m",
    weight: "5.5kg",
    evolutionChain: [{ name: "igglybuff" }, { name: "jigglypuff", level: "Happiness" }, { name: "wigglytuff", level: "Moon Stone" }]
  },
  {
    id: 40,
    name: "wigglytuff",
    types: ["NORMAL", "FAIRY"],
    description: "It has large, saucer-like eyes. The surfaces of its eyes are always covered with a thin layer of tears.",
    abilities: ["Cute charm", "Competitive", "Frisk"],
    height: "1.0m",
    weight: "12.0kg",
    evolutionChain: [{ name: "igglybuff" }, { name: "jigglypuff", level: "Happiness" }, { name: "wigglytuff", level: "Moon Stone" }]
  },
  {
    id: 41,
    name: "zubat",
    types: ["POISON", "FLYING"],
    description: "It has no eyes. Instead, it relies on ultrasonic waves to detect obstacles while it flies through dark caves.",
    abilities: ["Inner focus", "Infiltrator"],
    height: "0.8m",
    weight: "7.5kg",
    evolutionChain: [{ name: "zubat" }, { name: "golbat", level: "Lvl 22" }, { name: "crobat", level: "Happiness" }]
  },
  {
    id: 42,
    name: "golbat",
    types: ["POISON", "FLYING"],
    description: "It loves to drink the blood of living things. It is particularly active in the pitch black of night.",
    abilities: ["Inner focus", "Infiltrator"],
    height: "1.6m",
    weight: "55.0kg",
    evolutionChain: [{ name: "zubat" }, { name: "golbat", level: "Lvl 22" }, { name: "crobat", level: "Happiness" }]
  },
  {
    id: 43,
    name: "oddish",
    types: ["GRASS", "POISON"],
    description: "During the day, it stays in the dark underground to avoid the sun. It grows by bathing in moonlight.",
    abilities: ["Chlorophyll", "Run away"],
    height: "0.5m",
    weight: "5.4kg",
    evolutionChain: [{ name: "oddish" }, { name: "gloom", level: "Lvl 21" }, { name: "vileplume", level: "Leaf Stone" }]
  },
  {
    id: 44,
    name: "gloom",
    types: ["GRASS", "POISON"],
    description: "It secretes a sticky, honey-like nectar. Its scent is so foul that it can cause people to faint from a distance.",
    abilities: ["Chlorophyll", "Stench"],
    height: "0.8m",
    weight: "8.6kg",
    evolutionChain: [{ name: "oddish" }, { name: "gloom", level: "Lvl 21" }, { name: "vileplume", level: "Leaf Stone" }]
  },
  {
    id: 45,
    name: "vileplume",
    types: ["GRASS", "POISON"],
    description: "It has the world's largest petals. They are used to attract prey with toxic spores.",
    abilities: ["Chlorophyll", "Effect spore"],
    height: "1.2m",
    weight: "18.6kg",
    evolutionChain: [{ name: "oddish" }, { name: "gloom", level: "Lvl 21" }, { name: "vileplume", level: "Leaf Stone" }]
  },
  {
    id: 46,
    name: "paras",
    types: ["BUG", "GRASS"],
    description: "Growing on its back are mushrooms called tochukaso. They grow with the host as it grows.",
    abilities: ["Effect spore", "Dry skin"],
    height: "0.3m",
    weight: "5.4kg",
    evolutionChain: [{ name: "paras" }, { name: "parasect", level: "Lvl 24" }]
  },
  {
    id: 47,
    name: "parasect",
    types: ["BUG", "GRASS"],
    description: "A host-parasite pair in which the parasite mushroom has taken over the host bug. It prefers humid places.",
    abilities: ["Effect spore", "Dry skin"],
    height: "1.0m",
    weight: "29.5kg",
    evolutionChain: [{ name: "paras" }, { name: "parasect", level: "Lvl 24" }]
  },
  {
    id: 48,
    name: "venonat",
    types: ["BUG", "POISON"],
    description: "Its large eyes act as radar. In a bright environment, it will settle down under a tree to rest.",
    abilities: ["Compound eyes", "Tinted lens"],
    height: "1.0m",
    weight: "30.0kg",
    evolutionChain: [{ name: "venonat" }, { name: "venomoth", level: "Lvl 31" }]
  },
  {
    id: 49,
    name: "venomoth",
    types: ["BUG", "POISON"],
    description: "The scales it scatters are colored powder that paralyzes anyone who touches them.",
    abilities: ["Shield dust", "Tinted lens"],
    height: "1.5m",
    weight: "12.5kg",
    evolutionChain: [{ name: "venonat" }, { name: "venomoth", level: "Lvl 31" }]
  },
  {
    id: 50,
    name: "diglett",
    types: ["GROUND"],
    description: "It lives about one yard underground, where it feeds on plant roots. It sometimes appears above ground.",
    abilities: ["Sand veil", "Arena trap"],
    height: "0.2m",
    weight: "0.8kg",
    evolutionChain: [{ name: "diglett" }, { name: "dugtrio", level: "Lvl 26" }]
  },
  {
    id: 51,
    name: "dugtrio",
    types: ["GROUND"],
    description: "A team of Diglett triplets. It triggers huge earthquakes by burrowing 60 miles underground.",
    abilities: ["Sand veil", "Arena trap"],
    height: "0.7m",
    weight: "33.3kg",
    evolutionChain: [{ name: "diglett" }, { name: "dugtrio", level: "Lvl 26" }]
  },
  {
    id: 52,
    name: "meowth",
    types: ["NORMAL"],
    description: "It loves to collect shiny things. If it spots a coin, its eyes light up and it purrs with delight.",
    abilities: ["Pickup", "Technician"],
    height: "0.4m",
    weight: "4.2kg",
    evolutionChain: [{ name: "meowth" }, { name: "persian", level: "Lvl 28" }]
  },
  {
    id: 53,
    name: "persian",
    types: ["NORMAL"],
    description: "The gem in its forehead glows with a mystical power. It is very proud of its fine fur.",
    abilities: ["Limber", "Technician"],
    height: "1.0m",
    weight: "32.0kg",
    evolutionChain: [{ name: "meowth" }, { name: "persian", level: "Lvl 28" }]
  },
  {
    id: 54,
    name: "psyduck",
    types: ["WATER"],
    description: "It is constantly plagued by headaches. It uses mysterious psychic powers when its headache intensifies.",
    abilities: ["Damp", "Cloud nine"],
    height: "0.8m",
    weight: "19.6kg",
    evolutionChain: [{ name: "psyduck" }, { name: "golduck", level: "Lvl 33" }]
  },
  {
    id: 55,
    name: "golduck",
    types: ["WATER"],
    description: "It is seen swimming elegantly in lakes. It is said to be the swiftest swimmer among all Pokémon.",
    abilities: ["Damp", "Cloud nine"],
    height: "1.7m",
    weight: "76.6kg",
    evolutionChain: [{ name: "psyduck" }, { name: "golduck", level: "Lvl 33" }]
  },
  {
    id: 56,
    name: "mankey",
    types: ["FIGHTING"],
    description: "It lives in groups in the treetops. If it loses its group, it becomes terribly lonely and angry.",
    abilities: ["Vital spirit", "Anger point"],
    height: "0.5m",
    weight: "28.0kg",
    evolutionChain: [{ name: "mankey" }, { name: "primeape", level: "Lvl 28" }]
  },
  {
    id: 57,
    name: "primeape",
    types: ["FIGHTING"],
    description: "It stops being angry only when no one is around. It is always furious, and its blood circulates rapidly.",
    abilities: ["Vital spirit", "Anger point"],
    height: "1.0m",
    weight: "32.0kg",
    evolutionChain: [{ name: "mankey" }, { name: "primeape", level: "Lvl 28" }]
  },
  {
    id: 58,
    name: "growlithe",
    types: ["FIRE"],
    description: "It has a brave and trustworthy nature. It fearlessly stands up to enemies larger than itself.",
    abilities: ["Intimidate", "Flash fire"],
    height: "0.7m",
    weight: "19.0kg",
    evolutionChain: [{ name: "growlithe" }, { name: "arcanine", level: "Fire Stone" }]
  },
  {
    id: 59,
    name: "arcanine",
    types: ["FIRE"],
    description: "A Pokémon known for its high speed. It is said to be capable of running over 6,200 miles in a single day and night.",
    abilities: ["Intimidate", "Flash fire"],
    height: "1.9m",
    weight: "155.0kg",
    evolutionChain: [{ name: "growlithe" }, { name: "arcanine", level: "Fire Stone" }]
  },
  {
    id: 60,
    name: "poliwag",
    types: ["WATER"],
    description: "The direction of the spiral on its stomach differs by area. It is more adept at swimming than walking.",
    abilities: ["Water absorb", "Damp"],
    height: "0.6m",
    weight: "12.4kg",
    evolutionChain: [{ name: "poliwag" }, { name: "poliwhirl", level: "Lvl 25" }, { name: "poliwrath", level: "Water Stone" }]
  },
  {
    id: 61,
    name: "poliwhirl",
    types: ["WATER"],
    description: "It can live in or out of water. When out of water, it constantly sweats to keep its body slimy.",
    abilities: ["Water absorb", "Damp"],
    height: "1.0m",
    weight: "20.0kg",
    evolutionChain: [{ name: "poliwag" }, { name: "poliwhirl", level: "Lvl 25" }, { name: "poliwrath", level: "Water Stone" }]
  },
  {
    id: 62,
    name: "poliwrath",
    types: ["WATER", "FIGHTING"],
    description: "An adept swimmer at both the front crawl and breaststroke. It easily overtakes the best human swimmers.",
    abilities: ["Water absorb", "Damp"],
    height: "1.3m",
    weight: "54.0kg",
    evolutionChain: [{ name: "poliwag" }, { name: "poliwhirl", level: "Lvl 25" }, { name: "poliwrath", level: "Water Stone" }]
  },
  {
    id: 63,
    name: "abra",
    types: ["PSYCHIC"],
    description: "It sleeps for 18 hours a day. However, it can sense danger and teleports to safety even while sleeping.",
    abilities: ["Synchronize", "Inner focus"],
    height: "0.9m",
    weight: "19.5kg",
    evolutionChain: [{ name: "abra" }, { name: "kadabra", level: "Lvl 16" }, { name: "alakazam", level: "Trade" }]
  },
  {
    id: 64,
    name: "kadabra",
    types: ["PSYCHIC"],
    description: "It emits alpha waves that cause headaches to those nearby. It holds a silver spoon to amplify its powers.",
    abilities: ["Synchronize", "Inner focus"],
    height: "1.3m",
    weight: "56.5kg",
    evolutionChain: [{ name: "abra" }, { name: "kadabra", level: "Lvl 16" }, { name: "alakazam", level: "Trade" }]
  },
  {
    id: 65,
    name: "alakazam",
    types: ["PSYCHIC"],
    description: "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5,000.",
    abilities: ["Synchronize", "Inner focus"],
    height: "1.5m",
    weight: "48.0kg",
    evolutionChain: [{ name: "abra" }, { name: "kadabra", level: "Lvl 16" }, { name: "alakazam", level: "Trade" }]
  },
  {
    id: 66,
    name: "machop",
    types: ["FIGHTING"],
    description: "Its muscles are always tone and never get tired. It has the power to hurl a hundred adult humans.",
    abilities: ["Guts", "No guard"],
    height: "0.8m",
    weight: "19.5kg",
    evolutionChain: [{ name: "machop" }, { name: "machoke", level: "Lvl 28" }, { name: "machamp", level: "Trade" }]
  },
  {
    id: 67,
    name: "machoke",
    types: ["FIGHTING"],
    description: "It is so incredibly strong that it must wear a power-save belt to regulate its movements.",
    abilities: ["Guts", "No guard"],
    height: "1.5m",
    weight: "70.5kg",
    evolutionChain: [{ name: "machop" }, { name: "machoke", level: "Lvl 28" }, { name: "machamp", level: "Trade" }]
  },
  {
    id: 68,
    name: "machamp",
    types: ["FIGHTING"],
    description: "It acts before it thinks. Its four powerful arms can launch a flurry of punches in mere seconds.",
    abilities: ["Guts", "No guard"],
    height: "1.6m",
    weight: "130.0kg",
    evolutionChain: [{ name: "machop" }, { name: "machoke", level: "Lvl 28" }, { name: "machamp", level: "Trade" }]
  },
  {
    id: 69,
    name: "bellsprout",
    types: ["GRASS", "POISON"],
    description: "Its body is thin and flexible, allowing it to bend and sway to avoid attacks, then capture prey.",
    abilities: ["Chlorophyll"],
    height: "0.7m",
    weight: "4.0kg",
    evolutionChain: [{ name: "bellsprout" }, { name: "weepinbell", level: "Lvl 21" }, { name: "victreebel", level: "Leaf Stone" }]
  },
  {
    id: 70,
    name: "weepinbell",
    types: ["GRASS", "POISON"],
    description: "It spits out poisonous powder to immobilize the enemy, then finishes it off with acidic liquid.",
    abilities: ["Chlorophyll"],
    height: "1.0m",
    weight: "6.4kg",
    evolutionChain: [{ name: "bellsprout" }, { name: "weepinbell", level: "Lvl 21" }, { name: "victreebel", level: "Leaf Stone" }]
  },
  {
    id: 71,
    name: "victreebel",
    types: ["GRASS", "POISON"],
    description: "It lures prey with the sweet aroma of honey. The prey is swallowed whole, then melted by acid.",
    abilities: ["Chlorophyll"],
    height: "1.7m",
    weight: "15.5kg",
    evolutionChain: [{ name: "bellsprout" }, { name: "weepinbell", level: "Lvl 21" }, { name: "victreebel", level: "Leaf Stone" }]
  },
  {
    id: 72,
    name: "tentacool",
    types: ["WATER", "POISON"],
    description: "It drifts in shallow seas. People often get stung by the poisonous tentacles if they step on it.",
    abilities: ["Clear body", "Liquid ooze"],
    height: "0.9m",
    weight: "45.5kg",
    evolutionChain: [{ name: "tentacool" }, { name: "tentacruel", level: "Lvl 30" }]
  },
  {
    id: 73,
    name: "tentacruel",
    types: ["WATER", "POISON"],
    description: "It has 80 tentacles that can absorb water and extend to ensnare prey. It is a dangerous Pokémon.",
    abilities: ["Clear body", "Liquid ooze"],
    height: "1.6m",
    weight: "55.0kg",
    evolutionChain: [{ name: "tentacool" }, { name: "tentacruel", level: "Lvl 30" }]
  },
  {
    id: 74,
    name: "geodude",
    types: ["ROCK", "GROUND"],
    description: "It makes its home on mountain trails. If you step on it by accident, it gets angry and attacks.",
    abilities: ["Rock head", "Sturdy"],
    height: "0.4m",
    weight: "20.0kg",
    evolutionChain: [{ name: "geodude" }, { name: "graveler", level: "Lvl 25" }, { name: "golem", level: "Trade" }]
  },
  {
    id: 75,
    name: "graveler",
    types: ["ROCK", "GROUND"],
    description: "It rolls down slopes to move. It pays no attention to obstacles and keeps rolling until it stops.",
    abilities: ["Rock head", "Sturdy"],
    height: "1.0m",
    weight: "105.0kg",
    evolutionChain: [{ name: "geodude" }, { name: "graveler", level: "Lvl 25" }, { name: "golem", level: "Trade" }]
  },
  {
    id: 76,
    name: "golem",
    types: ["ROCK", "GROUND"],
    description: "It is said to live in volcanic craters. It sheds its skin once a year, and the shell grows larger.",
    abilities: ["Rock head", "Sturdy"],
    height: "1.4m",
    weight: "300.0kg",
    evolutionChain: [{ name: "geodude" }, { name: "graveler", level: "Lvl 25" }, { name: "golem", level: "Trade" }]
  },
  {
    id: 77,
    name: "ponyta",
    types: ["FIRE"],
    description: "It is capable of jumping over tall fences. Its hooves are lighter and harder than diamonds.",
    abilities: ["Run away", "Flash fire"],
    height: "1.0m",
    weight: "30.0kg",
    evolutionChain: [{ name: "ponyta" }, { name: "rapidash", level: "Lvl 40" }]
  },
  {
    id: 78,
    name: "rapidash",
    types: ["FIRE"],
    description: "It is a competitive Pokémon. It will chase anything that moves fast in hopes of racing it.",
    abilities: ["Run away", "Flash fire"],
    height: "1.7m",
    weight: "95.0kg",
    evolutionChain: [{ name: "ponyta" }, { name: "rapidash", level: "Lvl 40" }]
  },
  {
    id: 79,
    name: "slowpoke",
    types: ["WATER", "PSYCHIC"],
    description: "It is incredibly slow and dopey. It takes five seconds for it to feel pain when bitten.",
    abilities: ["Oblivious", "Own tempo"],
    height: "1.2m",
    weight: "36.0kg",
    evolutionChain: [{ name: "slowpoke" }, { name: "slowbro", level: "Lvl 37" }]
  },
  {
    id: 80,
    name: "slowbro",
    types: ["WATER", "PSYCHIC"],
    description: "The Shellder that is attached to its tail feeds on the scraps left over by Slowbro.",
    abilities: ["Oblivious", "Own tempo"],
    height: "1.6m",
    weight: "78.5kg",
    evolutionChain: [{ name: "slowpoke" }, { name: "slowbro", level: "Lvl 37" }]
  },
{
    id: 81,
    name: "magnemite",
    types: ["ELECTRIC", "STEEL"],
    description: "It uses anti-gravity to stay suspended. It appears without warning and uses electric currents to attack.",
    abilities: ["Magnet pull", "Sturdy"],
    height: "0.3m",
    weight: "6.0kg",
    evolutionChain: [{ name: "magnemite" }, { name: "magneton", level: "Lvl 30" }, { name: "magnezone", level: "Thunder Stone" }]
  },
  {
    id: 82,
    name: "magneton",
    types: ["ELECTRIC", "STEEL"],
    description: "Formed by several Magnemite linked together. They frequently appear when sunspots flare up.",
    abilities: ["Magnet pull", "Sturdy"],
    height: "1.0m",
    weight: "60.0kg",
    evolutionChain: [{ name: "magnemite" }, { name: "magneton", level: "Lvl 30" }, { name: "magnezone", level: "Thunder Stone" }]
  },
  {
    id: 83,
    name: "farfetchd",
    types: ["NORMAL", "FLYING"],
    description: "The sprig of green onions it holds is its most prized possession. It is used as a weapon for fighting.",
    abilities: ["Keen eye", "Inner focus"],
    height: "0.8m",
    weight: "15.0kg",
    evolutionChain: [{ name: "farfetchd" }]
  },
  {
    id: 84,
    name: "doduo",
    types: ["NORMAL", "FLYING"],
    description: "Its two heads check their surroundings carefully. While one head sleeps, the other stays awake.",
    abilities: ["Run away", "Early bird"],
    height: "1.4m",
    weight: "39.2kg",
    evolutionChain: [{ name: "doduo" }, { name: "dodrio", level: "Lvl 31" }]
  },
  {
    id: 85,
    name: "dodrio",
    types: ["NORMAL", "FLYING"],
    description: "An odd Pokémon that is said to be two Doduo combined. When Doduo evolves, one head splits into two.",
    abilities: ["Run away", "Early bird"],
    height: "1.8m",
    weight: "85.2kg",
    evolutionChain: [{ name: "doduo" }, { name: "dodrio", level: "Lvl 31" }]
  },
  {
    id: 86,
    name: "seel",
    types: ["WATER"],
    description: "It loves icebergs. It is protected by a thick hide that allows it to stay warm even in frigid water.",
    abilities: ["Thick fat", "Hydration"],
    height: "1.1m",
    weight: "90.0kg",
    evolutionChain: [{ name: "seel" }, { name: "dewgong", level: "Lvl 34" }]
  },
  {
    id: 87,
    name: "dewgong",
    types: ["WATER", "ICE"],
    description: "Stores thermal energy in its body. Swims at a steady 8 knots even in intensely cold waters.",
    abilities: ["Thick fat", "Hydration"],
    height: "1.7m",
    weight: "120.0kg",
    evolutionChain: [{ name: "seel" }, { name: "dewgong", level: "Lvl 34" }]
  },
  {
    id: 88,
    name: "grimer",
    types: ["POISON"],
    description: "Made of congealed sludge. It smells so putrid that nothing will grow where it has been.",
    abilities: ["Stench", "Sticky hold"],
    height: "0.9m",
    weight: "30.0kg",
    evolutionChain: [{ name: "grimer" }, { name: "muk", level: "Lvl 38" }]
  },
  {
    id: 89,
    name: "muk",
    types: ["POISON"],
    description: "It is thickly covered with a foul, vile sludge. It is so toxic that even its footprints are poison.",
    abilities: ["Stench", "Sticky hold"],
    height: "1.2m",
    weight: "30.0kg",
    evolutionChain: [{ name: "grimer" }, { name: "muk", level: "Lvl 38" }]
  },
  {
    id: 90,
    name: "shellder",
    types: ["WATER"],
    description: "It swims backward by opening and closing its two shells. It is surprisingly fast in the water.",
    abilities: ["Shell armor", "Skill link"],
    height: "0.3m",
    weight: "4.0kg",
    evolutionChain: [{ name: "shellder" }, { name: "cloyster", level: "Water Stone" }]
  },
  {
    id: 91,
    name: "cloyster",
    types: ["WATER", "ICE"],
    description: "It shoots spikes from its shell to attack. It cannot be opened even by the strongest of forces.",
    abilities: ["Shell armor", "Skill link"],
    height: "1.5m",
    weight: "132.5kg",
    evolutionChain: [{ name: "shellder" }, { name: "cloyster", level: "Water Stone" }]
  },
  {
    id: 92,
    name: "gastly",
    types: ["GHOST", "POISON"],
    description: "Born from gases, any living being loses its life if it encounters this Pokémon in a closed room.",
    abilities: ["Levitate"],
    height: "1.3m",
    weight: "0.1kg",
    evolutionChain: [{ name: "gastly" }, { name: "haunter", level: "Lvl 25" }, { name: "gengar", level: "Trade" }]
  },
  {
    id: 93,
    name: "haunter",
    types: ["GHOST", "POISON"],
    description: "It can pass through any obstacle. It is said that Haunter lurks in darkness to stalk its next victim.",
    abilities: ["Levitate"],
    height: "1.6m",
    weight: "0.1kg",
    evolutionChain: [{ name: "gastly" }, { name: "haunter", level: "Lvl 25" }, { name: "gengar", level: "Trade" }]
  },
  {
    id: 94,
    name: "gengar",
    types: ["GHOST", "POISON"],
    description: "To steal the life of its target, it slips into the prey's shadow and silently waits for a chance.",
    abilities: ["Cursed body"],
    height: "1.5m",
    weight: "40.5kg",
    evolutionChain: [{ name: "gastly" }, { name: "haunter", level: "Lvl 25" }, { name: "gengar", level: "Trade" }]
  },
  {
    id: 95,
    name: "onix",
    types: ["ROCK", "GROUND"],
    description: "As it burrows through the ground, it absorbs many hard objects, making its body rock-hard.",
    abilities: ["Rock head", "Sturdy"],
    height: "8.8m",
    weight: "210.0kg",
    evolutionChain: [{ name: "onix" }, { name: "steelix", level: "Trade" }]
  },
  {
    id: 96,
    name: "drowzee",
    types: ["PSYCHIC"],
    description: "It puts its enemies to sleep, then it feasts on their dreams. It remembers every dream it eats.",
    abilities: ["Insomnia", "Forewarn"],
    height: "1.0m",
    weight: "32.4kg",
    evolutionChain: [{ name: "drowzee" }, { name: "hypno", level: "Lvl 26" }]
  },
  {
    id: 97,
    name: "hypno",
    types: ["PSYCHIC"],
    description: "It carries a pendulum in its hand. It uses the hypnotic rhythm to lull its prey into a deep sleep.",
    abilities: ["Insomnia", "Forewarn"],
    height: "1.6m",
    weight: "75.6kg",
    evolutionChain: [{ name: "drowzee" }, { name: "hypno", level: "Lvl 26" }]
  },
  {
    id: 98,
    name: "krabby",
    types: ["WATER"],
    description: "It uses its large pincers to defend itself. It can regrow its pincers if they fall off in battle.",
    abilities: ["Hyper cutter", "Shell armor"],
    height: "0.4m",
    weight: "6.5kg",
    evolutionChain: [{ name: "krabby" }, { name: "kingler", level: "Lvl 28" }]
  },
  {
    id: 99,
    name: "kingler",
    types: ["WATER"],
    description: "The pincers are so heavy that it has trouble aiming properly. It is, however, incredibly powerful.",
    abilities: ["Hyper cutter", "Shell armor"],
    height: "1.3m",
    weight: "60.0kg",
    evolutionChain: [{ name: "krabby" }, { name: "kingler", level: "Lvl 28" }]
  },
  {
    id: 100,
    name: "voltorb",
    types: ["ELECTRIC"],
    description: "It is usually found in power plants. It is easily mistaken for a Poké Ball, often shocking those who touch it.",
    abilities: ["Soundproof", "Static"],
    height: "0.5m",
    weight: "10.4kg",
    evolutionChain: [{ name: "voltorb" }, { name: "electrode", level: "Lvl 30" }]
  },
  {
    id: 101,
    name: "electrode",
    types: ["ELECTRIC"],
    description: "It stores electrical energy under very high pressure. It often explodes with little or no provocation.",
    abilities: ["Soundproof", "Static"],
    height: "1.2m",
    weight: "66.6kg",
    evolutionChain: [{ name: "voltorb" }, { name: "electrode", level: "Lvl 30" }]
  },
  {
    id: 102,
    name: "exeggcute",
    types: ["GRASS", "PSYCHIC"],
    description: "Though it looks like eggs, it is a cluster of seeds. It is held together by telepathic power.",
    abilities: ["Chlorophyll"],
    height: "0.4m",
    weight: "2.5kg",
    evolutionChain: [{ name: "exeggcute" }, { name: "exeggutor", level: "Leaf Stone" }]
  },
  {
    id: 103,
    name: "exeggutor",
    types: ["GRASS", "PSYCHIC"],
    description: "It is called 'The Walking Jungle.' Each head thinks independently, but they are all very friendly.",
    abilities: ["Chlorophyll"],
    height: "2.0m",
    weight: "120.0kg",
    evolutionChain: [{ name: "exeggcute" }, { name: "exeggutor", level: "Leaf Stone" }]
  },
  {
    id: 104,
    name: "cubone",
    types: ["GROUND"],
    description: "It wears the skull of its mother. It is often seen crying, and the skull rattles when it does.",
    abilities: ["Rock head", "Lightning rod"],
    height: "0.4m",
    weight: "6.5kg",
    evolutionChain: [{ name: "cubone" }, { name: "marowak", level: "Lvl 28" }]
  },
  {
    id: 105,
    name: "marowak",
    types: ["GROUND"],
    description: "It has evolved to be a master of the bone it carries. It is much more aggressive than Cubone.",
    abilities: ["Rock head", "Lightning rod"],
    height: "1.0m",
    weight: "45.0kg",
    evolutionChain: [{ name: "cubone" }, { name: "marowak", level: "Lvl 28" }]
  },
  {
    id: 106,
    name: "hitmonlee",
    types: ["FIGHTING"],
    description: "It has the ability to stretch its legs, allowing it to deliver kicks from a long distance.",
    abilities: ["Limber", "Reckless"],
    height: "1.5m",
    weight: "49.8kg",
    evolutionChain: [{ name: "tyrogue" }, { name: "hitmonlee", level: "Lvl 20" }]
  },
  {
    id: 107,
    name: "hitmonchan",
    types: ["FIGHTING"],
    description: "Its punches are as fast as a bullet train. It is said that its punches can even tear through concrete.",
    abilities: ["Keen eye", "Iron fist"],
    height: "1.4m",
    weight: "50.2kg",
    evolutionChain: [{ name: "tyrogue" }, { name: "hitmonchan", level: "Lvl 20" }]
  },
  {
    id: 108,
    name: "lickitung",
    types: ["NORMAL"],
    description: "Its tongue is twice as long as its body. It uses its tongue to lick food and clean itself.",
    abilities: ["Own tempo", "Oblivious"],
    height: "1.2m",
    weight: "65.5kg",
    evolutionChain: [{ name: "lickitung" }]
  },
  {
    id: 109,
    name: "koffing",
    types: ["POISON"],
    description: "Its body is filled with toxic gas. It can float in the air and is known to drift into buildings.",
    abilities: ["Levitate", "Neutralizing gas"],
    height: "0.6m",
    weight: "1.0kg",
    evolutionChain: [{ name: "koffing" }, { name: "weezing", level: "Lvl 35" }]
  },
  {
    id: 110,
    name: "weezing",
    types: ["POISON"],
    description: "It is formed by two Koffing that have merged together. It emits a powerful, noxious gas.",
    abilities: ["Levitate", "Neutralizing gas"],
    height: "1.2m",
    weight: "9.5kg",
    evolutionChain: [{ name: "koffing" }, { name: "weezing", level: "Lvl 35" }]
  },
  {
    id: 111,
    name: "rhyhorn",
    types: ["GROUND", "ROCK"],
    description: "It is not very smart. It will keep charging at an object until it is exhausted.",
    abilities: ["Lightning rod", "Rock head"],
    height: "1.0m",
    weight: "115.0kg",
    evolutionChain: [{ name: "rhyhorn" }, { name: "rhydon", level: "Lvl 42" }]
  },
  {
    id: 112,
    name: "rhydon",
    types: ["GROUND", "ROCK"],
    description: "It is strong enough to knock down a building with a single blow of its tail.",
    abilities: ["Lightning rod", "Rock head"],
    height: "1.9m",
    weight: "120.0kg",
    evolutionChain: [{ name: "rhyhorn" }, { name: "rhydon", level: "Lvl 42" }]
  },
  {
    id: 113,
    name: "chansey",
    types: ["NORMAL"],
    description: "A rare and elusive Pokémon. It is said that happiness comes to those who can catch one.",
    abilities: ["Natural cure", "Serene grace"],
    height: "1.1m",
    weight: "34.6kg",
    evolutionChain: [{ name: "happiny" }, { name: "chansey", level: "Happiness" }, { name: "blissey", level: "Happiness" }]
  },
  {
    id: 114,
    name: "tangela",
    types: ["GRASS"],
    description: "It is covered in blue vines. If one is cut, it grows back quickly and keeps growing.",
    abilities: ["Chlorophyll", "Leaf guard"],
    height: "1.0m",
    weight: "35.0kg",
    evolutionChain: [{ name: "tangela" }]
  },
  {
    id: 115,
    name: "kangaskhan",
    types: ["NORMAL"],
    description: "It carries its baby in a pouch on its belly. It will fight fiercely to protect its young.",
    abilities: ["Early bird", "Scrappy"],
    height: "2.2m",
    weight: "80.0kg",
    evolutionChain: [{ name: "kangaskhan" }]
  },
  {
    id: 116,
    name: "horsea",
    types: ["WATER"],
    description: "It makes its nest in reefs. It uses its tail to anchor itself when the currents are strong.",
    abilities: ["Swift swim", "Sniper"],
    height: "0.4m",
    weight: "8.0kg",
    evolutionChain: [{ name: "horsea" }, { name: "seadra", level: "Lvl 32" }, { name: "kingdra", level: "Trade" }]
  },
  {
    id: 117,
    name: "seadra",
    types: ["WATER"],
    description: "It is known for its sharp spikes. It swims backward to escape when it feels threatened.",
    abilities: ["Swift swim", "Sniper"],
    height: "1.2m",
    weight: "25.0kg",
    evolutionChain: [{ name: "horsea" }, { name: "seadra", level: "Lvl 32" }, { name: "kingdra", level: "Trade" }]
  },
  {
    id: 118,
    name: "goldeen",
    types: ["WATER"],
    description: "Its tail is very beautiful. It swims gracefully in the water, which is why it is called a water dancer.",
    abilities: ["Swift swim", "Water veil"],
    height: "0.6m",
    weight: "15.0kg",
    evolutionChain: [{ name: "goldeen" }, { name: "seaking", level: "Lvl 33" }]
  },
  {
    id: 119,
    name: "seaking",
    types: ["WATER"],
    description: "It uses its horn to drill holes in riverbeds, creating shelters where it can lay its eggs.",
    abilities: ["Swift swim", "Water veil"],
    height: "1.3m",
    weight: "39.0kg",
    evolutionChain: [{ name: "goldeen" }, { name: "seaking", level: "Lvl 33" }]
  },
  {
    id: 120,
    name: "staryu",
    types: ["WATER"],
    description: "It has a star-shaped core in the center of its body. It can regenerate its arms if they are cut off.",
    abilities: ["Illuminate", "Natural cure"],
    height: "0.8m",
    weight: "34.5kg",
    evolutionChain: [{ name: "staryu" }, { name: "starmie", level: "Water Stone" }]
  },
{
    id: 121,
    name: "starmie",
    types: ["WATER", "PSYCHIC"],
    description: "Its central core glows with the seven colors of the rainbow. It is considered a mysterious Pokémon.",
    abilities: ["Illuminate", "Natural cure"],
    height: "1.1m",
    weight: "80.0kg",
    evolutionChain: [{ name: "staryu" }, { name: "starmie", level: "Water Stone" }]
  },
  {
    id: 122,
    name: "mr-mime",
    types: ["PSYCHIC", "FAIRY"],
    description: "It is a master of pantomime. Its gestures can create invisible walls that are solid to the touch.",
    abilities: ["Soundproof", "Filter"],
    height: "1.3m",
    weight: "54.5kg",
    evolutionChain: [{ name: "mime-jr" }, { name: "mr-mime", level: "Mimic" }]
  },
  {
    id: 123,
    name: "scyther",
    types: ["BUG", "FLYING"],
    description: "It tears through grass with its sharp scythes. It moves so fast that it leaves afterimages.",
    abilities: ["Swarm", "Technician"],
    height: "1.5m",
    weight: "56.0kg",
    evolutionChain: [{ name: "scyther" }, { name: "scizor", level: "Metal Coat" }]
  },
  {
    id: 124,
    name: "jynx",
    types: ["ICE", "PSYCHIC"],
    description: "It moves with a rhythmic, dance-like motion. It is said that its movements can put others into a trance.",
    abilities: ["Oblivious", "Forewarn"],
    height: "1.4m",
    weight: "40.6kg",
    evolutionChain: [{ name: "smoochum" }, { name: "jynx", level: "Lvl 30" }]
  },
  {
    id: 125,
    name: "electabuzz",
    types: ["ELECTRIC"],
    description: "It is often seen in power plants. When it is agitated, its body crackles with electricity.",
    abilities: ["Static"],
    height: "1.1m",
    weight: "30.0kg",
    evolutionChain: [{ name: "elekid" }, { name: "electabuzz", level: "Lvl 30" }, { name: "electivire", level: "Trade" }]
  },
  {
    id: 126,
    name: "magmar",
    types: ["FIRE"],
    description: "Its body is always burning with an orange glow. It lives in volcanic craters.",
    abilities: ["Flame body"],
    height: "1.3m",
    weight: "44.5kg",
    evolutionChain: [{ name: "magby" }, { name: "magmar", level: "Lvl 30" }, { name: "magmortar", level: "Trade" }]
  },
  {
    id: 127,
    name: "pinsir",
    types: ["BUG"],
    description: "It uses its large pincers to grip its prey. It is very strong and can lift objects twice its weight.",
    abilities: ["Hyper cutter", "Mold breaker"],
    height: "1.5m",
    weight: "55.0kg",
    evolutionChain: [{ name: "pinsir" }]
  },
  {
    id: 128,
    name: "tauros",
    types: ["NORMAL"],
    description: "It is a headstrong Pokémon. When it begins to run, it is almost impossible to stop.",
    abilities: ["Intimidate", "Anger point"],
    height: "1.4m",
    weight: "88.4kg",
    evolutionChain: [{ name: "tauros" }]
  },
  {
    id: 129,
    name: "magikarp",
    types: ["WATER"],
    description: "It is famous for being incredibly weak. It is said to be the most pathetic Pokémon in the world.",
    abilities: ["Swift swim", "Rattled"],
    height: "0.9m",
    weight: "10.0kg",
    evolutionChain: [{ name: "magikarp" }, { name: "gyarados", level: "Lvl 20" }]
  },
  {
    id: 130,
    name: "gyarados",
    types: ["WATER", "FLYING"],
    description: "It is said that it can swim for a month without resting. It is feared for its destructive power.",
    abilities: ["Intimidate"],
    height: "6.5m",
    weight: "235.0kg",
    evolutionChain: [{ name: "magikarp" }, { name: "gyarados", level: "Lvl 20" }]
  },
  {
    id: 131,
    name: "lapras",
    types: ["WATER", "ICE"],
    description: "It loves to swim in the sea with people on its back. It is a very gentle and kind Pokémon.",
    abilities: ["Water absorb", "Shell armor"],
    height: "2.5m",
    weight: "220.0kg",
    evolutionChain: [{ name: "lapras" }]
  },
  {
    id: 132,
    name: "ditto",
    types: ["NORMAL"],
    description: "It can rearrange its cells to transform into any other Pokémon it sees.",
    abilities: ["Limber", "Imposter"],
    height: "0.3m",
    weight: "4.0kg",
    evolutionChain: [{ name: "ditto" }]
  },
  {
    id: 133,
    name: "eevee",
    types: ["NORMAL"],
    description: "Its genetic code is unstable, which allows it to evolve into many different forms.",
    abilities: ["Run away", "Adaptability"],
    height: "0.3m",
    weight: "6.5kg",
    evolutionChain: [{ name: "eevee" }]
  },
  {
    id: 134,
    name: "vaporeon",
    types: ["WATER"],
    description: "It has a cell structure similar to water, which allows it to melt into the sea unnoticed.",
    abilities: ["Water absorb"],
    height: "1.0m",
    weight: "29.0kg",
    evolutionChain: [{ name: "eevee" }, { name: "vaporeon", level: "Water Stone" }]
  },
  {
    id: 135,
    name: "jolteon",
    types: ["ELECTRIC"],
    description: "It stores electricity in its cells. It is easily excited and can release jolts of lightning.",
    abilities: ["Volt absorb"],
    height: "0.8m",
    weight: "24.5kg",
    evolutionChain: [{ name: "eevee" }, { name: "jolteon", level: "Thunder Stone" }]
  },
  {
    id: 136,
    name: "flareon",
    types: ["FIRE"],
    description: "It has a flame sac in its body. It can release fire at temperatures over 1,600 degrees Fahrenheit.",
    abilities: ["Flash fire"],
    height: "0.9m",
    weight: "25.0kg",
    evolutionChain: [{ name: "eevee" }, { name: "flareon", level: "Fire Stone" }]
  },
  {
    id: 137,
    name: "porygon",
    types: ["NORMAL"],
    description: "A man-made Pokémon created by programming. It can exist in cyberspace and the real world.",
    abilities: ["Trace", "Download"],
    height: "0.8m",
    weight: "36.5kg",
    evolutionChain: [{ name: "porygon" }, { name: "porygon2", level: "Up-Grade" }]
  },
  {
    id: 138,
    name: "omanyte",
    types: ["ROCK", "WATER"],
    description: "It lived in the prehistoric oceans. It is said to have gone extinct millions of years ago.",
    abilities: ["Swift swim", "Shell armor"],
    height: "0.4m",
    weight: "7.5kg",
    evolutionChain: [{ name: "omanyte" }, { name: "omastar", level: "Lvl 40" }]
  },
  {
    id: 139,
    name: "omastar",
    types: ["ROCK", "WATER"],
    description: "Its shell is very heavy. It is said that it was unable to move quickly and eventually went extinct.",
    abilities: ["Swift swim", "Shell armor"],
    height: "1.0m",
    weight: "35.0kg",
    evolutionChain: [{ name: "omanyte" }, { name: "omastar", level: "Lvl 40" }]
  },
  {
    id: 140,
    name: "kabuto",
    types: ["ROCK", "WATER"],
    description: "It has a hard shell that protects it from predators. It is an ancient Pokémon found in fossils.",
    abilities: ["Swift swim", "Battle armor"],
    height: "0.5m",
    weight: "11.5kg",
    evolutionChain: [{ name: "kabuto" }, { name: "kabutops", level: "Lvl 40" }]
  },
{
    id: 141,
    name: "kabutops",
    types: ["ROCK", "WATER"],
    description: "It is an excellent swimmer. It slashes its prey with its sharp claws, then drains the prey's fluids.",
    abilities: ["Swift swim", "Battle armor"],
    height: "1.3m",
    weight: "40.5kg",
    evolutionChain: [{ name: "kabuto" }, { name: "kabutops", level: "Lvl 40" }]
  },
  {
    id: 142,
    name: "aerodactyl",
    types: ["ROCK", "FLYING"],
    description: "A prehistoric Pokémon that lived in the ancient skies. It attacked with its saw-like fangs.",
    abilities: ["Rock head", "Pressure"],
    height: "1.8m",
    weight: "59.0kg",
    evolutionChain: [{ name: "aerodactyl" }]
  },
  {
    id: 143,
    name: "snorlax",
    types: ["NORMAL"],
    description: "It is not satisfied unless it eats over 800 pounds of food every day. After eating, it goes to sleep.",
    abilities: ["Immunity", "Thick fat"],
    height: "2.1m",
    weight: "460.0kg",
    evolutionChain: [{ name: "munchlax" }, { name: "snorlax", level: "Happiness" }]
  },
  {
    id: 144,
    name: "articuno",
    types: ["ICE", "FLYING"],
    description: "A legendary bird Pokémon that is said to appear to doomed people who are lost in icy mountains.",
    abilities: ["Pressure"],
    height: "1.7m",
    weight: "55.4kg",
    evolutionChain: [{ name: "articuno" }]
  },
  {
    id: 145,
    name: "zapdos",
    types: ["ELECTRIC", "FLYING"],
    description: "A legendary bird Pokémon that is said to live in thunderclouds. It freely controls lightning bolts.",
    abilities: ["Pressure"],
    height: "1.6m",
    weight: "52.6kg",
    evolutionChain: [{ name: "zapdos" }]
  },
  {
    id: 146,
    name: "moltres",
    types: ["FIRE", "FLYING"],
    description: "A legendary bird Pokémon that is said to bring an early spring to the icy lands it visits.",
    abilities: ["Pressure"],
    height: "2.0m",
    weight: "60.0kg",
    evolutionChain: [{ name: "moltres" }]
  },
  {
    id: 147,
    name: "dratini",
    types: ["DRAGON"],
    description: "It is called 'The Mirage Pokémon' because it was so rarely seen by humanity for a long time.",
    abilities: ["Shed skin"],
    height: "1.8m",
    weight: "3.3kg",
    evolutionChain: [{ name: "dratini" }, { name: "dragonair", level: "Lvl 30" }, { name: "dragonite", level: "Lvl 55" }]
  },
  {
    id: 148,
    name: "dragonair",
    types: ["DRAGON"],
    description: "It is said that it can change the weather. It is often seen near large bodies of water.",
    abilities: ["Shed skin"],
    height: "4.0m",
    weight: "16.5kg",
    evolutionChain: [{ name: "dratini" }, { name: "dragonair", level: "Lvl 30" }, { name: "dragonite", level: "Lvl 55" }]
  },
  {
    id: 149,
    name: "dragonite",
    types: ["DRAGON", "FLYING"],
    description: "It is said to be able to circle the globe in just 16 hours. It is a kindhearted Pokémon.",
    abilities: ["Inner focus"],
    height: "2.2m",
    weight: "210.0kg",
    evolutionChain: [{ name: "dratini" }, { name: "dragonair", level: "Lvl 30" }, { name: "dragonite", level: "Lvl 55" }]
  },
  {
    id: 150,
    name: "mewtwo",
    types: ["PSYCHIC"],
    description: "A Pokémon created by genetic engineering. It was built to be the ultimate fighting machine.",
    abilities: ["Pressure", "Unnerve"],
    height: "2.0m",
    weight: "122.0kg",
    evolutionChain: [{ name: "mewtwo" }]
  },
  {
    id: 151,
    name: "mew",
    types: ["PSYCHIC"],
    description: "Because it can use all kinds of moves, many scientists believe it to be the ancestor of all Pokémon.",
    abilities: ["Synchronize"],
    height: "0.4m",
    weight: "4.0kg",
    evolutionChain: [{ name: "mew" }]
  }
];