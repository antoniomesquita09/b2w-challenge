import React from 'react'

import styles from './index.module.scss'

const Cart = () => {
  return (
    <div className={styles.root}>
      <h1>Carrinho</h1>
      <ul>
        <li>Item1</li>
        <li>Item2</li>
        <li>Item3</li>
      </ul>
    </div>
  )
}

export default Cart
