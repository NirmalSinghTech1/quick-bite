import { useRef, useState } from "react";
import { CartContext } from "./components/CartContext";

import LandingSection from "./components/LandingSection";
import Footer from "./components/Footer";
import Meals from "./components/Meals";
import Modal from "./components/Modal/Modal";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const cartModalRef = useRef(null);

  const totalAmount = Number(
    cartItems
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2),
  );

  function addMealToCart(meal) {
    setCartItems((prevItems) => {
      const item = prevItems.find((item) => item.id === meal.id);
      if (!item) {
        return [...prevItems, { ...meal, quantity: 1 }];
      }

      return prevItems.map((item) =>
        item.id === meal.id ? { ...item, quantity: item.quantity + 1 } : item,
      );
    });
  }

  function addQuantity(id) {
    setCartItems((prevItems) => {
      const item = prevItems.find((item) => item.id === id);
      if (!item) return prevItems;

      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      );

      return updatedItems;
    });
  }

  function removeQuantity(id) {
    setCartItems((prevItems) => {
      const item = prevItems.find((item) => item.id === id);
      if (!item) return prevItems;

      if (item.quantity <= 1) {
        return prevItems.filter((item) => item.id !== id);
      }

      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      );
      return updatedItems;
    });
  }

  function handleUpdateQuantity(id, action) {
    if (action === "add") return addQuantity(id);
    if (action === "remove") return removeQuantity(id);
  }

  return (
    <>
      <CartContext.Provider
        value={{
          cartItems,
          addMealToCart,
          onUpdateQuantity: handleUpdateQuantity,
        }}
      >
        <Modal cartModalRef={cartModalRef} totalAmount={totalAmount} />
        <LandingSection
          modalRef={cartModalRef}
          totalCartMeals={cartItems.length}
        />
        <Meals />
        <Footer />
      </CartContext.Provider>
    </>
  );
}

export default App;
