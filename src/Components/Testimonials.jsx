import React from 'react'
import Slider from "react-slick";
const testiItems = [
    {
        id: 1,
        img: "https://picsum.photos/200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veritatis!",
        name: "Sachin Tendulkar"
    },
    {
        id: 2,
        img: "https://picsum.photos/200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veritatis!",
        name: "Victor"
    },
    {
        id: 3,
        img: "https://picsum.photos/200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veritatis!",
        name: "Satya Nadella"
    },
    {
        id: 4,
        img: "https://picsum.photos/200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veritatis!",
        name: "Virat Kohli"
    }
]

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 1500,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    
  return (
    <section className="pb-20">
        <div className='text-center pb-16'>
            <h5 className='text-primary text-sm'>What our Customers are saying</h5>
            <h1 className='font-bold text-3xl'>Testimonials</h1>
            <p className='text-gray-400 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, consequatur.</p>
        </div>
        <div className='flex justify-center'>
            <div className="container md:px-16 md:pl-20">
                <Slider {...settings}>
                    {
                        testiItems.map((element) =>(
                            <div key={element.id} className='pb-4 md:pb-12'>
                                <div className="shadow-xl relative p-2 md:w-[350px]">
                                    <img src={element.img} alt="testimonials" className="mb-5 rounded-full size-[60px]" />
                                    <p className="text-sm ">{element.description}</p>
                                    <h1 className="pb-7 font-bold text-xl pt-3">{element.name}</h1>
                                    <p className='absolute text-[130px] -top-8 right-4 text-gray-300'>❞</p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    </section>
  )
}

export default Testimonials
