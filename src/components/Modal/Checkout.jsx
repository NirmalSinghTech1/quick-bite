import { useContext, useActionState } from "react";

import Modal from "./Modal.jsx";
import CartContext from "../../store/CartContextProvider.jsx";
import { currencyFormatter } from "../../utils/formatter.js";
import Input from "./Input.jsx";
import ModalButton from "./ModalButton.jsx";
import UserProgressContext from "../../store/UserProgressContextProvider.jsx";
import useHttp from "../../hooks/useHttp.js";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const { totalAmount, cartItems, clearCart } = useContext(CartContext);
  const { hideCheckout, progress } = useContext(UserProgressContext);

  const { data, error, sendRequest, clearData } = useHttp(
    "http://localhost:3000/orders",
    requestConfig,
  );

  function handleFinish() {
    hideCheckout();
    clearCart();
    clearData();
  }

  async function checkoutAction(prevState, fd) {
    const customerData = Object.fromEntries(fd.entries());

    await sendRequest(
      JSON.stringify({
        order: {
          items: cartItems,
          customer: customerData,
        },
      }),
    );
  }

  const [formState, formAction, isSending] = useActionState(
    checkoutAction,
    null,
  );

  if (data && !error) {
    return (
      <Modal open={progress === "checkout"} onClose={hideCheckout}>
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p>
          <ModalButton onClick={handleFinish}>Okay</ModalButton>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      open={progress === "checkout"}
      onClose={progress === "checkout" ? hideCheckout : null}
    >
      <p>
        Total Amount: <span>{currencyFormatter.format(totalAmount)}</span>
      </p>
      <form
        action={formAction}
        className="[&_input]:max-w-sm [&_input]:p-1 [&_input]:pl-2 [&_input]:rounded-sm [&_input]:focus:outline-amber-400 [&_label]:font-bold [&_input]:bg-amber-200/60 [&_input]:shadow-sm [&_input]:invalid:outline-red-500 flex flex-col gap-2 w-full mt-4"
      >
        <Input label="Full Name" id="name" type="text" minLength="3" />
        <Input label="E-Mail" id="email" type="email" />
        <Input label="Street" id="street" type="text" />
        <div className="flex gap-5 w-full max-w-[27em] [&>div>input]:w-full">
          <div className="w-1/2 min-w-0">
            <Input label="Postal Code" id="postal-code" type="text" />
          </div>
          <div className="flex-1 min-w-0">
            <Input label="City" id="city" type="text" />
          </div>
        </div>
        {error && (
          <div className="h-10">
            <p className="text-red-400">{error}</p>
          </div>
        )}
        <div className="text-right mt-3">
          <ModalButton onClick={hideCheckout} type="button">
            Close
          </ModalButton>
          <ModalButton type="submit" disabled={isSending}>
            {!isSending ? "Submit Order" : "Submitting..."}
          </ModalButton>
        </div>
      </form>
    </Modal>
  );
}
