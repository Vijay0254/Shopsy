import React, { useState } from 'react'
import lightThemeImg from "../assets/lightTheme.png"
import darkThemeImg from "../assets/darkTheme.png"

const Darkmode = () => {
    const [theme,settheme] = useState(false)
    const element = document.documentElement
    function changeDarkTheme(){
        settheme(!theme)
        element.classList.add("dark")
    }
    function changeLightTheme(){
        settheme(!theme)
        element.classList.remove("dark")
    }
  return (
   <section>
        <div onClick={changeDarkTheme}>
            <img src={lightThemeImg} alt="light" className='md:h-6 h-5 md:w-11 absolute top-4 md:top-5 cursor-pointer' />
        </div>
        {theme && <div onClick={changeLightTheme}>
            <img src={darkThemeImg} alt="dark" className='md:h-6 h-5 md:w-11 absolute top-4 md:top-5 cursor-pointer' />
        </div>}
    </section>
  )
}

export default Darkmode