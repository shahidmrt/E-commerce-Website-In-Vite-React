import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const {id}= useParams();
  // console.log(id);
  const {products}= useContext(ProductContext);
  const {addToCart}= useContext(CartContext);
   
  // get a single product based on the id 
  const product = products.find(item =>(
    item.id === parseInt(id)
  ));
  // console.log(product)

  if(!product){
    return <section className=' h-screen flex justify-center items-center '>Loading....</section>
  }

  const {title, price, description, image}= product;
  return (
    <section className='pt-3 pb-12 lg:py-32 h-screen flex items-center '>
      <div className=' container mx-auto  '>
          <div className='flex flex-col lg:flex-row items-center'>

              {/* img  */}
              <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'> 
                <img className='max-w-[200px] lg:max-w-xs' src={image} alt="" />
              </div>
              {/* text  */}
              <div className='flex-1 text-center lg:text-left '>
                <h1 className='text-[26px] font-medium max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
                <div className='text-xl text-red-500 font-medium mb-6'>$ {price}</div>
                <p className='mb-8'>{description}</p>
                <button onClick={()=> addToCart(product, product.id)}  className='bg-primary text-white py-4 px-8'>Add to Cart</button>
              </div>
          </div>
      </div>
    </section>
  )
}

export default ProductDetail
