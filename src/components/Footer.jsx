import React from 'react';
import {BsGithub} from 'react-icons/bs';
 
function Footer() {
  return (
    <div className='flex items-center justify-center bg-gray-50 h-36 '>
        <p className='text-center'>Hecho por <a href='https://github.com/Eliasivang' className='p-1 transform cursor-pointer hover:bg-violet-300'>Elias Gonzalez</a></p><BsGithub className='mx-2 text-xl text-violet-300'/>
    </div>
  )
}

export default Footer