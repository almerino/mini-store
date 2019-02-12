import React from "react"
import { shallow } from "enzyme"
import ProductLine from "./index"

const product = {
  id: "id",
  title: "test",
  price: 0.25,
  file: {
    url: "imageurl"
  },
  quantity: 4,
  total: 1,
  promotion: 0
}

describe("ProductLine", () => {
  it("should have the props", () => {
    const wrapper = shallow(<ProductLine {...product} />)
    expect(wrapper.find("Image").prop("src")).toBe(product.file.url)
    expect(wrapper.find("span.quantity").text()).toContain(
      `${product.quantity} x ${product.title}`
    )
    expect(wrapper.find("span.quantity").text()).not.toContain("promotion")
    expect(wrapper.html()).toContain(product.total)
  })

  it("should have promotion", () => {
    const wrapper = shallow(<ProductLine {...product} promotion={1} />)
    expect(wrapper.find("span.quantity").text()).toContain("promotion")
  })
})
