import {useState, useEffect} from 'react'
import axios from 'axios';
import ProductContext from './ProductContext';

function ProductState(props) {
  //state//
  const [mensProducts, setMensProducts] = useState([])
  const [womensProducts, setWomensProducts] = useState([])
  const [search, setSearch] = useState('')
  const [singleProduct, setSingleProduct] = useState([])
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
console.log(singleProduct)

    
  return (
    <ProductContext.Provider value={{
        displayWomensearch,
        setSearch,
        displayMensearch,
        getSingleProduct,
        singleProduct
    }}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState