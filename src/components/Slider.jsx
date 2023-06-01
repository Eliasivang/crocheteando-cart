import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import {BsChevronLeft} from 'react-icons/bs'
import {BsChevronRight} from 'react-icons/bs'
import {TbPointFilled } from 'react-icons/tb'
import { useState } from 'react';




const slides = [
    {
        images: img1
    },
    {
        images: img2
    }
    
]
console.log(slides.length)
function Slider() {
const [index,setIndex] = useState(0);

const nextImg = ()=>{
    const isLastSlide = index === slides.length - 1;
    const newIndex = isLastSlide ? 0 :  index + 1;
        setIndex(newIndex)
} 

const prevImg = ()=>{
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : index -1;
        setIndex(newIndex);
}

const handleClickImg1 = ()=>{
    return  setIndex(0)
  }

const handleClickImg2 = ()=>{
    return  setIndex(1)
  }


  return (
    <>
        <div className='flex items-center justify-center w-3/4 mx-auto overflow-hidden h-80 md:h-96 rounded-2xl'>
                <div 
                 className='w-full h-full duration-500 bg-cover ' 
                 style={{backgroundImage: `url(${slides[index].images})`}}>
                </div>
                <div>
                    <BsChevronLeft onClick={prevImg}  className='absolute left-0 mx-1 text-4xl text-black cursor-pointer hover:text-violet-300 '/>
                    <BsChevronRight onClick={nextImg} className='absolute right-0 mx-1 text-4xl text-black cursor-pointer hover:text-violet-300 '/>
                </div> 
        </div>


        <div className='flex items-end justify-center w-full my-4'>
            <button onClick= {handleClickImg1}><TbPointFilled size = {30} className = {index === 0 ? "text-violet-300 transition-all duration-200" : "text-gray-400 transition-all duration-200"}/></button>
            <button onClick= {handleClickImg2}><TbPointFilled size = {30} className = {index === 1 ? "text-violet-300 transition-all duration-200" : "text-gray-400 transition-all duration-200"}/></button>
        </div>  
    </>
)}

export default Slider 