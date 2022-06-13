import { useState, createContext } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd) => {
    if (!cart.some((e) => e.id === productToAdd.id)) {
      setCart([...cart, productToAdd]);
    } else {
      const newCart = cart.map((prod) => {
        if (prod.id === productToAdd.id) {
          return {
            ...prod,
            count: productToAdd.count,
          };
        } else {
          return prod;
        }
      });
      setCart(newCart);
    }
  };

  const getQuantity = () => {
    return cart.reduce((acc, ite) => acc + ite.count, 0);
  };

  const getProduct = (id) => {
    return cart.find((prod) => prod.id === id);
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalCart = () => {
    return cart.reduce((acc, ite) => acc + ite.price * ite.count, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        getQuantity,
        getProduct,
        removeItem,
        clearCart,
        totalCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
