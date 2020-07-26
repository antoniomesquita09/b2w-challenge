import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { object, number } from 'prop-types'

import { getSinglePokemon } from 'states/modules/pokemons'

import styles from './index.module.scss'

const PokemonCard = ({ pokemon, index }) => {
  const [pokemonImage, setPokemonImage] = useState('')
  const dispatch = useDispatch()
  const pokemonSprites = useSelector(
    ({ pokemons }) => pokemons.allPokemonsSprites
  )

  const { name, id } = pokemon

  useEffect(() => {
    dispatch(getSinglePokemon({ pokemonId: id }))
  }, [dispatch, id])

  useEffect(() => {
    if (pokemonSprites.length > 0) {
      //   console.log(pokemonSprites)
      setPokemonImage(pokemonSprites[index]?.front_default)
    }
  }, [pokemonSprites])

  return (
    <li className={styles.root}>
      <h1>{name}</h1>
      <span>{id}</span>
      {pokemonSprites && <img src={pokemonImage} alt={`pokemon ${name}`} />}
      <h2>
        Preço: <strong>R$15,00</strong>
      </h2>
    </li>
  )
}

PokemonCard.propTypes = {
  pokemon: object,
  index: number,
}

PokemonCard.defaultProps = {
  pokemon: {},
  index: 0,
}

export default PokemonCard
