import React from 'react'

function Navbar() {
  return (
    <div className='h-[10%] xl:h-[7%] 2xl:h-[10%] w-full  bg-blue-400 flex'>
        <div className="h-full w-2/4 md:w-2/4 lg:w-3/5 flex items-center justify-start pl-2 sm:pl-12  ">
            <i className="fa-solid fa-user  text-white         text-xs       sm:text-sm  md:text-base  2xl:text-base"></i>
            <h1 className='text-white font-f1 font-bold ml-3 sm:ml-3   text-xs     sm:text-xs  md:text-sm    2xl:text-base'>Muhammed Emin Ulusoy</h1>
        </div>
        <div className='h-full w-2/4 md:w-2/4 lg:w-2/5  flex justify-around  sm:justify-between md:justify-around pr-2 sm:pr-5 '>
            <div className='hidden sm:flex items-center text-white font-f1 font-bold'>
                <i className="fa-solid fa-phone        text-xs    sm:text-sm  md:text-base  2xl:text-base"></i>
                <p className='sm:ml-2 md:ml-3 2xl:ml-3 text-xs  sm:text-xs  md:text-sm    2xl:text-base'>+90 507 530 4850</p>
            </div>
            <div className='flex items-center text-white font-f1 font-bold'>
                <i className="fa-solid fa-envelope     text-xs   sm:text-sm md:text-base  2xl:text-base"></i>
                <p className='ml-2 sm:ml-2 md:ml-3 2xl:ml-3 text-xs sm:text-xs md:text-sm    2xl:text-base'>ulusoyeminn@gmail.com</p>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar