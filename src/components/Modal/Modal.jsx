import { useState } from "react";

import CartModal from "./CartModal";
import Cart from "./Cart";
import Checkout from "./Checkout";

export default function Modal({ modalRef }) {
  const [dialogState, setDialogState] = useState("cart");

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
    >
      {dialogState === "cart" ? (
        <Cart />
      ) : dialogState === "checkout" ? (
        <Checkout />
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
