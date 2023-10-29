import React from 'react'

function Navbar() {
  return (
    <div className='h-[10%] w-full  bg-blue-400 flex'>
        <div className="h-full w-3/5 flex items-center justify-start pl-12  ">
            <i className="fa-solid fa-user text-lg text-white"></i>
            <h1 className='text-white font-f1 font-bold text-base ml-3 '>Muhammed Emin Ulusoy</h1>
        </div>
        <div className='h-full w-2/5  flex justify-around'>
            <div className='flex items-center text-white font-f1 font-bold'>
                <i className="fa-solid fa-phone text-lg"></i>
                <p className='ml-3 text-base'>+90 507 530 4850</p>
            </div>
            <div className='flex items-center text-white font-f1 font-bold'>
                <i className="fa-solid fa-envelope text-lg"></i>
                <p className='ml-3 text-base'>ulusoyeminn@gmail.com</p>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar