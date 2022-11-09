import {useContext} from 'react'
import {Link} from 'react-router-dom'
import ProductContext from '../context/ProductContext'
import OrderItem from '../components/OrderItem'




//load stripe//


function Cart() {
  //context//
  const productContext = useContext(ProductContext)
  const {currentCart, total, handleDelete} = productContext


  return (

    <>
    <div>
      <h1>Cart</h1>
      {currentCart.map(order => <OrderItem key={order.id} order={order} remove={handleDelete} />)}
    </div>
    <div>
      <div>
        <h1>Total: ${total}</h1>
      </div>
      <div>
        <Link to='/checkout'>
          <button>Checkout</button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Cart