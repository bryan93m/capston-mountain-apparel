import {useState, useContext} from 'react'
import ProductContext from '../context/ProductContext'


function SingleProductPage() {
  const [quantity, setQuantity] = useState(0)
  const [sizing, setSizing] = useState(0)
  const [total, setTotal] = useState(0)

  const productContext = useContext(ProductContext)

  const {singleProduct, handleAddToCart} = productContext
  const {name, price, description, image, sizings} = singleProduct

  const onClick = (e) => {
    e.preventDefault()
    handleAddToCart(singleProduct, sizing, quantity, total)
  }

  const handleSizing = (e) => {
    setSizing(e.target.value)
  }
  
  
  const handleQuantityAndTotal = (e) => {
    setQuantity(e.target.value)
    setTotal(e.target.value * price)
  }


  return (
  <div className='bg-hero-image w-full sm:h-screen lg:h-screen bg-cover bg-center'>
    <div className='w-3/5 m-auto pt-24'>
      <div className='flex items-cent my-10 space-x-10'>
        <div className='product-img w-[500px] h-[500px]'>
          <img className='w-full h-full object-cover rounded-md' src={image} alt={name} />
        </div>
        <div className='product-info w-1/2 space-y-1-'>
          <h1 className='text-4xl font-bold text-slate-600'>{name}</h1>
          <h2 className='text-xl font-semibold text-blue-500'>{price}</h2>
          <p className='text-blue-500 font-semibold'>{description}</p>
        <div className='flex items-center space-x-2 pt-5'>
        <select onChange={handleSizing} className='bg-slate-600 text-slate-300'>
          <option value="select">Select Size</option>
          {sizings?.map((item, index) => (
            <option className='text-slate-300' key={index} value={item.id}>{item.size}</option>
          ))}
        </select>
        </div>
        <input onChange={handleQuantityAndTotal} type='number' placeholder='0' className='bg-slate-600 mt-5 outline-0 w-16 px-2 border-2 text-slate-300 border-gray-800 cursor-pointer'/>
          <div className='btns space-x-5 pt-5'>
            <button onClick={onClick} className='border border-blue-500 text-blue-500 bg-slate-900 opacity-80 font-semibold px-5 py-2 hover:scale-105 duration-300'>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SingleProductPage