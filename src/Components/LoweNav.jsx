import { IoMdArrowDropdown } from "react-icons/io";
import React, { useState } from 'react'

const LoweNav = () => {
    const navItems = [
        {
            id: 1,
            name: "Home",
            link: "/"
        },
        {
            id: 2,
            name: "Top Rated",
            link: "#topRated"
        },
        {
            id: 3,
            name: "Kids Wear",
            link: "#kids"
        },
        {
            id: 4,
            name: "Mens Wear",
            link: "#mens"
        },
        {
            id: 5,
            name: "Electronics",
            link: "#electronics"
        },
    ]
    const dropDownItems = [
        {
            id: 1,
            name: "Trending Products",
            link: "/"
        },
        {
            id: 2,
            name: "Best Selling",
            link: "/"
        },
        {
            id: 3,
            name: "Top Rated",
            link: "/"
        }
    ]
    const [dropdown,setdropDown] = useState(false)
  return (
    <nav className='md:flex hidden items-center flex-col relative justify-center py-4 shadow-md shadow-gray-400'>
        <ul className='flex gap-12'>
            {
                navItems.map((element) =>(
                    <li key={element.id} className='cursor-pointer hover:text-[#fea928]'>
                        <a href={element.link}>{element.name}</a>
                    </li>
                ))
            }
            <li className="flex items-center gap-1">
                <a href="#" className='cursor-pointer hover:text-[#fea928]'>Trending Products</a>
                <IoMdArrowDropdown className="pt-1 duration-300 transition-all cursor-pointer size-5" onClick={() =>setdropDown(!dropdown)}/>
            </li>
        </ul>
        {dropdown && <ul className="absolute right-72 top-12 flex flex-col z-10 gap-2 rounded-lg shadow-md p-4">
            {
                dropDownItems.map((element) =>(
                    <li className="hover:bg-gray-200 text-black px-2 py-1 cursor-pointer" key={element.id}>
                        <a href={element.link}>{element.name}</a>
                    </li>
                ))
            }
        </ul>}
    </nav>
  )
}

export default LoweNav