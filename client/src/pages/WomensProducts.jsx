import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import ProductContext from '../context/ProductContext'
import WomenSearch from '../components/WomenSearch'

function WomensProducts() {
  const productContext = useContext(ProductContext)
  const {displayWomensearch, getSingleProduct} = productContext

  const navigate = useNavigate()

  


  return (
    <div className='bg-hero-image w-full sm:h-full lg:h-screen bg-cover bg-center'>
      <div className='pt-8'>
        <WomenSearch />
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 px-6'>
      {displayWomensearch.map((item, index) => (
        <div key={index} onClick={
          () => {
            getSingleProduct(item.id)
            navigate(`/products/${item.id}`)
          }
        } 
        className='border shadow-lg bg-slate-600 rounded-lg hover:scale-105 border-slate-400 duration-300'>
          <img src={item.image} alt={item.name}
          className='w-full h-[200px] object-cover rounded-t-lg'
          />
          <div className='flex justify-between px-2 py-4'>
            <p className='font-bold'>{item.name}</p>
            <p>
              <span className='text-[#078bf7]'>{item.price}</span>
            </p>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default WomensProducts