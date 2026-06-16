import { useRef, useState } from 'react';
import { CartContext } from './components/CartContext';

import LandingSection from "./components/LandingSection";
import Footer from "./components/Footer";
import Meals from "./components/Meals";
import Modal from './components/Modal/Modal';

function App() {
  const [ cartItems, setCartItems ] = useState([]);

  function addMealToCart(meal) {
    setCartItems(prevItems => [...prevItems, meal]);
  }

  const modalRef = useRef(null);

  return (
    <>
    <CartContext value={{cartItems, addMealToCart}}>
      <Modal modalRef={modalRef} />
      <LandingSection modalRef={modalRef} />
      <Meals />
      <Footer />
    </CartContext>
    </>
  );
}

export default App;
