import React from 'react'
import '../../styles/payment-method.css'
import PaystackPop from '@paystack/inline-js';
import { useState } from 'react';

const PaymentMethod = () => {

  const [email, setEmail] = useState("")
  const [amount, setAmount] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const paywithPaystack = (e) =>{
    e.preventDefault()
    
    const paystack = new PaystackPop()
    paystack.newTransaction({
      key:"pk_live_68d36f4580f14249a1a7fce2c22a9077d86df44e",
      amount: 3500000,
      firstname,
      lastname,
      email
    })
  }

  return <>

        <form id="paymentForm">

            <div className="form-group">
              <label htmlFor="email">Email Address</label><br />
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='input-pay' id="email-address" required />
            </div>

            <div className="form-group">
              <label htmlFor="amount">Amount</label><br />
              <input type="tel" value={amount} onChange={(e)=>setAmount(e.target.value)} className='input-pay' id="amount" required />
            </div>

            <div className="form-group">
              <label htmlFor="first-name">First Name</label><br />
              <input type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)} className='input-pay' id="first-name" />
            </div>

            <div className="form-group">
              <label htmlFor="last-name">Last Name</label><br />
              <input type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} className='input-pay' id="first-name" />
            </div><br />

            <div className="form-submit">
              <button className='btn-payment' type="submit" onClick={paywithPaystack}> Pay </button>
            </div>

        </form>
  </>
}

export default PaymentMethod
