import { useRef, useState } from "react";
import { CartContext } from "./components/CartContext";

import LandingSection from "./components/LandingSection";
import Footer from "./components/Footer";
import Meals from "./components/Meals";
import Modal from "./components/Modal/Modal";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const modalRef = useRef(null);

  function addMealToCart(meal) {
    setCartItems((prevItems) => [...prevItems, meal]);
    setTotalAmount((prevAmount) => +(prevAmount + +meal.price).toFixed(2));
  }

  function handleRemoveMeal(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function updateTotalAmount(action, amount) {
    setTotalAmount((prevAmount) => {
      if (action === "add") {
        const total = prevAmount + +amount;
        return +total.toFixed(2);
      }

      if (action === "remove") {
        const total = prevAmount - +amount;
        return +total.toFixed(2);
      }

      return prevAmount;
    });
  }

  return (
    <>
      <CartContext
        value={{
          cartItems,
          addMealToCart,
          removeCartMeal: handleRemoveMeal,
          updateTotalAmount,
        }}
      >
        <Modal modalRef={modalRef} totalAmount={totalAmount} />
        <LandingSection modalRef={modalRef} totalCartMeals={cartItems.length} />
        <Meals />
        <Footer />
      </CartContext>
    </>
  );
}

export default App;
