import React from 'react'
import Slider from './Slider'

function Featured() {
  return (
    <>
    <h2 className='p-2 my-6 text-xl text-center ' >FEATURED PRODUCTS</h2>
    <div className='container w-full m-auto mb-12 '>  
        <Slider/>
    </div>
    </>
    
    
  )
}

export default Featured