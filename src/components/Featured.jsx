import React from 'react'
import Slider from './Slider'

function Featured() {
  return (
    <>
    <h2 className='p-3 my-12 text-lg text-center shadow-b-sm bg-gray-50 md:text-2xl'>FEATURED PRODUCTS</h2>
    <div className='container w-full m-auto '>  
        <Slider/>
    </div>
    </>
    
    
  )
}

export default Featured