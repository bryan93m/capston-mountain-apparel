import { useContext } from 'react'
import MensCard from '../components/MensCard'
import ProductContext from '../context/ProductContext'
import MenSeach from '../components/MenSeachBar'

function MensProducts() {
  const productContext = useContext(ProductContext)
  const {displayMensearch} = productContext


  
  const mensProducts = displayMensearch.map(product => {
    return <MensCard key={product.id} product={product}/>
  })

  return (
    <div className='bg-hero-image w-full sm:h-full lg:h-screen bg-cover bg-center'>
      <div className='pt-8'>
        <MenSeach />
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 px-6'>
        {mensProducts}
      </div>
    
    </div>
  )
}

export default MensProducts