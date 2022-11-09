import {useState, useEffect} from 'react'
import axios from 'axios';
import ProductContext from './ProductContext';

function ProductState(props) {
  //state//
  const [mensProducts, setMensProducts] = useState([])
  const [womensProducts, setWomensProducts] = useState([])
  const [search, setSearch] = useState('')
  const [singleProduct, setSingleProduct] = useState([])
  const [productOrders, setProductOrders] = useState([])
  const [order, setOrder] = useState({})
  const [total, setTotal] = useState(0)




 //get products//
  useEffect(() => {
      axios.get('/products')
        .then(res => {
            setMensProducts(res.data.filter(product => product.gender === 'male'))
            setWomensProducts(res.data.filter(product => product.gender === 'female'))
        })
        .catch(err => console.log(err))
  }, [])
// set filtered search for men and women//
 const displayMensearch = mensProducts.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))

 const displayWomensearch = womensProducts.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
//get single product//

const getSingleProduct = (id) => {
  axios.get(`/products/${id}`)
    .then(res => setSingleProduct(res.data))
}


//add to cart//
const currentCart = productOrders.map(order => order)

const handleAddToCart = (product, sizingId, quantity, total) => {
 fetch('/order_details', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      order_id: order.id,
      product_id: product.id,
      sizing_id: parseInt(sizingId),
      quantity: quantity,
      price: total
 })
})
  .then(res => res.json())
  .then(data => {
    setProductOrders([...productOrders, data])
    setOrder(data.order)
  })
}

// GET order details //
useEffect(() => {
  axios.get('/order_details')
    .then(res => {
      setProductOrders(res.data)
      setTotal(res.data.reduce((acc, order) => acc + order.price, 0))
    })
}, [])

//delete from cart//

const handleDelete = (id) => {
  axios.delete(`/order_details/${id}`)
    .then(res => {
      setProductOrders(res.data)
      setTotal(res.data.reduce((acc, order) => acc + order.price, 0))
    })
    .catch(err => console.log(err))
}
 
  const clearUserCart = () => {
    fetch('/clearCart', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <ProductContext.Provider value={{
        displayWomensearch,
        setSearch,
        displayMensearch,
        getSingleProduct,
        singleProduct,
        handleAddToCart,
        currentCart,
        handleDelete,
        setTotal,
        clearUserCart,
        total
    }}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState