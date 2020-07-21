import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import pokemons, { pokemonsSaga } from './modules/pokemons'

const sagaMiddleware = createSagaMiddleware()

const middleware = [...getDefaultMiddleware(), sagaMiddleware]

const store = configureStore({
  reducer: {
    pokemons,
  },
  middleware,
})

const rootSaga = function* () {
  yield all([pokemonsSaga()])
}

sagaMiddleware.run(rootSaga)

export default store
