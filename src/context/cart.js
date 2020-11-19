import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [ cart, setCart ] = useState([]);
  const [ balance, setBalance] = useState();
  const [ totalValue, setTotalValue ] = useState();

  useEffect(() => {
    let value = 0
    cart.map((item) => {
      value = value + item.price
    })

    setTotalValue(value)
  }, [cart])

  function handleAddNewItem(item){
    const newCart = cart
    newCart.push(item)

    setCart([...newCart])
  }

  const store = {
    handleAddNewItem,
    cart,
    balance,
    totalValue
  }

  return(
    <CartContext.Provider value={store}>
      {children}
    </CartContext.Provider>
  )
};

export function useCart(){
  const context = useContext(CartContext);

  const {
    cart,
    handleAddNewItem,
    balance,
    totalValue
  } = context

  return{
    cart,
    handleAddNewItem,
    balance,
    totalValue
  }
}