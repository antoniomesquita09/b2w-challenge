import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loader from 'react-loader-spinner'

import { getAllPokemons } from 'states/modules/pokemons'

import Cart from 'components/cart'
import Header from 'components/header'
import PokemonCard from 'components/pokemonCard'

import styles from './index.module.scss'

const Home = () => {
  const { pokemonType } = useParams()
  const dispatch = useDispatch()
  const pokemons = useSelector(({ pokemons }) => pokemons.allPokemons)

  const [currentPage, setCurrentPage] = useState(1)

  const totalPages =
    pokemons.length % 10
      ? Math.floor(pokemons.length / 10) + 1
      : Math.floor(pokemons.length / 10)

  useEffect(() => {
    dispatch(getAllPokemons({ type: pokemonType }))
  }, [dispatch, pokemonType])

  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentPage(currentPage + 1)
        }
      },
      { threshold: 1 }
    )
  )

  const infiniteRef = useCallback(
    (node) => {
      if (node !== null) {
        observer.current.observe(node)
      }
    },
    [observer]
  )

  let loadNewPage = totalPages > 1 && totalPages > currentPage

  return (
    <>
      <Header type={pokemonType} />
      <div className={styles.root}>
        <div>
          <ul>
            {pokemons.map(
              (pokemon, index) => (
                //   index < currentPage * 10 && (
                <PokemonCard key={pokemon.id} pokemon={pokemon} index={index} />
              )
              //   )
            )}
          </ul>
          {loadNewPage && (
            <div className='loader-block' ref={infiniteRef}>
              <Loader
                type='Oval'
                color='#7d40e7'
                height={20}
                width={20}
                timeout={3000} //3 secs
              />
            </div>
          )}
        </div>
        <Cart />
      </div>
    </>
  )
}

export default Home
