import React from 'react'
import { string, func } from 'prop-types'

import styles from './index.module.scss'

const Search = ({ filter, setFilter }) => {
  return (
    <div className={styles.root}>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder='Procure o seu pokemon pelo nome'
        className={styles.input}
      />
    </div>
  )
}

Search.propTypes = {
  filter: string,
  setFilter: func,
}

Search.defaultProps = {
  filter: '',
  setFilter: () => null,
}

export default Search
