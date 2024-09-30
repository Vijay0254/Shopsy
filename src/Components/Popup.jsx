import React from 'react'

const Popup = ({orderPopup,setorderPopup}) => {
  return (
    <div>
        {orderPopup &&
            <div>
                <div className='h-screen w-screen items-center justify-center fixed flex top-0 left-0 right-0 bottom-0 bg-black/50 z-50 backdrop-blur-sm'>
                    <div className='flex flex-col items-center bg-white p-6 rounded-lg gap-5'>
                        <div className='flex justify-between gap-16'>
                            <h4 className='font-bold text-xl'>Order Now</h4>
                            <p className='font-bold text-2xl' onClick={() =>setorderPopup(!orderPopup)}>×</p>
                        </div>
                        <input type="text" placeholder='Name' className='rounded-full border-2 border-slate-300 py-1 px-2'/>
                        <input type="text" placeholder='Email' className='rounded-full border-2 border-slate-300 py-1 px-2'/>
                        <input type="text" placeholder='Address' className='rounded-full border-2 border-slate-300 py-1 px-2'/>
                        <button className='md:px-4 px-3 text-xs md:text-sm font-semibold md:font-bold py-2 text-white bg-[#fea928] rounded-full'>Order Now</button>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default Popup