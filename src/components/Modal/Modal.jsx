import { useContext, useRef } from "react";
import { CartContext } from "../CartContext";

import CartModal from "./CartModal";
import Cart from "./Cart";
import Checkout from "./Checkout";

export default function Modal({ cartModalRef, totalAmount }) {
  const { cartItems, onUpdateQuantity } = useContext(CartContext);
  const checkoutModalRef = useRef(null);
  
  function handleToggleModal() {
    if (cartModalRef.current) {
      cartModalRef.current.close();
    }

    if (checkoutModalRef.current) {
      checkoutModalRef.current.showModal();
    }
  }
  const handleSubmitOrder = async (customerData) => {
    try {
      const url = "http://localhost:3000/orders";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order: {
            customer: customerData,
            items: cartItems,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! status: ${response.status}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <CartModal
        ref={cartModalRef}
        title={cartItems.length > 0 ? "Your Cart" : "Your Cart is empty!"}
      >
        <Cart
          cartItems={cartItems}
          totalAmount={totalAmount}
          onUpdateQuantity={onUpdateQuantity}
          onToggleModal={handleToggleModal}
        />
      </CartModal>
      <CartModal ref={checkoutModalRef} title="Checkout">
        <Checkout
          totalAmount={totalAmount}
          checkoutRef={checkoutModalRef}
          onSubmitOrder={handleSubmitOrder}
        />
      </CartModal>
    </>
  );
}
// <CartModal
//   dialogState={dialogState}
//   closeBtn={dialogState !== "success"}
//   onDialogStateChange={handleDialogStateChange}
//   ref={modalRef}
//   hasCartItems={cartItems.length > 0}
//   onResetState={handleResetDialogState}
// >
//   {}
// </CartModal>

// {dialogState === "cart" ? (
//   <Cart
//     cartItems={cartItems}
//     totalAmount={totalAmount}
//     removeCartMeal={removeCartMeal}
//     updateTotalAmount={updateTotalAmount}
//   />
// ) : dialogState === "checkout" ? (
//   <Checkout totalAmount={totalAmount} />
// ) : (
//   <>
//     <p>Your order was submitted succesfully!</p>
//     <p>
//       We will get back to you with more details via email within the next
//       few minutes.
//     </p>
//   </>
// )}
