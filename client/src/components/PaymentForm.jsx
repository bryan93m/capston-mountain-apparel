import React, { useEffect, useState, useContext } from "react"
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import ProductContext from "../context/ProductContext"



export default function PaymentForm() {
	const stripe = useStripe()
	const elements = useElements()
    const productContext = useContext(ProductContext)
    const {clearUserCart} = productContext


	const [message, setMessage] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {

		if (!stripe) {
			return
		}

		const clientSecret = new URLSearchParams(window.location.search).get(
			"payment_intent_client_secret"
		)

		if (!clientSecret) {
			return
		}

		stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
			switch (paymentIntent.status) {
				case "succeeded":
					setMessage("Payment succeeded!")
					break
				case "processing":
					setMessage("Your payment is processing.")
					break
				case "requires_payment_method":
					setMessage("Your payment was not successful, please try again.")
					break
				default:
					setMessage("Something went wrong.")
					break
			}
		})
	}, [stripe])

	const handleSubmit = async (e) => {
		e.preventDefault()

        fetch("/clearOrder", {
            method: "delete",
        })


		if (!stripe || !elements) {
			// Stripe.js has not yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return
		}

		setIsLoading(true)

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				// Make sure to change this to your payment completion page
				return_url: "http://localhost:4000/home",
			},
		})

		if (error.type === "card_error" || error.type === "validation_error") {
			setMessage(error.message)
		} else {
			setMessage("An unexpected error occured.")
		}

		setIsLoading(false)
	}

    const onClick = () => {
        clearUserCart()
    }


	return (
		<form id="payment-form" onSubmit={handleSubmit} className='flex flex-col bg-slate-300 bg-opacity-80 text-slate-600 rounded border border-blue-500 shadow-lg p-12 mt-12'>
			<PaymentElement id="payment-element" className="text-slate-300"/>
			<button disabled={isLoading || !stripe || !elements} id="submit" className=" h-12 w-64 border border-blue-500 mt-8  rounded font-semibold text-sm hover:scale-105 duration-300">
				<span id="button-text" className="cursor-pointer" onClick={onClick}>
					{isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
				</span>
			</button>
			{message && <div id="payment-message">{message}</div>}
		</form>
	)
}