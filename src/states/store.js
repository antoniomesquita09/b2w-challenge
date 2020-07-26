import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import pokemons, { pokemonsSaga } from './modules/pokemons'
import cart, { cartSaga } from './modules/cart'

const sagaMiddleware = createSagaMiddleware()

const middleware = [...getDefaultMiddleware(), sagaMiddleware]

const store = configureStore({
  reducer: {
    pokemons,
    cart,
  },
  middleware,
})

const rootSaga = function* () {
  yield all([pokemonsSaga()])
  yield all([cartSaga()])
}

sagaMiddleware.run(rootSaga)

export default store
