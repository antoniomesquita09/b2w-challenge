import { createSlice } from '@reduxjs/toolkit'
import extend from 'lodash/extend'
import remove from 'lodash/remove'

const initialState = {
  cart: [],
  total: 0,
}

const { actions, reducer } = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) =>
      extend(state, { cart: [...state.cart, payload.item] }),
    removeFromCart: (state, { payload }) => {
      const newCart =
        remove(state.cart, (pokemon) => pokemon.id !== payload.pokemonId) || []
      return extend(state, { cart: newCart })
    },
    getCartTotal: (state) => {
      const total = state.cart.reduce(
        (total, current) => total + current.price,
        0
      )
      return extend(state, { total })
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  pokemonInCart,
  getCartTotal,
} = actions

export { default as cartSaga } from './sagas'

export default reducer
