import React from 'react'
import { animate, motion } from "framer-motion";
import { BsFillBagCheckFill } from "react-icons/bs";

function NotificationCart() {
  return ( 
    <motion.div initial = {{x:-100, opacity:0 }} animate = {{x:0, opacity:1}}  className='fixed bottom-0 right-0 flex items-center p-2 m-2 bg-green-300 rounded '>
        <BsFillBagCheckFill size={30}/>
        <p className='p-2 text-sm'>Producto agregado al carrito correctamente</p>
    </motion.div>
  )
}

export default NotificationCart