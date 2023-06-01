import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import {AiOutlineDelete} from 'react-icons/ai'
import { motion } from 'framer-motion';


function Cart() {
  
  const {cartItem,setCartItem, total,setTotal} = useContext(CartContext);
  const deleteItems = () => {
      setCartItem([])
      setTotal(0) 
    }

    const deleteItem = (id) => {
        const newCart = cartItem.filter(item => item.id !== id);
        setCartItem(newCart);
        setTotal(total - cartItem.find(item => item.id === id).price * cartItem.find(item => item.id === id).quantity);
   
    }


  return (
    <motion.div 
    initial={{y:-50}} 
    animate={{
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
    }} 
    className='absolute right-0 z-50 w-full my-2 bg-white drop-shadow-xl md:w-2/6 rounded-xl '>
        <ul>
            {cartItem.map(item=>(
                <div className='flex justify-between p-3 m-2 border-b'>
                <li className='text-black '>{item.tittle}</li>       
                <li className='text-black '>${item.price}</li>
                <li className='text-black '>x{item.quantity}</li>
                <AiOutlineDelete className='text-violet-300 hover:pointer hover:text-violet-400' size={25} onClick={()=>{deleteItem(item.id)}} >X</AiOutlineDelete>  
              </div>  
          
        ))}
      </ul>
    
      {total!=0 && <p className='p-3 font-medium '>Total: ${total}</p>}
      {total==0 && <p className='p-3 text-center text-black '>No hay productos en el carrito</p>}
      <button onClick={()=> deleteItems()} className='w-full h-10 font-semibold bg-violet-300 hover:bg-violet-400'>Vaciar carrito</button>
    </motion.div>
  )
}




export default Cart