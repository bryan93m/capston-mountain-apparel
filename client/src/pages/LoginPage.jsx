import {useState, useContext} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import UserContext from '../context/UserContext';
import axios from 'axios';

function Login() {
  let navigate = useNavigate();
  const userContext = useContext(UserContext);
  const {updateUser} = userContext;
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData;

  const onChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  function onSubmit(e){
    e.preventDefault()
    const user = {
      email,
      password
    }
    axios.post('/login', user)
    .then(res => {
      updateUser(res.data)
      navigate('/home')
    })
  }

























  return (
    <div className='flex flex-col items-center justify-center bg-hero-image w-screen h-screen sm:h-screen lg:h-screen bg-cover bg-center text-slate-500'>
      <h1 className='font-bold text-2xl'>LOGIN</h1>
      <form onSubmit={onSubmit} className='flex flex-col bg-slate-600 rounded shadow-lg p-12 mt-12'>
        <label 
        className='font-semibold text-xs text-slate-300' 
        htmlFor='email'>
          Email
        </label>
        <input 
        type='text' 
        name='email'
        value={email}
        onChange={onChange}
        // value={email}
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
        onChange={onChange}
        // value={password}
        className='flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2'
        />
        <button 
        type='submit' 
        className="flex items-center justify-center h-12 px-6 w-64 border border-blue-500 mt-8 rounded font-semibold text-sm text-blue-100 hover:scale-105 duration-300">
          Login
        </button>
        <div className="flex mt-6 justify-center text-xs">
          <span className="mx-2 text-gray-300">Don't have an account?</span>
          <Link to='/register' className="text-blue-600 hover:underline scale-105 duration-300">Register</Link>
        </div>
      </form>
    </div>

  )
}

export default Login