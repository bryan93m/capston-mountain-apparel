

function OrderItem({details, remove}) {
  const {product, sizing, quantity, price, id} = details
  const {name, image} = product
  const {size} = sizing
  
  // set total price/
  
  const onClick = () => {
    remove(id)
  }

  return (
    <div className='border border-blue-500 px-5 py-1 text-slate-300 rounded-md p-5 bg-slate-900 bg-opacity-70 mx-60 my-5'>
      <div className='grid  justify-between'>
        <img src={image} alt={name} className='w-20 h-20'/>
      </div>
      <h2>{name}</h2>
      <h2>{size}</h2> 
      <h2>Quantity: {quantity}</h2>
      <h2>Price: {price}</h2>
      <span onClick={onClick} className="cursor-pointer text-blue-600 hover:scale-105 duration-300 underline ">remove</span>
    </div>
  )
}

export default OrderItem