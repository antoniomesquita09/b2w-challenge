import React from 'react'
import { string } from 'prop-types'

import colors from 'styles/colors'

import styles from './index.module.scss'

const Header = ({ type }) => {
  const getColor = () => {
    if (type === 'normal') {
      return { background: colors.grey, font: colors.white }
    }
    if (type === 'fire') {
      return { background: colors.red, font: colors.white }
    }
    if (type === 'water') {
      return { background: colors.babyBlue, font: colors.greyDarker }
    }
    if (type === 'dragon') {
      return { background: colors.redDragon, font: colors.white }
    }
    return { background: colors.grey, font: colors.white }
  }

  const currentColor = getColor()

  return (
    <div
      className={styles.root}
      style={{
        backgroundColor: currentColor.background,
        color: currentColor.font,
      }}
    >
      <h1>Pokémons</h1>
      <h2 className={styles.subTitle}>
        Tipo: <span>{type}</span>
      </h2>
    </div>
  )
}

Header.propTypes = {
  type: string,
}

Header.defaultProps = {
  type: 'normal',
}

export default Header
