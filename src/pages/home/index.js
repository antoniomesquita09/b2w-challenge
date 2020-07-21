import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllPokemons } from 'states/modules/pokemons'

import PokemonCard from 'components/pokemonCard'

import styles from './index.module.scss'

const Home = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector(({ pokemons }) => pokemons.allPokemons)

  useEffect(() => {
    dispatch(getAllPokemons())
  }, [dispatch])

  //   console.log(pokemons)

  return (
    <div className={styles.root}>
      <ul>
        {pokemons.map(
          (pokemon, index) =>
            index < 10 && (
              <PokemonCard key={pokemon.id} pokemon={pokemon} index={index} />
            )
        )}
      </ul>
    </div>
  )
}

export default Home
