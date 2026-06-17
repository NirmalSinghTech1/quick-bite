import { useState, useContext } from "react";
import { CartContext } from "../CartContext";

import CartModal from "./CartModal";
import Cart from "./Cart";
import Checkout from "./Checkout";

export default function Modal({ modalRef, totalAmount }) {
  const [dialogState, setDialogState] = useState("cart");
  const { cartItems,removeCartMeal, updateTotalAmount } = useContext(CartContext);

  function handleDialogStateChange() {
    if (dialogState === "cart") {
      setDialogState("checkout");
    } else if (dialogState === "checkout") {
      setDialogState("success");
    } else if (dialogState === "success") {
      modalRef.current.close();
      setDialogState("cart");
    }
  }

  return (
    <CartModal
      dialogState={dialogState}
      closeBtn={dialogState !== "success"}
      onDialogStateChange={handleDialogStateChange}
      ref={modalRef}
      hasCartItems={cartItems.length > 0}
    >
      {dialogState === "cart" ? (
        <Cart 
          cartItems={cartItems} 
          totalAmount={totalAmount}
          removeCartMeal={removeCartMeal} 
          updateTotalAmount={updateTotalAmount}
        />
      ) : dialogState === "checkout" ? (
        <Checkout totalAmount={totalAmount} />
      ) : (
        <>
          <p>Your order was submitted succesfully!</p>
          <p>
            We will get back to you with more details via email within the next
            few minutes.
          </p>
        </>
      )}
    </CartModal>
  );
}
