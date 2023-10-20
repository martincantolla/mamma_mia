import React, { createContext, useEffect, useState } from "react";
import pizzaData from "../assets/pizzas.json";
export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizza, setPizza] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);

  useEffect(() => {
    const fetchPizza = () => {
      try {
        setPizza(pizzaData);
      } catch (error) {
        console.error("Error fetching pizzas", error);
      }
    };

    fetchPizza();
  }, []);

  const addToCart = (pizzaItem) => {
    const existingItem = cart.find((item) => item.id === pizzaItem.id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === pizzaItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...pizzaItem, quantity: 1 }]);
    }
    setCartPrice(cartPrice + pizzaItem.price);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <PizzaContext.Provider
      value={{
        pizza,
        setPizza,
        cart,
        setCart,
        addToCart,
        cartPrice,
        setCartPrice,
        capitalizeFirstLetter,
        formatNumber,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
