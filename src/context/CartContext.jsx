import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})  => {
const [cartItem, setCartItem] = useState([]);
const [total, setTotal] = useState(0);
const [currentPage, setCurrentPage] = useState(1);


return(
    <CartContext.Provider 
            value = {{cartItem,setCartItem,total,setTotal,currentPage,setCurrentPage}}
    >
            {children}
    </CartContext.Provider>
)
}  

