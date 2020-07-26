import React from 'react'
import { useSelector } from 'react-redux'

import styles from './index.module.scss'

const Cart = () => {
  const { cart } = useSelector(({ cart }) => cart)

  //   console.log(cart)

  return (
    <div className={styles.root}>
      <h1>Carrinho</h1>
      {cart?.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h3>R${item.price},00</h3>
        </div>
      ))}
    </div>
  )
}

export default Cart
