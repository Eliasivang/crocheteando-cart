import React, { useState,useEffect } from 'react'
import logo from "../assets/cr.png"
import { AnimatePresence, motion } from 'framer-motion';
import { BsHandbagFill} from 'react-icons/bs';
// import NavList from './NavList';
import Cart from "../components/Cart";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Header() {
const {cartItem,setCartItem} = useContext(CartContext);
const [open, setOpen] = useState(false);
const [openCart, setOpenCart] = useState(false);
const cartLength = cartItem.reduce((acc, item) => acc + item.quantity, 0);




// const openedMenu = () => {
//   if(open){
//     setOpen(false)
//     setOpenCart(false)
    
//   }else {
//     setOpen(true)
//     setOpenCart(false)
//   }
// }

const openedCart = () => {
  if(openCart){
    setOpenCart(false)
    setOpen(false)

  }else {
    setOpenCart(true)
    setOpen(false)
    
  }
}
  return ( 
        <header 
        className='sticky top-0 z-50 bg-white h-22 '>
          <div 
          className='flex flex-col justify-center w-full md:px-10'>
            <div 
            className='flex items-center justify-between p-7'>
                <div 
                className='hidden w-40 sm:block sm:'>
                        <a href="">                     
                            <img 
                            src={logo} 
                            alt="crocheteandoLogo"/>
                        </a>
                </div>
                {/* <div className='block md:hidden '>
                        <BiMenuAltRight onClick={()=> openedMenu()} className='text-white rounded bg-violet-300' size={40}/>
                </div>   */}
                <div 
                className='block sm:hidden sm: w-36'>
                        <a 
                        href="home">
                          <img  
                          src={logo} 
                          alt="crocheteandoLogo"/>
                          </a>
                </div>
                
                <div 
                className='h-10 rounded cursor-pointer '>
                        <BsHandbagFill 
                        onClick={()=>  openedCart()} 
                        className = "relative z-50 p-2 text-white rounded bg-violet-300" 
                        size={40}/>
                        <p 
                        className='relative z-50 w-6 mr-2 text-center text-white bg-black rounded-full left-5 bottom-4'>
                            {cartLength}
                        </p>
                </div>     
            </div>
      
          </div>
          <AnimatePresence>
            {openCart && (           
                <motion.div 
                key="modal"
                initial={{ opacity: 0, y:-50 }}
                animate={{ opacity: 1, y:0 }}
                exit={{ opacity: 0, y:-30 }}> 
                    <Cart/>
                </motion.div>
                
            )}
            </AnimatePresence>    
    
            {/* {open && <NavList/>}  */}
            
        </header>
   
  )
}

export default Header