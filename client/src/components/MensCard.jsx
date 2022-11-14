import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import ProductContext from '../context/ProductContext'


function MensCard({product, handleClick}) {
    const productContext = useContext(ProductContext)
    const {getSingleProduct} = productContext
    const {name, price, image} = product
    const navigate = useNavigate()

    const handleProductClick = () => {
        getSingleProduct(product.id)
        navigate(`/products/${product.id}`)
    }

    
  return (
    <div onClick={handleProductClick} className='border shadow-lg bg-slate-900 opacity-90 text-slate-300 rounded-lg hover:scale-105 border-blue-500 duration-300'>
        <img src={image} alt={name}
        className='w-full h-[200px] object-cover rounded-t-lg'
        />
        <div className='flex justify-between px-2 py-4'>
          <p className='font-bold'>{name}</p>
          <p>
            <span className='text-[#078bf7]'>{price}</span>
          </p>
        </div>
    </div>
  )
}

export default MensCard