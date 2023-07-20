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
    className='absolute right-0 w-full bg-white z-49 drop-shadow-xl md:w-2/6 '>
        <ul>
            {cartItem.map(item=>(
                <div className='flex justify-between p-3 m-2 border-b'>
                <li className='text-black '><b>{item.tittle}</b></li>       
                <li className='text-black '>${item.price}</li>
                <li className='text-black '>x{item.quantity}</li>
                <AiOutlineDelete className='text-violet-300 hover:pointer hover:text-violet-400' size={25} onClick={()=>{deleteItem(item.id)}} >X</AiOutlineDelete>  
              </div>  
          
        ))}
      </ul>
    
      {total !== 0 && <p className='p-3 font-medium '><b>Total:</b> ${total}</p>}
      {total===0 && <p className='p-3 text-center text-black '>No hay productos en el carrito</p>}
      <button onClick={()=> deleteItems()} className='w-full h-10 font-semibold bg-violet-300 hover:bg-violet-400'>Vaciar carrito</button>
      </div>
    
    
    
  )
}




export default Cart