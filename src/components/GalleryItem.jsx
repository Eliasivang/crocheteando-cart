import React, { useContext, useEffect, useState } from 'react';
import {items,grogu} from '../components/Products';
import { CartContext } from '../context/CartContext';
import NotificationCart from './NotificationCart';
import {AiOutlineSearch} from 'react-icons/ai';
import Search from './Search';


function GalleryItem(){

const {cartItem,setCartItem,total,setTotal,currentPage,setCurrentPage} = useContext(CartContext);
const [notification, setNotification] = useState(false);
const pages = []
const countPage = Math.ceil(items.length /9);
const [itemsPerPage, setItemsPerPage] = useState(9);
const lastIndex = currentPage * itemsPerPage;
const firstIndex = lastIndex - itemsPerPage;
const currentProducts = items.slice(firstIndex, lastIndex);

///////////SEARCHED ELEMENTS
const [search,setSearch] = useState('');
const [searchItems,setSearchItems] = useState([]);
const searchPage = Math.ceil(searchItems.length /9);
const searchedProducts = searchItems.slice(firstIndex, lastIndex);
const [inSearch,setInSearch] = useState(false);

const nextPage = () => {
  if(currentPage < countPage){
      setCurrentPage(currentPage + 1)
  }
}

const prevPage = () => {
  if(currentPage > 1){
      setCurrentPage(currentPage - 1)
  }
}

const onSpecificPage = (n) => {
  setCurrentPage(n)

}

if(inSearch){
  for(let i = 1; i <= searchPage; i++){
      pages.push(i);
  }
}else {
  for(let i = 1; i <= countPage; i++){
      pages.push(i);
  }
}




function addToCart(amigurumis){
  setTimeout(() => {
    setNotification(false)
  }, 2000);
  setNotification(true)
  
  if(cartItem.find(item => item.id === amigurumis.id)){
    
    const newCart = cartItem.map(item => item.id === amigurumis.id 
                    ? {...item, quantity: item.quantity + 1 } 
                    : item);
                    setTotal(total + amigurumis.price *amigurumis.quantity);                 
    setCartItem(newCart)
  }else
  setCartItem([...cartItem, amigurumis]); 
  setTotal(total + amigurumis.price *amigurumis.quantity);
}
///////////////////////////////////////////////////////////



const handleChange = (e)=>{
  setSearch(e.target.value);
}

const handleClick = ()=>{
  const filteredItems = items.filter((item)=> item.tittle.toLowerCase().includes(search.toLowerCase()));
  setInSearch(true);
  setSearchItems(filteredItems);
  setCurrentPage(1);
 
}
console.log(search)
  return (
  
    <div>
      <div className='flex items-center w-full '>
          <input onChange={handleChange} type="text" maxLength={20} className = 'w-64 p-3 mx-4 my-6 border rounded h-11' placeholder='Busca un Amigurumi' />
          <AiOutlineSearch className='absolute block cursor-pointer ml-60' onClick={handleClick}/>
      </div>
    { !inSearch ?
    <ul className='flex flex-col grid-cols-3 gap-3 lg:grid-cols-4 sm:grid'>
    {currentProducts.map(amigurumis=>(
        <li key={amigurumis.id} className='flex flex-col items-center justify-center gap-2 py-3 mx-4 shadow-lg '>
        <div className='w-full border-b-2'>
        <img  className='w-full' src= {grogu} alt="logo"/>
        </div>
        <p className='font-bold'>{amigurumis.tittle}</p>
        <p className='w-12 text-center rounded-2xl'>${amigurumis.price}</p>
        <button onClick = {()=> addToCart(amigurumis)}className='p-2 hover:bg-violet-400 hover:text-white rounded-xl bg-violet-300 '>Añadir al carro</button>
        </li>
    ))}
    </ul>

    :
    //////////////////
    <ul className='flex flex-col grid-cols-3 gap-3 lg:grid-cols-4 sm:grid'>
    {searchedProducts.map(amigurumis=>(
        <li key={amigurumis.id} className='flex flex-col items-center justify-center gap-2 py-3 mx-4 shadow-lg '>
        <div className='w-full border-b-2'>
        <img  className='w-full' src= {grogu} alt="logo"/>
        </div>
        <p className='font-bold'>{amigurumis.tittle}</p>
        <p className='w-12 text-center rounded-2xl'>${amigurumis.price}</p>
        <button onClick = {()=> addToCart(amigurumis)}className='p-2 hover:bg-violet-400 hover:text-white rounded-xl bg-violet-300 '>Añadir al carro</button>
        </li>
    ))}
    </ul>

}


    <div className='flex items-center justify-between w-full p-2 my-12 '>
      <button className='m-2 text-sm' onClick={prevPage}> Anterior </button>
      <div>
        {pages.map((page)=>(  
                <button onClick={()=>onSpecificPage(page)} key={Math.random()} className= { page==currentPage ? 'bg-violet-400  text-white w-8 h-8 mx-1 border-2 rounded hover:text-white text hover:bg-violet-400 border-violet-400' : 'w-8 h-8 bg-white mx-1 border-2 rounded hover:text-white text hover:bg-violet-400 border-violet-400'}>{page}</button>
        ))}
      </div>
      <button className='m-2 text-sm' onClick={nextPage}> Siguiente </button>
    </div>
  
    {notification === true && <NotificationCart/>}
    </div>

  
  )
  
 
}
console.log(items);
export default GalleryItem