import React from 'react'
import data from "./data";

function Main() {
  return (
    <div className='h-[90%] xl:h-[93%] 2xl:h-[90%]  w-full flex items-center justify-center'>
        <div className='h-full w-full xl:w-3/4 '>
            <div className='h-[10%] xl:h-[10%]  w-full flex justify-center items-center sm:items-end md:items-center lg:items-center xl:items-center 2xl:items-end'>
                <h1 className='text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-f4 font-bold tracking-wide text-blue-400 '>React 15 Projects</h1>
            </div>
            <div className='h-[90%] xl:h-[90%] w-full flex flex-wrap items-center justify-center sm:justify-start md:justify-center lg:justify-center xl:justify-center pb-10 sm:pb-20 sm:pt-10 md:pt-0 md:pb-10 lg:pb-10 xl:pb-10  2xl:py-10 '>
                {
                    data.map((item) => {
                        const {id, url, image,title} = item
                        return(
                            <div className='group relative  h-[70px] w-[120px]  sm:h-[80px]  sm:w-[160px]  md:h-[110px]  md:w-[200px]  lg:h-[120px]  lg:w-[240px]   xl:h-[120px]  xl:w-[240px]    2xl:h-[150px]  2xl:w-[260px] ml-5 sm:ml-10  md:ml-5 lg:ml-10  mt-2 sm:mt-3  xl:mt-2  2xl:mt-0    overflow-hidden  transition-all duration-300 ease-in rounded border-2 border-blue-100' key={id}>
                                <a href={url}>
                                    <img className="h-full w-full absolute" src={image} alt="" />
                                    <div className='group-hover:top-[0%] absolute top-full left-0 w-full h-full opacity-90 bg-blue-500 transition-all duration-300 ease-in flex justify-center items-center '>
                                        <h1 className='text-white font-f1 text-lg font-bold'>{title}</h1>
                                    </div>
                                </a>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Main