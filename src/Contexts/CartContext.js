import React, { useReducer } from "react"
import idx from "idx"

const initialState = {}

const CartContext = React.createContext(initialState)

const productReducer = (state, { name, quantity }) => {
  switch (name.toLowerCase()) {
    case "papaye": {
      const promotion = Math.floor(quantity / 3) * state.price
      return {
        ...state,
        total: quantity * state.price - promotion,
        quantity,
        promotion
      }
    }
    default:
      return { ...state, quantity, total: quantity * state.price }
  }
}

const cartReducer = (state, { type, product }) => {
  const id = idx(product, _ => product.id)
  const n = idx(state, _ => _[id].quantity) || 0

  switch (type) {
    case "add":
      return {
        ...state,
        [id]: productReducer(product, {
          name: product.title,
          quantity: n + 1
        })
      }
    case "remove":
      const newState = { ...state }
      delete newState[id]
      return n - 1 > 0
        ? {
            ...state,
            [id]: productReducer(product, {
              name: product.title,
              quantity: n - 1
            })
          }
        : newState
    case "empty":
      return initialState
    default:
      throw new Error()
  }
}

function CartProvider(props) {
  const [cart, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider, productReducer, cartReducer }
