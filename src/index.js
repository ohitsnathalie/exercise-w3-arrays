const pokemons = [
	"Bulbasaur",
	"Ivysaur",
	"Venusaur",
	"Charmander",
	"Charmeleon",
	"Charizard",
	"Squirtle",
	"Wartortle",
	"Blastoise",
	"Metapod",
	"Weedle",
	"Pikachu",
	"Pidgey",
];

const countThem = () => {
	// print out, in a sentence, how many pokemons I have.
	// like: "I have x pokemons!"
	let length = pokemons.length;
	console.log(`I have ${pokemons.length} pokemons`);
};
countThem();

const orderThem = () => {
	// order the pokemons alphabetically
	let order = pokemons.toSorted();
	console.log(order);
};
orderThem();

const flipThem = () => {
	// reverse the order of the pokemons
	let reverse = pokemons.reverse();
	console.log(reverse);
};
flipThem();

const makeThemBig = () => {
	// print the pokemons in UPPERCASE letters
	const caps = pokemons.map((pokemon) => pokemon.toUpperCase());
	console.log(caps);
};
makeThemBig();

const onlyTheBs = () => {
	// only print the pokemons that starts with B
	const startingWithB = pokemons.filter((pokemon) => pokemon.startsWith("B"));
	console.log(startingWithB);
};
onlyTheBs();

const notTheCs = () => {
	// remove all pokemons that starts with C
	const withoutC = pokemons.filter((pokemon) => !pokemon.startsWith("C"));
	console.log(withoutC);
};
notTheCs();

const nameAndIdThanks = () => {
	// print out name and index of all pokemons
	// like: number x - Squirtle
	pokemons.forEach((pokemon, index) => {
		console.log(`${index} – ${pokemon}`);
	});
};
nameAndIdThanks();

const catchPokemon = (name) => {
	// add a pokemon with a name of your choice to the list,
	// print the list so you see its there.
	pokemons.push("Gengar");
	console.log(pokemons);
};
catchPokemon();

const didICatchIt = (name) => {
	// check the pokemons to see if a specific pokemon is in the array
	const isSquirtle = "Squirtle";
	if (pokemons.includes(isSquirtle)) {
		console.log(true);
	} else {
		console.log(false);
	}
};
didICatchIt();

const addInThirdPlace = () => {
	// add the pokemon "Clefairy" in the third place of the array
	// print the list so you see its there.
	pokemons.splice(2, 0, "Clefairy");
	console.log(pokemons);
};
addInThirdPlace();

// ***BONUS***
const theLongestName = () => {
	// find the pokemon with the longest name

	const longestName = pokemons.reduce((longest, current) => {
		return current.length > longest.length ? current : longest;
	}, "");

	console.log("Pokemon with the longest name:", longestName);
};
theLongestName();
