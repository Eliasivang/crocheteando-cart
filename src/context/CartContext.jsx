import { useState, createContext,useEffect } from "react";

export const CartContext = createContext();
// Parseamos el contenido del local storage, si el mismo no tiene nada entonces sera un array vacio

const cartLS = JSON.parse(localStorage.getItem('cart')) || [] ;
const totalLS = JSON.parse(localStorage.getItem('total')) || 0;
export const CartProvider = ({children})  => {

const [cartItem, setCartItem] = useState(cartLS);
const [total, setTotal] = useState(totalLS);
const [currentPage, setCurrentPage] = useState(1);
// cuando se monte el componenete y cada vez que cambie vamos a pasar a string y guardar los elementos de carrito al ls.
useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cartItem))
        localStorage.setItem('total', JSON.stringify(total))
        },[cartItem], [total])

return(
        <CartContext.Provider 
        value = {{cartItem,setCartItem,total,setTotal,currentPage,setCurrentPage}}
        >
                {children}
        </CartContext.Provider>
)
}  

