import React, { createContext, useEffect, useState } from 'react'

export const CartContext =createContext()

const CartProvider = ({children}) => {
  // cart state 
  const [cart, setCart]= useState([]);
  const [itemAmount, setItemAmount] = useState(0)

  //total price stat
  const [total, setTotal]=useState(0)

  useEffect(()=>{
    const total = cart.reduce((accumulator, currentItem)=>{
      return accumulator + currentItem.price * currentItem.amount
    },0);
    setTotal(total)
  });

  // update itemAmount 
  useEffect(()=>{
    if (cart){
      const amount =cart.reduce((accumulator, currentItem)=>{
        return accumulator + currentItem.amount;
      },0);
      setItemAmount(amount)
    };
  },[cart])

  // add to cart 
  const addToCart = (product,id) =>{
    const newItem ={...product, amount: 1};
      //  console.log(newItem)
    const cartItem = cart.find(item=>(
      item.id === id
    ));
    // if cart item is already in the cart 
    if(cartItem){
      const newCart=[...cart].map((item)=>{
        if(item.id === id){
          return{ ...item, amount: cartItem.amount + 1};
        }else{
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem])
    }
    // console.log(cartItem)
    // console.log(product)
    // console.log(`added ${id} to the cart ${product.price}`);
  };
  // console.log(cart)

   // remove from cart
   const removeFromCart = (id) =>{
    const newCart =cart.filter(item =>(
      item.id !== id
    ));
    setCart(newCart)
   };

   //clear cart
   const clearCart = ()=>{
    setCart([]);
   }

   //increase amount
   const increaseAmount =(id)=>{
         // console.log('amount increased', `item ${id}`);
    const cartItem= cart.find(item=>(
      item.id === id
    ));
    addToCart(cartItem, id)
         // console.log(item)
   };

   //decrease Amount
   const decreaseAmount=(id)=>{
    const cartItem= cart.find(item =>{
      return item.id === id;
    });
    // console.log(item)
    if(cartItem){
      const newCart= cart.map(item=>{
        if(item.id === id){
          return{...item, amount: cartItem.amount -1};
        } else {
          return item;
        }
      });
      setCart(newCart)
    }

      if(cartItem.amount < 2 ){
        removeFromCart(id);
      }
    

   }
  return (
    <CartContext.Provider value={ {cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount ,itemAmount, total} }>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
