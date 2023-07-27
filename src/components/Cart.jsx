import React, { useContext, useEffect} from 'react'
import { CartContext } from '../context/CartContext';
import {AiOutlineDelete} from 'react-icons/ai'



function Cart() {
const {cartItem,setCartItem, total,setTotal,cartLS} = useContext(CartContext);


 
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
    <div
    className='absolute right-0 z-50 w-full bg-white drop-shadow-xl md:w-2/6 '>
        <ul className='overflow-scroll max-h-96'>
            {cartItem.map(item=>(
                <div className='flex justify-between p-3 m-2 border-b'>
                <li className='text-black '><b>{item.tittle}</b></li>
                <li className='font-bold text-black '>x{item.quantity}</li>     
                <div className='flex gap-4'>       
                <li className='font-bold text-black '>${item.price}</li>
                
                
                <AiOutlineDelete className='text-violet-300 hover:pointer hover:text-violet-400' size={25} onClick={()=>{deleteItem(item.id)}} >X</AiOutlineDelete>  
                </div>
              </div>  
          
        ))}
      </ul>
    
      {total !== 0 &&
      <div className='flex items-center justify-between p-3 mx-4 '>
          <p 
          className='text-lg'>
          <b>Total:</b>
          </p> 
          <p className='text-lg font-bold'>
          ${total}
          </p>
      </div> }
      {total===0 && <p className='p-3 text-center text-black '>No hay productos en el carrito</p>}
      <button onClick={()=> deleteItems()} className='w-full h-10 font-semibold bg-violet-300 hover:bg-violet-400'>Vaciar carrito</button>
      </div>
    
    
    
  )
}




export default Cart