import React, { useContext } from "react"
import { Button, Modal, List, Image } from "semantic-ui-react"

import { CartContext } from "../../Contexts/CartContext"
import ProductLine from "../productLine/"

import "./index.css"

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext)
  const products = Object.values(cart)

  const total = products.length
    ? products.reduce((acc, p) => acc + p.total, 0)
    : 0

  return (
    <>
      <Modal
        size="mini"
        trigger={<Button>{`Voir mon ticket - ${total.toFixed(2)}€`}</Button>}
      >
        <Modal.Content image scrolling>
          <Modal.Description>
            <Image src="./logo.png" className="logo" />
            <h1 className="headerModal">** Bienvenue **</h1>
            <div className="ticketDate">
              {new Date().toLocaleDateString("fr-FR", {
                weekday: "long",
                day: "numeric",
                month: "long"
              })}
            </div>
            {products.length ? (
              <List verticalAlign="middle">
                {products.map(product => (
                  <ProductLine key={product.id} {...product} />
                ))}
              </List>
            ) : (
              <div>Aucun article</div>
            )}
            <div className="ticketLine total">
              <span>TOTAL</span>
              <span>{total.toFixed(2)}€</span>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
      <Button onClick={() => dispatch({ type: "empty" })}>
        Vider le panier
      </Button>
    </>
  )
}

export default Cart
