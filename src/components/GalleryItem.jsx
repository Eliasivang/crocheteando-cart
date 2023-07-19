import React, { useContext, useState } from 'react';
import {items,grogu} from '../data/Products';
import { CartContext } from '../context/CartContext';
import NotificationCart from './NotificationCart';
import {AiOutlineSearch} from 'react-icons/ai';
import {GrFormNext,GrFormPrevious} from 'react-icons/gr';



function GalleryItem(){

const {cartItem,setCartItem,total,setTotal,currentPage,setCurrentPage} = useContext(CartContext);
const [notification, setNotification] = useState(false);
const pages = []
const countPage = Math.ceil(items.length /12);
const [itemsPerPage, setItemsPerPage] = useState(12);
const lastIndex = currentPage * itemsPerPage;
const firstIndex = lastIndex - itemsPerPage;
const currentProducts = items.slice(firstIndex, lastIndex);

//SEARCHED ELEMENTS
const [search,setSearch] = useState('');
const [searchItems,setSearchItems] = useState([]);
const searchPage = Math.ceil(searchItems.length /12);
const searchedProducts = searchItems.slice(firstIndex, lastIndex);
const [inSearch,setInSearch] = useState(false);

//LOADER
const [loader,setLoader] = useState(false);



const loaderTime = ()=>{
  setLoader(true)
  setTimeout(() =>{
      setLoader(false)
  },1500)
    
}


const nextPage = () => {
  if(currentPage == lastPage){
      
      return
  }
  loaderTime();
  if(currentPage < countPage){
      setCurrentPage(currentPage + 1)
      

  }
}

const prevPage = () => {
  if(currentPage==1){
      return;
  }
  loaderTime();
  if(currentPage > 1){
      setCurrentPage(currentPage - 1);
  }
 
}

// Si estoy clickeando en la misma pagina en la que estoy hacemos un early return

const onSpecificPage = (n) => {
  if(n===currentPage){
    return
  }
    loaderTime();
    setCurrentPage(n);
  
  
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


const handleChange = (e)=>{
  setSearch(e.target.value);
}

const handleSubmit = ()=>{
  const filteredItems = items.filter((item)=> item.tittle.toLowerCase().includes(search.toLowerCase()));
  setInSearch(true);
  setSearchItems(filteredItems);
  setCurrentPage(1);
 
}
//Buscamos el numero de pagina con el mayor valor, y por ende la que ultima.
const lastPage = Math.max(...pages)

  return (
  
    <section className='grid justify-center w-full px-4'>     
          <form onSubmit={handleSubmit} className='flex items-center justify-start'>
              <input onChange={handleChange} type="text" maxLength={20} className = 'w-64 p-2 my-6 border rounded h-11' placeholder='Busca un Amigurumi' />
              <AiOutlineSearch className='absolute block ml-[230px] cursor-pointer'/>
          </form>
              { loader 
              ? <div className='flex items-center justify-center my-80'>
              <div className="loader"></div>
              </div> 
              : <div className='items-center justify-center hidden '>
              <div className="loader"></div>
              </div> 
              }         
          { !inSearch ?
          //Articulos    
          <div className='xl:w-[1200px] w-full grid'>
              <ul className={loader ? "hidden ": 'items-center grid w-full sm:grid-cols-2 grid-cols-1 md:grid-cols-3 justify-center gap-4'}>
                  {currentProducts.map(amigurumis=>(
                  <li key={amigurumis.id} className='flex flex-col items-center justify-center gap-3 pt-3 shadow-lg '>
                      <div className='w-full border-b-2'>
                          <img  className='w-full' src= {grogu} alt="logo"/>
                      </div>
                      <p className='font-bold'>{amigurumis.tittle}</p>
                      <p className='w-12 text-center rounded-2xl'>${amigurumis.price}</p>
                      <button  onClick = {()=> addToCart(amigurumis)}className='w-full p-2 hover:bg-violet-400 hover:text-white bg-violet-300 '>Añadir al carro</button>
                  </li>
                  ))}
              </ul>
          </div>
        //Articulos buscados
          :
          <div className='xl:w-[1200px] w-full grid'>      
              <ul className={loader ? "hidden ": 'items-center grid w-full sm:grid-cols-2 grid-cols-1 md:grid-cols-3 justify-center gap-4'}>
                  {searchedProducts.map(amigurumis=>(
                  <li key={amigurumis.id} className='flex flex-col items-center justify-center gap-3 pt-3 shadow-lg '>
                  <div className='w-full border-b-2'>
                      <img  className='w-full' src= {grogu} alt="logo"/>
                  </div>
                  <p className='font-bold'>{amigurumis.tittle}</p>
                  <p className='w-12 text-center rounded-2xl'>${amigurumis.price}</p>
                  <button onClick = {()=> addToCart(amigurumis)}className='w-full p-2 hover:bg-violet-400 hover:text-white bg-violet-300 '>Añadir al carro</button>
                  </li>
                  ))}
              </ul>
          </div>
          }
        
        <div className='flex items-center justify-center p-2 my-12 '>
              {pages == 0 ? "No hay resultados" : <a    href='#amigurumis'><GrFormPrevious  className='mx-3 cursor-pointer disabled' onClick = {prevPage}/></a>}
              <div>
                  {pages.map((page)=>(  
                  <a 
                  href='#amigurumis'><button 
                  onClick={()=>onSpecificPage(page)} 
                  key={Math.random()} 
                  className= { page==currentPage ? 'bg-violet-400  text-white w-8 h-8 mx-1 border-2  hover:text-white text hover:bg-violet-400 border-violet-400' : 'w-8 h-8 bg-white mx-1 border-2  hover:text-white text hover:bg-violet-400 border-violet-400'}>
                      {page}
                  </button></a>
                  ))}
              </div>
              {pages == 0 ? "" : <a href='#amigurumis'><GrFormNext  className='mx-3 text-black cursor-pointer hover:text-violet-300' onClick={nextPage}/></a> }
        </div>
        {notification === true && <NotificationCart/>}
    </section> 
    )   
}

export default GalleryItem