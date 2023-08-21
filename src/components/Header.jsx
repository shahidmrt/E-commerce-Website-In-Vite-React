import React, { useContext, useEffect, useState } from 'react'
import { SidebarContext } from '../context/SidebarContext'
import {BsBag} from 'react-icons/bs'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import logo from '../img/logo.svg';
const Header = () => {
  const{itemAmount}= useContext(CartContext)
  const{ setIsOpen, isOpen}= useContext(SidebarContext)
  // header state
  const[isActive, setIsActive]= useState(false);

  // addEventListener
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 60 ?setIsActive(true) : setIsActive(false)
    })
  })
  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md': 'bg-none  py-6'} fixed w-full z-10 transition-all duration-300 `}>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <Link to={'/'}> 
        <div>
          <img className='w-16 h-10' src={logo} alt="" />
        </div>
        </Link>
        <div className='cursor-pointer flex relative' onClick={()=>setIsOpen(!isOpen)}>
          <BsBag className='text-2xl'/>
          <div className='absolute bg-red-600 -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex items-center justify-center '>{itemAmount}</div>
        </div>
    </div>
    </header>
  )
}

export default Header
