import subscribeImg from "../assets/subscribe.png"
import React from 'react'

const Subscribe = () => {
  return (
    <section className="subscribe-background text-center py-10 mb-20">
        <h1 className="text-white font-bold text-3xl pb-5">Get Notified About New Products</h1>
        <input type="text" placeholder="Enter your Email" className="py-2 px-3 w-2/3" />
    </section>
  )
}

export default Subscribe