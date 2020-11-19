import React, { createContext, useState, useContext, useEffect } from 'react';
import { View } from 'react-native';

const CardContext = createContext();

export default function CartProvider({ children }) {
  const [ cart, setCart ] = useState([]);
  const [balance, setBalance] = useState(0);
  const [ totalValue, setTotalValue ] = useState();

  function handleAddNewItem(item){
    const newCart = cart;
    newCart.push(item)

    setCart(newCart)
  }

  const store = {
    handleAddNewItem,
    cart,
    balance,
    totalValue
  }

  return(
    <CardContext.Provider value={store}>
      {children}
    </CardContext.Provider>
  )
};

export function useCart(){
  const context = useContext(cartContext);

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