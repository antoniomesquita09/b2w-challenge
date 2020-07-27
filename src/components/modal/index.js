import React from 'react'
import { func, node } from 'prop-types'

import styles from './index.module.scss'

const Modal = ({ onClose, children }) => {
  return (
    <div onClick={onClose} className={styles.root}>
      {children}
    </div>
  )
}

Modal.propTypes = {
  onClose: func,
  children: node,
}

Modal.defaultProps = {
  onClose: () => null,
  children: null,
}

export default Modal
