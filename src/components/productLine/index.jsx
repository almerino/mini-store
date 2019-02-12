import React from "react"
import { List, Image } from "semantic-ui-react"

import "./index.css"

const ProductLine = ({ file: { url }, title, quantity, total, promotion }) => (
  <List.Item className="productItem">
    <div className="ticketLine">
      <div>
        <Image avatar src={url} />
        <span className="quantity">
          {`${quantity} x ${title} ${promotion ? "(promotion)" : ""}`}
        </span>
      </div>
      <div>{total.toFixed(2)}€</div>
    </div>
  </List.Item>
)

export default ProductLine
