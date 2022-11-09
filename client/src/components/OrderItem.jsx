import React from 'react'

function OrderItem({order, remove}) {

  const {product, sizing, quantity, price} = order
  const onClick = () => {
    remove(order.id)
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <h2>{sizing.size}</h2> 
      <h2>{quantity}</h2>
      <h2>{price}</h2>
      <span onClick={onClick} className="cursor-pointer">remove</span>
    </div>
  )
}

export default OrderItem