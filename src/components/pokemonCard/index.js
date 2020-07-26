import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { object, number } from 'prop-types'

import { getSinglePokemon } from 'states/modules/pokemons'
import { addToCart } from 'states/modules/cart'

import colors from 'styles/colors'

import styles from './index.module.scss'

const PokemonCard = ({ pokemon }) => {
  const [pokemonImage, setPokemonImage] = useState('')
  const [isPokemonInCart, setPokemonInCart] = useState(false)
  const dispatch = useDispatch()
  const { cart } = useSelector(({ cart }) => cart)
  const pokemonsDetails = useSelector(
    ({ pokemons }) => pokemons.allPokemonsSprites
  )

  const { name, id, price } = pokemon

  useEffect(() => {
    dispatch(getSinglePokemon({ pokemonId: id }))
  }, [dispatch, id])

  useEffect(() => {
    if (cart.length > 0) {
      console.log(cart)
      const isPokemonInCart =
        cart.findIndex((pokemon) => pokemon.id === id) !== -1
      setPokemonInCart(isPokemonInCart)
    }
  }, [cart, id])

  useEffect(() => {
    if (pokemonsDetails.length > 0) {
      setPokemonImage(
        pokemonsDetails.find((pokemon) => pokemon.pokemonId === id)?.sprites
          .front_default
      )
    }
  }, [pokemonsDetails])

  const handleAddToCart = () => {
    dispatch(addToCart({ item: pokemon }))
  }

  console.log(isPokemonInCart)

  return (
    <li
      className={styles.root}
      onClick={handleAddToCart}
      style={{
        backgroundColor: isPokemonInCart ? colors.greyLighter : colors.white,
      }}
    >
      <h1>{name}</h1>
      <span>{id}</span>
      {pokemonsDetails && <img src={pokemonImage} alt={`pokemon ${name}`} />}
      <h2>
        Preço: <strong>R${price},00</strong>
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
