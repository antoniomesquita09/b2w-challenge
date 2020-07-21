import { createSlice } from '@reduxjs/toolkit'
import extend from 'lodash/extend'

import {
  selectAllPokemons,
  //selectPokemonDetail
} from './selectors'

const initialState = {
  allPokemons: [],
  allPokemonsSprites: [],
}

const { actions, reducer } = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    getAllPokemons: (state) => state,
    getAllPokemonsFailure: (state) => state,
    getAllPokemonsSuccess: (state, { payload }) =>
      extend(state, { allPokemons: selectAllPokemons(payload.pokemon) }),
    getSinglePokemon: (state) => state,
    getSinglePokemonFailure: (state) => state,
    getSinglePokemonSuccess: (state, { payload }) =>
      //   console.log(payload.sprites),
      extend(state, {
        allPokemonsSprites: [
          ...state.allPokemonsSprites,
          { ...payload.sprites },
        ],
      }),
  },
})

export const {
  getAllPokemons,
  getAllPokemonsFailure,
  getAllPokemonsSuccess,
  getSinglePokemon,
  getSinglePokemonSuccess,
  getSinglePokemonFailure,
} = actions

export { default as pokemonsSaga } from './sagas'

export default reducer
