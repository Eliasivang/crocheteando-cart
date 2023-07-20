import React from 'react'
import { BsFillCheckCircleFill } from "react-icons/bs";

function NotificationCart() {
  return ( 
    <div className='flex items-center p-2 m-2 bg-green-400 rounded '>
        <BsFillCheckCircleFill className='text-white' size={30}/>
        <p className='p-2 text-sm text-white'>Producto agregado al carrito correctamente</p>
    </div>
  )
}

export default NotificationCart