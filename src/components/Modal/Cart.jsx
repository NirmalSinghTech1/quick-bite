import { useContext } from "react";
import CartContext from "../../store/CartContextProvider";
import UserProgressContext from "../../store/UserProgressContextProvider.jsx";
import { currencyFormatter } from "../../utils/formatter.js";

import Modal from "./Modal";
import CartItem from "./CartItem";
import ModalButton from "./ModalButton";

export default function Cart() {
  const { cartItems, addMealToCart, removeMeal, totalAmount } =
    useContext(CartContext);
  const { progress, showCheckout, hideCart } = useContext(UserProgressContext);

  return (
    <Modal
      open={progress === "cart"}
      onClose={progress === "cart" ? hideCart : null}
      title={cartItems.length > 0 ? "Your Cart" : "Your Cart is Empty!"}
    >
      <ul className="font-medium [&>li]:flex [&>li]:items-center [&>li]:justify-between [&>li]:mb-1 [&>li>div>button]:not-nth-2:bg-amber-800 [&>li>div>button]:not-nth-2:rounded-full [&>li>div>button]:text-amber-200 [&>li>div]:text-lg [&>li>div]:w-20 [&>li>div]:flex [&>li>div]:text-center [&>li>div]:*:flex-1 [&>li>div>button]:cursor-pointer">
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((meal) => (
              <CartItem
                key={meal.id ?? meal.name}
                meal={meal}
                addMealToCart={addMealToCart}
                removeMeal={removeMeal}
              />
            ))}
            <div className="mt-6">
              <p className="text-right font-semibold">
                {currencyFormatter.format(totalAmount)}
              </p>
            </div>
          </>
        ) : (
          <p className="text-gray-600">
            Looks like you haven't added any meals yet. Browse our menu and find
            something delicious!
          </p>
        )}
        <div className="text-right mt-8">
          <ModalButton onClick={hideCart} textOnly>
            Close
          </ModalButton>
          <ModalButton onClick={showCheckout} disabled={!cartItems.length}>
            Go to Checkout
          </ModalButton>
        </div>
      </ul>
    </Modal>
  );
}
