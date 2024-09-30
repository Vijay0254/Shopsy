import React from 'react'
import product1Img from "../assets/hero1.png"
import product2Img from "../assets/product2.png"
import product3Img from "../assets/product3.png"
import product4Img from "../assets/product4.png"
import { FaStar } from "react-icons/fa";

const Products = () => {
    const productsItem = [
        {
            id: 1,
            img: product1Img,
            title: "Women Ethnic",
            color: "white",
            rating: 5
        },
        {
            id: 2,
            img: product2Img,
            title: "Women Western",
            color: "Red",
            rating: 4.5
        },
        {
            id: 3,
            img: product3Img,
            title: "Goggles",
            color: "Brown",
            rating: 4.7
        },
        {
            id: 4,
            img: product4Img,
            title: "Printed T-Shirt",
            color: "Yellow",
            rating: 4.4
        },
        {
            id: 5,
            img: product2Img,
            title: "Fashion T-Shirt",
            color: "Pink",
            rating: 4.5
        }
    ]
  return (
    
    <section className='pb-20'>
        <div className='text-center'>
            <h5 className='text-primary text-sm'>Top Selling Products for you</h5>
            <h1 className='font-bold text-3xl'>Products</h1>
            <p className='text-gray-400 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, consequatur.</p>
        </div>
        <div className='flex flex-wrap gap-10 justify-evenly pt-10'>
            {
                productsItem.map((element) =>(
                    <div key={element.id} className=' hover:scale-110 duration-300 cursor-pointer'>
                        <img src={element.img} alt="product" className='h-52 w-36 rounded-lg mb-4 object-cover' />
                        <h1 className='font-semibold '>{element.title}</h1>
                        <p className='text-sm'>{element.color}</p>
                        <span className='flex gap-1 items-center'><FaStar className='text-yellow-400' />{element.rating}</span>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Products