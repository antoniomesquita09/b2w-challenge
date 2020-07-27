import React from 'react'
import { number, func } from 'prop-types'

import styles from './index.module.scss'

const Paginator = ({ totalPages, currentPage, changePage }) => {
  const pageNumbersFactory = () => {
    const pages = []
    for (let i = 0; i < totalPages; i++) {
      pages.push(<span key={i}>{i + 1}</span>)
    }
    return pages
  }

  const pagination = pageNumbersFactory()

  return (
    <div className={styles.root}>
      {pagination.map((elem, index) => (
        <button
          key={index}
          onClick={() => changePage(index + 1)}
          className={styles.button}
          style={{ backgroundColor: currentPage === index + 1 && 'dodgerblue' }}
        >
          {elem}
        </button>
      ))}
    </div>
  )
}

Paginator.propTypes = {
  totalPages: number,
  currentPage: number,
  changePage: func,
}

Paginator.defaultProps = {
  totalPages: 0,
  currentPage: 0,
  changePage: () => null,
}

export default Paginator
