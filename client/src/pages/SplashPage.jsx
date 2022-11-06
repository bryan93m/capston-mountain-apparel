import React from 'react'
import { Link } from 'react-router-dom'

function SplashPage() {
  return (
  <div className=' h-screen w-screen bg-no-repeat bg-cover bg-[url("https://media.istockphoto.com/photos/still-life-shot-of-exercise-equipment-in-a-gym-picture-id1320144030?b=1&k=20&m=1320144030&s=170667a&w=0&h=zRPUtgV7QbKzBYJ-VOHwNvKxRsLgWm4Z4eMi2KToJpc=")]'>
    <div className='pt-24 px-24 flex justify-center'>
      <Link to='/login'>
      <button type="button" 
      className="text-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl 
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
    className="text-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl 
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