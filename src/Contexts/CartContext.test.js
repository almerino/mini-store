import { cartReducer, productReducer } from "./CartContext"

const product = {
  id: "id",
  title: "test",
  price: 0.25
}

describe("CartContext", () => {
  it("productReducer default", () => {
    expect(productReducer(product, { name: "test", quantity: 2 })).toEqual({
      id: "id",
      price: 0.25,
      quantity: 2,
      title: "test",
      total: 0.5
    })
  })

  it("productReducer papaye without promotion", () => {
    expect(productReducer(product, { name: "papaye", quantity: 2 })).toEqual({
      id: "id",
      price: 0.25,
      promotion: 0,
      quantity: 2,
      title: "test",
      total: 0.5
    })
  })

  it("productReducer papaye with promotion", () => {
    expect(productReducer(product, { name: "papaye", quantity: 5 })).toEqual({
      id: "id",
      price: 0.25,
      promotion: 0.25,
      quantity: 5,
      title: "test",
      total: 1
    })
  })

  it("cartReducer add", () => {
    expect(cartReducer({}, { type: "add", product })).toEqual({
      id: { id: "id", price: 0.25, quantity: 1, title: "test", total: 0.25 }
    })
  })

  it("cartReducer remove but still has one", () => {
    expect(
      cartReducer(
        {
          id: { id: "id", price: 0.25, quantity: 2, title: "test", total: 0.5 }
        },
        { type: "remove", product }
      )
    ).toEqual({
      id: { id: "id", price: 0.25, quantity: 1, title: "test", total: 0.25 }
    })
  })

  it("cartReducer remove but left 0", () => {
    expect(
      cartReducer(
        {
          id: { id: "id", price: 0.25, quantity: 1, title: "test", total: 0.5 }
        },
        { type: "remove", product }
      )
    ).toEqual({})
  })

  it("cartReducer empty", () => {
    expect(
      cartReducer(
        {
          id: { id: "id", price: 0.25, quantity: 10, title: "test", total: 2.5 }
        },
        { type: "empty", product }
      )
    ).toEqual({})
  })
})
