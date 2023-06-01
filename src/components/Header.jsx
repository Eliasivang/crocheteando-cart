import React, { useState } from 'react'
import logo from "../assets/cr.png"
import { BiMenuAltRight } from 'react-icons/bi';
import { BsHandbagFill} from 'react-icons/bs';
import NavList from './NavList';
import Cart from "../components/Cart";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Search from './Search';

function Header() {
const {cartItem, setCartItem} = useContext(CartContext);
const [open, setOpen] = useState(false);
const [openCart, setOpenCart] = useState(false);
const cartLength = cartItem.reduce((acc, item) => acc + item.quantity, 0);devicePixelRatio

const openedMenu = () => {
  if(open){
    setOpen(false)
    setOpenCart(false)
  }else {
    setOpen(true)
    setOpenCart(false)
  }
}
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
    <>
        <header>
            <div className='z-50 flex justify-between w-full p-7'>
            <div className='hidden w-40 sm:block sm:'>
                        <img src={logo} alt="crocheteandoLogo"/>
                </div>
                <div className='block md:hidden '>
                        <BiMenuAltRight onClick={()=> openedMenu()} className='text-white rounded bg-violet-300' size={40}/>
                </div>  
                <div className='block sm:hidden sm: w-36'>
                        <img src={logo} alt="crocheteandoLogo"/>
                </div>
  
                <div className='rounded'>
                        <BsHandbagFill onClick={()=>  openedCart()} className = "p-2 text-white rounded bg-violet-300" size={40}/>
                        <p className='relative w-6 mr-2 text-center text-white bg-black rounded-full left-5 bottom-4'>{cartLength}</p>
                </div>    
            </div>
           
            {open && <NavList/>} 
            {openCart && <Cart/>}
        </header>
    </>
  )
}

export default Header