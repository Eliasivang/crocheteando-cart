import { useState, createContext,useEffect } from "react";

export const CartContext = createContext();
const cartLS = JSON.parse(localStorage.getItem('cart')) || [] ;

export const CartProvider = ({children})  => {

const [cartItem, setCartItem] = useState(cartLS);
const [total, setTotal] = useState(0);
const [currentPage, setCurrentPage] = useState(1);

        useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cartItem))
        },[cartItem])

return(
    <CartContext.Provider 
            value = {{cartItem,setCartItem,total,setTotal,currentPage,setCurrentPage}}
    >
            {children}
    </CartContext.Provider>
)
}  

