import { createSlice } from '@reduxjs/toolkit'
import extend from 'lodash/extend'

const initialState = {
  cart: [],
}

const { actions, reducer } = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) =>
      extend(state, { cart: [...state.cart, payload.item] }),
    removeFromCart: (state) => state,
  },
})

export const { addToCart, removeFromCart, pokemonInCart } = actions

export { default as cartSaga } from './sagas'

export default reducer
