import {useState, useContext} from 'react'
import axios from 'axios';
import UserContext from '../context/UserContext';

function UserPage() {
    //context//
    const userContext = useContext(UserContext)
    const {updateUser} = userContext
    //state//
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
      })

    const {first_name, last_name, email, password} = formData

    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
      }


    const onSubmit = (e) => {
        e.preventDefault()
        const user = {
            first_name,
            last_name,
            email,
            password
          }
        axios.patch('/updateUser', user)
        .then(res => {
            updateUser(res.data)
        })
        setFormData({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        })

    }

  return (
    <div className='flex flex-col items-center justify-center bg-hero-image w-screen h-screen sm:h-screen lg:h-screen bg-cover bg-center text-slate-500'>
    <h1 className='font-bold text-2xl'>UPDATE ACCOUNT</h1>
    <form onSubmit={onSubmit} className='flex flex-col bg-slate-900 opacity-80 rounded shadow-lg p-12 mt-12'>
      <label 
      className='font-semibold text-xs text-slate-300' 
      htmlFor='firstName'>
        First Name
      </label>
      <input 
      type='text' 
      name='first_name'
      value={first_name}
      onChange={handleChange} 
      className='flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2'
      />
      <label 
      className='font-semibold text-xs text-slate-300' 
      htmlFor='lastName'>
        Last Name
      </label>
      <input 
      type='text' 
      name='last_name'
      value={last_name}
      onChange={handleChange} 
      className='flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2'
      />
      <label 
      className='font-semibold text-xs text-slate-300' 
      htmlFor='email'>
        Email
      </label>
      <input 
      type='text' 
      name='email'
      value={email}
      onChange={handleChange}
      className='flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2'
      />
      <label 
      className='font-semibold text-slate-300 text-xs mt-3' 
      htmlFor='password'>
        Password
      </label>
      <input 
      type='password' 
      name='password'
      value={password}
      onChange={handleChange}
      className='flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2'
      />
      <button type='submit' className="flex items-center justify-center h-12 px-6 w-64 border border-blue-500 mt-8 rounded font-semibold text-sm text-blue-100 hover:scale-105 duration-300">Update</button>
    </form>
  </div>

  )
}

export default UserPage