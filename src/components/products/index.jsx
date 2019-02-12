import React from "react"
import { Query } from "react-apollo"
import { Grid, Loader } from "semantic-ui-react"

import { getProductsQuery } from "../../graphql/queries/"
import Product from "../product/"

const Products = () => (
  <Query query={getProductsQuery}>
    {({ loading, error, data }) => {
      if (loading) {
        return <Loader inverted content="Loading" />
      }

      if (error) {
        return `Error! ${error.message}`
      }

      const { allProducts } = data

      return (
        <Grid relaxed columns={4}>
          <Grid.Row stretched>
            {allProducts.map(product => (
              <Grid.Column key={product.id}>
                <Product {...product} />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      )
    }}
  </Query>
)

export default Products
