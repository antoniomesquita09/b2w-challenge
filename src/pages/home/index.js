import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getAllPokemons } from 'states/modules/pokemons'

import Cart from 'components/cart'
import Header from 'components/header'
import PokemonCard from 'components/pokemonCard'

import styles from './index.module.scss'

const Home = () => {
  const { pokemonType } = useParams()
  const dispatch = useDispatch()
  const pokemons = useSelector(({ pokemons }) => pokemons.allPokemons)

  useEffect(() => {
    dispatch(getAllPokemons({ type: pokemonType }))
  }, [dispatch, pokemonType])

  return (
    <>
      <Header type={pokemonType} />
      <div className={styles.root}>
        <div>
          <ul>
            {pokemons.map(
              (pokemon, index) =>
                index < 10 && <PokemonCard key={pokemon.id} pokemon={pokemon} />
            )}
          </ul>
        </div>
        <Cart />
      </div>
    </>
  )
}

export default Home
