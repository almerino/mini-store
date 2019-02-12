import { gql } from "apollo-boost"

export default gql`
  {
    allProducts {
      id
      title
      description
      price
      file {
        id
        url
      }
    }
  }
`
