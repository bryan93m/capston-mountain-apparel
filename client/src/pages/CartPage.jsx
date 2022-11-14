import {useContext} from 'react'
import {Link} from 'react-router-dom'
import ProductContext from '../context/ProductContext'
import OrderItem from '../components/OrderItem'




//load stripe//


function Cart() {
  
  //context//
  const productContext = useContext(ProductContext)
  const {productOrders, total, clearCartItem} = productContext

  //get total price//

  

  const orderItems = Object.keys(productOrders).map((key) => {
    return <OrderItem key={key} index={key} details={productOrders[key]} remove={clearCartItem}/>
  })

  return (

    <div className='flex flex-col items-center justify-center bg-hero-image w-screen h-screen sm:h-screen lg:h-screen bg-cover bg-center' >
      <div className='flex flex-col justify-center items-center text-blue-600'>
        <h1 className='block font-bold text-4xl'>CART</h1>
      </div>
    <div className=''>
      {orderItems}
    </div>
    <div>
      <div className='font-semibold items-center text-slate-300 text-s mt-3'>
        <h1>Total: ${total}</h1>
      </div>
      <div>
        <Link to='/checkout' >
          <button className="flex items-center justify-center h-12 px-6 w-64 border bg-slate-900 opacity-80 border-blue-500 mt-8 rounded font-semibold text-sm text-blue-500 hover:scale-105 duration-300">Checkout</button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Cart