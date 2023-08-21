import React, { createContext, useEffect, useState } from 'react'

export const ProductContext= createContext();

const ProductProvider = ({children}) => {
    const [products, setProducts] =useState([])


    useEffect(()=>{
      const fetchProduct= async()=>{
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json();
        // console.log(data);
        setProducts(data)
      };
      fetchProduct();
    },[]);


  return (
    <ProductContext.Provider value={{products, setProducts}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;
