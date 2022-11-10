import React from 'react'
import { Link } from 'react-router-dom'

function SplashPage() {
  return (
    <div className='flex flex-col items-center justify-center bg-hero-image w-screen h-screen sm:h-screen lg:h-screen bg-cover bg-center text-slate-500'>
    <div className='pt-24 px-24 flex justify-center'>
      <Link to='/login'>
      <button type="button" 
      className="text-black bg-gradient-to-r from-cyan-500 hover:scale-105 duration-300 hover:bg-gradient-to-bl
      focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg 
      text-md px-5 py-2.5 mr-2 mt-20 text-center"
      >
        Login
      </button>
      </Link>
    </div>
  <div className=' pb-24 pt-10 px-24 flex justify-center'>
    <Link to='/register'>
    <button type="button" 
    className="text-black bg-gradient-to-r from-cyan-500 hover:scale-105 duration-300 hover:bg-gradient-to-bl
    focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg 
    text-md px-5 py-2.5 text-center"
    >
      Register
    </button>
    </Link>
  </div>

  </div>
  )
}

export default SplashPage