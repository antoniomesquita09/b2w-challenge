// import moment from 'moment'
// import 'moment/locale/pt-br'

// moment.locale('pt-br')

export const selectAllPokemons = (payload) =>
  payload.map((elem) => ({
    id: getPokemonId(elem.pokemon.url),
    name: elem.pokemon.name,
    slot: elem.slot,
    price: randomInt(1, 150),
  }))

const getPokemonId = (url) => {
  const urlArray = url.split('/')
  return urlArray[6]
}

const randomInt = (min, max) => {
  return min + Math.floor((max - min) * Math.random())
}

export const selectPokemonDetail = (payload) => ({
  pokemonId: payload.pokemonId,
  sprites: payload.sprites,
})
