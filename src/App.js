import React from "react"
import { Container, Header } from "semantic-ui-react"
import { ApolloProvider } from "react-apollo"

import client from "./graphql/"
import { CartProvider } from "./Contexts/CartContext"
import Products from "./components/products/"
import Cart from "./components/cart/"

import "semantic-ui-css/semantic.min.css"

import "./App.css"

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Container className="app">
        <CartProvider>
          <Cart />
          <Header as="h2">Liste des produits</Header>
          <Products />
        </CartProvider>
      </Container>
    </ApolloProvider>
  )
}

export default App
