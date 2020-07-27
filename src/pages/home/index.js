import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getAllPokemons } from 'states/modules/pokemons'

import Cart from 'components/cart'
import Header from 'components/header'
import PokemonCard from 'components/pokemonCard'
import Search from 'components/search'
import Paginator from 'components/paginator'

import styles from './index.module.scss'

const Home = () => {
  const { pokemonType } = useParams()
  const dispatch = useDispatch()
  const pokemons = useSelector(({ pokemons }) => pokemons.allPokemons)

  const [filter, setFilter] = useState('')
  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    dispatch(getAllPokemons({ type: pokemonType }))
  }, [dispatch, pokemonType])

  const pokemonFiltered = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filter.toLowerCase().trim())
  )

  const totalPages =
    pokemonFiltered.length % 20
      ? Math.floor(pokemonFiltered.length / 20) + 1
      : Math.floor(pokemonFiltered.length / 20)

  const previusPage = currentPage - 1

  return (
    <>
      <Header type={pokemonType} />
      <Search filter={filter} setFilter={setFilter} />
      <div className={styles.root}>
        <div style={{ opacity: modal && 0.6, pointerEvents: modal && 'none' }}>
          <ul>
            {pokemonFiltered.map(
              (pokemon, index) =>
                index < 20 * currentPage &&
                index >= previusPage * 20 && (
                  <PokemonCard key={pokemon.id} pokemon={pokemon} />
                )
            )}
          </ul>
          <Paginator
            totalPages={totalPages}
            currentPage={currentPage}
            changePage={setCurrentPage}
          />
        </div>
        <Cart modal={modal} setModal={setModal} />
      </div>
    </>
  )
}

export default Home
