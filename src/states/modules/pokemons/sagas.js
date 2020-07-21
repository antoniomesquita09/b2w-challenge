import { call, put, takeEvery } from 'redux-saga/effects'
// import { toast } from 'react-toastify'

import api from 'services/api'

import {
  getAllPokemons,
  getAllPokemonsFailure,
  getAllPokemonsSuccess,
  getSinglePokemon,
  getSinglePokemonSuccess,
  getSinglePokemonFailure,
} from '.'

// types '/types'
// normal: 1
// fire: 9
// water: 10
// dragon: 15

export default function* rootSaga() {
  yield takeEvery(getAllPokemons, listPokemon)
  yield takeEvery(getSinglePokemon, getPokemon)
}

function* listPokemon() {
  try {
    const { data } = yield call(api.get, '/type/1')
    yield put(getAllPokemonsSuccess(data))
  } catch (error) {
    yield put(getAllPokemonsFailure(error.toString()))
  }
}

function* getPokemon({ payload }) {
  const { pokemonId } = payload
  try {
    const { data } = yield call(api.get, `/pokemon/${pokemonId}`)
    yield put(getSinglePokemonSuccess(data))
  } catch (error) {
    yield put(getSinglePokemonFailure(error.toString()))
  }
}
