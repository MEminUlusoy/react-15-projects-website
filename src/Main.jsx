import React from 'react'
import data from "./data";

function Main() {
  return (
    <div className='h-[93%] w-full flex items-center justify-center'>
        <div className='h-full w-3/4 '>
            <div className='h-[10%] w-full flex justify-center items-end '>
                <h1 className='text-5xl font-f4 font-bold tracking-wide text-blue-400 '>React 15 Projects</h1>
            </div>
            <div className='h-[90%] w-full flex flex-wrap items-center justify-start py-10'>
                {
                    data.map((item) => {
                        const {id, url, image,title} = item
                        return(
                            <div className='group relative  h-[150px] w-[300px] ml-12  overflow-hidden  transition-all duration-300 ease-in rounded border-2 border-blue-100' key={id}>
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