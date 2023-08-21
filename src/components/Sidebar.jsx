import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {IoMdArrowForward} from "react-icons/io"
import {FiTrash2} from "react-icons/fi"

import CartItem from './CartItem'
import { SidebarContext } from '../context/SidebarContext'
import { CartContext } from '../context/CartContext'

const Sidebar = () => {
  const {cart, clearCart, total, itemAmount}= useContext(CartContext);

  // console.log(useContext(CartContext))
  const {isOpen, handleClose}=useContext(SidebarContext)
  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:w-[30vw] transition-all duration-300 z-20  px-4 lg:px-9 `}>
      <div className='flex justify-between items-center py-6 border-b'>
      <div className='uppercase text-sm font-semibold'>Shopping Bag {`(${itemAmount})`}</div>
        <div onClick={handleClose}  className='cursor-pointer w-8 h-8 flex items-center justify-center'>
          <IoMdArrowForward className='text-2xl'/>
        </div>
      </div>
        <div className='flex flex-col gap-y-2 h-[300px] lg:h-[400px] overflow-y-auto overflow-x-hidden '>
          {cart.map((item)=>(
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className=' flex flex-col gap-y-1  mt-4' >
          <div className=' flex w-full justify-between items-center  '>
            {/* total */}
            <div className='uppercase font-semibold'>
              <span className=' mr2'>Total: </span> $ {parseFloat(total).toFixed(2)}
            </div>
            {/* clear cart item */}
            <div onClick={clearCart} className='cursor-pointer bg-red-500 py-4 text-white w-12 h-12 flex items-center justify-center text-xl   '>
              <FiTrash2/>
            </div>
          </div>
          <Link to={`/`} className='bg-gray-200 flex p-2 justify-center items-center text-primary w-full font-medium'>View Cart </Link>
          <Link to={``} className='bg-primary flex p-2 justify-center items-center text-white w-full font-medium'>View ChecOut </Link>
        </div>
    </div>
  )
}

export default Sidebar
