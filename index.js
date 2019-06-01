const FuzzySet = require('fuzzyset');
const { pokemons } = require('./pokemon-names');

const a = FuzzySet(pokemons.map(pokemon => pokemon.pokemonName));

const res = a.get('jiarados');

console.log(res);
