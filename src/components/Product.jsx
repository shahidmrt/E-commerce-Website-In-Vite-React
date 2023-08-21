import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {BsPlus, BsEyeFill} from "react-icons/bs"
import { CartContext } from '../context/CartContext';


const Product = ({product}) => {
  const { addToCart } =useContext(CartContext)
  // console.log(product)
  const {id, price, image, title ,category, description, rating } =product;
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition '>
          <div className='w-full h-full flex justify-center items-center '>
            <div className='w-[200px] mx-auto flex justify-center items-center'>
              <img className='max-h-[160px]  group-hover:scale-110 transition-all duration-300' src={image} alt="" />
            </div>
          </div>
          {/* button  */}
          <div className='absolute top-2 -right-11 group-hover:right-2 bg-red-500/40 space-y-1 flex flex-col items-center justify-center p-1 opacity-0 group-hover:opacity-100 transition-all duration-300'>
            <button onClick={()=> addToCart(product,id)}>
              <div className='flex justify-center items-center text-white w-8 h-8 bg-red-500 '><BsPlus className='text-2xl'/></div>
            </button>
            <Link to={`/product/${id}`} className=' w-8 h-8 flex items-center bg-white justify-center drop-shadow-xl'>
            <BsEyeFill className='textlg' />
            </Link>
          </div>
      </div>
      {/* category ,title ,price */}
      <div>
        <div className='text-sm text-slate-500 capitalize'>{category}</div>
        <Link to={`/product/${id}`}>
            <div className='font-semibold mb-1 text-slate-700 '>{title}</div>
        </Link>
        <div className='text-slate-500 text-sm font-semibold'>$ {price}</div>
      </div>
    </div>
  )
}

export default Product
