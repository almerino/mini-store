import React, { useContext } from "react"
import { Card, Icon, Image, Button } from "semantic-ui-react"
import idx from "idx"

import { CartContext } from "../../Contexts/CartContext"
import "./index.css"

const ProductCard = props => {
  const { id, title, description, price, file: { url } } = props
  const { cart, dispatch } = useContext(CartContext)
  const quantity = idx(cart, _ => _[id].quantity)

  return (
    <Card>
      <Image src={url} className="productImage" />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{`${price.toFixed(2)} €`}</span>
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra className="actionButtonProduct">
        <Button inverted color="blue" animated="vertical">
          <Button.Content
            hidden
            onClick={() => dispatch({ type: "add", product: props })}
          >
            Ajouter
          </Button.Content>
          <Button.Content visible>
            <Icon name="shop" />
          </Button.Content>
        </Button>
        {quantity && (
          <Button
            inverted
            color="blue"
            hidden
            onClick={() => dispatch({ type: "remove", product: props })}
          >
            {`Retirer 1 (Qté ${quantity})`}
          </Button>
        )}
      </Card.Content>
    </Card>
  )
}
export default ProductCard
