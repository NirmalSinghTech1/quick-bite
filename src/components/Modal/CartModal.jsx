import { forwardRef } from "react";
import { createPortal } from "react-dom";

const CartModal = forwardRef(function CartModal({ children, title }, ref) {
  return createPortal(
    <dialog
      id="cart-modal"
      ref={ref}
      className="fixed m-auto inset-0 w-lg rounded-lg backdrop:bg-black/50 animate-[SlideIn_0.4s_ease-out]"
    >
      <div className="font-raleway text-gray-800 bg-amber-50 p-4 py-6 flex flex-col gap-3 font-medium">
        <h3 className="font-bold font-manrope text-lg text-gray-950">
          {title}
        </h3>
        {children}
      </div>
    </dialog>,
    document.getElementById("modal"),
  );
});

export default CartModal;
