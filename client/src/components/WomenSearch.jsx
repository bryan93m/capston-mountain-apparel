import {useContext} from 'react'
import ProductContext from '../context/ProductContext'

function WomenSearch() {
    const productContext = useContext(ProductContext)
    const {setSearch} = productContext


    return (
    <div className='max-w-md mx-auto mt-10 pt-24'>
      <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300 bg-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
          </div>

          <input
          className="peer h-full w-full bg-slate-600 outline-none text-sm text-gray-300 pr-2"
          type="text"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search" /> 
      </div>
    </div>

    )
}

export default WomenSearch