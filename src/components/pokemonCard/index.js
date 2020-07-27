import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { object } from 'prop-types'
import { MdRemoveShoppingCart as RemoveIcon } from 'react-icons/md'

import { getSinglePokemon } from 'states/modules/pokemons'
import { addToCart, removeFromCart } from 'states/modules/cart'

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
    const isPokemonInCart =
      cart?.findIndex((pokemon) => pokemon.id === id) !== -1
    setPokemonInCart(isPokemonInCart)
  }, [cart, id])

  useEffect(() => {
    if (pokemonsDetails.length > 0) {
      setPokemonImage(
        pokemonsDetails.find((pokemon) => pokemon.pokemonId === id)?.sprites
          .front_default
      )
    }
  }, [pokemonsDetails, id])

  const handleAddToCart = () => {
    if (!isPokemonInCart) {
      dispatch(addToCart({ item: pokemon }))
    }
  }

  const handleRemoveFromCart = (e) => {
    e.stopPropagation()
    if (isPokemonInCart) {
      dispatch(removeFromCart({ pokemonId: id }))
      setPokemonInCart(false)
    }
  }

  return (
    <li
      className={styles.root}
      onClick={handleAddToCart}
      style={{
        backgroundColor: isPokemonInCart ? colors.greyLighter : colors.white,
        cursor: !isPokemonInCart && 'pointer',
      }}
    >
      <h1>{name}</h1>
      {pokemonsDetails && <img src={pokemonImage} alt={`pokemon ${name}`} />}
      <h2>
        Preço: <strong>R${price},00</strong>
      </h2>
      {isPokemonInCart && (
        <RemoveIcon
          color={colors.red}
          onClick={handleRemoveFromCart}
          className={styles.icon}
        />
      )}
    </li>
  )
}

PokemonCard.propTypes = {
  pokemon: object,
}

PokemonCard.defaultProps = {
  pokemon: {},
}

export default PokemonCard
