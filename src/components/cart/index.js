import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { func, bool } from 'prop-types'

import { getCartTotal, cleanCart } from 'states/modules/cart'

import Modal from 'components/modal'

import styles from './index.module.scss'

const Cart = ({ modal, setModal }) => {
  const dispatch = useDispatch()
  const { cart, total } = useSelector(({ cart }) => cart)

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch, cart])

  const openModal = () => {
    setModal(true)
  }

  const handleCleanCart = () => {
    dispatch(cleanCart())
    setModal(false)
  }

  return (
    <>
      <div className={styles.root}>
        <h1>Carrinho</h1>
        {cart?.map((item) => (
          <div key={item.id} className={styles.item}>
            <h2>{item.name}</h2>
            <h3>R${item.price},00</h3>
          </div>
        ))}
        {cart?.length > 0 ? (
          <>
            <h2>Total: R${total},00</h2>
            <button onClick={openModal}>Finalizar</button>
          </>
        ) : (
          <h2>O seu carrinho está vazio</h2>
        )}
      </div>
      {modal && (
        <Modal>
          <h1>OBRIGADO!</h1>
          <h2>Valor total da sua compra: R${total},00</h2>
          <button onClick={handleCleanCart}>Limpar carrinho</button>
        </Modal>
      )}
    </>
  )
}

Cart.propTypes = {
  modal: bool,
  setModal: func,
}

Cart.defaultProps = {
  modal: false,
  setModal: () => null,
}

export default Cart
