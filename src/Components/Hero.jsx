import React from 'react'
import hero1Img from "../assets/hero1.png"
import hero2Img from "../assets/hero2.png"
import hero3Img from "../assets/hero3.png"
import Slider from 'react-slick'


const Hero = ({orderPopup,setorderPopup}) => {
    const settings = {
        dots: false,
        arrow: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true
      };
    const imageList = [
        {
            id: 1,
            img: hero1Img,
            title: "Upto 50% off on all Men's Wear",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto magnam nam consectetur animi ipsum voluptatum quisquam dolore dolorum facilis eligendi."
        },
        {
            id: 2,
            img: hero2Img,
            title: "30% off on all Women's Wear",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto magnam nam consectetur animi ipsum voluptatum quisquam dolore dolorum facilis eligendi."
        },
        {
            id: 3,
            img: hero3Img,
            title: "70% off on all Products Sale",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto magnam nam consectetur animi ipsum voluptatum quisquam dolore dolorum facilis eligendi."
        }
    ]
  return (
    <section className='relative overflow-hidden dark:bg-gray-900 duration-500 dark:text-white min-h-[700px] md:min-h-[650px] bg-gray-100 flex justify-center items-center'>
        <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45'>
            {/* BACKGROUND IMAGE */}
        </div>
        <div className='container'>
            <Slider {...settings}>
                {imageList.map((element) =>(
                    <div key={element.id}>
                        <div className='grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-2'>
                            <div className='px-12 flex flex-col gap-5 justify-center'>
                                <h1 className='md:text-5xl text-3xl font-bold'>{element.title}</h1>
                                <p className='text-sm md:text-base'>{element.description}</p>
                                <div>
                                    <button className='md:px-4 px-3 text-xs md:text-sm font-semibold md:font-bold py-2 hover:scale-105 duration-300 text-white bg-[#fea928] rounded-full' onClick={() =>setorderPopup(!orderPopup)}>Order Now</button>
                                </div>
                            </div>
                            <div>
                                <img src={element.img} alt="hero" className='object-contain w-[200px] h-[200px] md:h-[400px] md:w-[400px] scale-125 mx-auto' />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </section>
  )
}

export default Hero
