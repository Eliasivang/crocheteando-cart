import React from 'react'
import { useState } from 'react';
import {items }from '../components/Products';

function Search() {
  const [search,setSearch] = useState('');
  const [searchResults,setSearchResults] = useState([])
  
  const handleSearch = (e)=>{
    setSearch(e.target.value)
    const filteredItems = items.filter((item)=> item.tittle.toLowerCase().includes(search.toLowerCase()));
    setSearchResults(filteredItems);
  }

  return (
    <div className='flex justify-start'>
    <input onChange={handleSearch} className='p-2 mx-4 my-6 border rounded h-11 w-23' type="text" placeholder='Busca un amigurumi'/>
    {searchResults.map((items)=>(
      <li key={items.id}>{items.tittle}</li>
    ))}
    </div>
  )
}

export default Search