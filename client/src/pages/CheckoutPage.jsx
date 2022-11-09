import {useContext, useState, useEffect} from 'react'
import ProductContext from '../context/ProductContext'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import PaymentForm from '../components/PaymentForm'
import axios from 'axios'


//load stripe//
const stripePromise = loadStripe("pk_test_51M1e5VEQvqjaEBjAfLzPWneImyOIhTguHdl01GZ62EPFa9OrBwrivalSxzZPfBFHGCAquYvqiBozPJAng6CFm29o00ph9mMf1Q");

function Checkout() {
  //context//
  const productContext = useContext(ProductContext)
  const {currentCart, total} = productContext
  //state//
  const [clientSecret, setClientSecret] = useState('')
  //useEffect//
  useEffect(() => {
    axios.post('/charges', {
      amount: parseInt(`${total}` * 100),
      currency: 'usd'
    })
    .then(res => {
      setClientSecret(res.data.clientSecret)
    })
  }, [currentCart])

  const appearance = {
    theme: 'stripe'
  }
  const options = {
    clientSecret,
    appearance,
  }


  return(
    <div className='flex flex-col items-center justify-center bg-hero-image w-screen h-screen sm:h-screen lg:h-screen bg-cover bg-center text-slate-500'>
      {clientSecret && (
      <Elements options={options} stripe={stripePromise} >
        <PaymentForm />
      </Elements>
      )}
    </div>
  )
}

export default Checkout