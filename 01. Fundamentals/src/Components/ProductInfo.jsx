import React from 'react'

const ProductInfo = () => {
  const product = {
    name: "Laptop",
    price: 1200,
    availability: "In stock"
  }
  return (
    <div>
      <h1>Product name: {product.name}</h1>
      <h1>Product Price: {product.price}</h1>
      <h1>p. AV:{product.availability}</h1>
    </div>
  )
}

export default ProductInfo