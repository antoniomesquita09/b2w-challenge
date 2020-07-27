import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getCartTotal } from 'states/modules/cart'

import styles from './index.module.scss'

const Cart = () => {
  const dispatch = useDispatch()
  const { cart, total } = useSelector(({ cart }) => cart)

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch, cart])

  return (
    <div className={styles.root}>
      <h1>Carrinho</h1>
      {cart?.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h3>R${item.price},00</h3>
        </div>
      ))}
      <h2>Total: R${total},00</h2>
    </div>
  )
}

export default Cart
