// import moment from 'moment'
// import 'moment/locale/pt-br'

// moment.locale('pt-br')

export const selectAllPokemons = (payload) =>
  payload.map((elem) => ({
    id: getPokemonId(elem.pokemon.url),
    name: elem.pokemon.name,
    slot: elem.slot,
  }))

const getPokemonId = (url) => {
  const urlArray = url.split('/')
  return urlArray[6]
}

export const selectPokemonDetail = (payload) => ({
  sprites: payload.sprites,
})
