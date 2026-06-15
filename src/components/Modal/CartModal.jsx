import { createPortal } from "react-dom";

export default function CartModal({
  children,
  dialogState,
  closeBtn = false,
  onDialogStateChange,
  ref
}) {

  return createPortal(
    <dialog
      id="cart-modal"
      ref={ref}
      className="fixed m-auto inset-0 w-lg rounded-lg backdrop:bg-black/50 animate-[SlideIn_0.4s_ease-out]"
    >
      <div className="font-raleway text-gray-800 bg-amber-50 p-4 py-6 flex flex-col gap-3 font-medium">
        <h3 className="font-bold font-manrope text-lg text-gray-950">
            {
                dialogState === "cart" ? "Your Cart" :
                dialogState === "checkout" ? "Checkout" :
                "Success!"
            }
        </h3>
        {children}
        <div className="self-end mt-8">
          {closeBtn && (
            <button
              commandfor="cart-modal"
              command="close"
              className="cursor-pointer hover:text-shadow-sm font-medium"
            >
              Close
            </button>
          )}
          <button
            onClick={onDialogStateChange}
            className="ml-3 bg-linear-to-r from-amber-400/80 to-amber-300 py-1 px-5 rounded-sm shadow-sm cursor-pointer hover:opacity-80 active:opacity-100 font-medium"
          >
            {dialogState === "cart" ? "Go to Checkout" : dialogState === "checkout" ? "Submit Order" : "Okay"}
          </button>
        </div>
      </div>
    </dialog>,
    document.getElementById('modal')
  );
}
