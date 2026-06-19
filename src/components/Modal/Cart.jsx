import CartItem from "./CartItem";
import ModalButton from "./ModalButton";

export default function Cart({
  cartItems,
  totalAmount,
  onUpdateQuantity,
  onToggleModal,
}) {
  return (
    <>
      <ul className="font-medium [&>li]:flex [&>li]:items-center [&>li]:justify-between [&>li]:mb-1 [&>li>div>button]:not-nth-2:bg-amber-800 [&>li>div>button]:not-nth-2:rounded-full [&>li>div>button]:text-amber-200 [&>li>div]:text-lg [&>li>div]:w-20 [&>li>div]:flex [&>li>div]:text-center [&>li>div]:*:flex-1 [&>li>div>button]:cursor-pointer">
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((meal) => (
              <CartItem
                key={meal.id ?? meal.name}
                item={meal.name}
                itemQuantity={meal.quantity}
                price={meal.price}
                id={meal.id}
                onUpdateQuantity={onUpdateQuantity}
              />
            ))}
            <div className="mt-6">
              <p className="text-right font-semibold">${totalAmount}</p>
            </div>
          </>
        ) : (
          <p className="text-gray-600">
            Looks like you haven't added any meals yet. Browse our menu and find
            something delicious!
          </p>
        )}
        <div className="text-right mt-8">
          <button
            commandfor="cart-modal"
            command="close"
            className="cursor-pointer hover:text-shadow-sm font-medium"
          >
            Close
          </button>
          <ModalButton
            text="Go to Checkout"
            onClick={onToggleModal}
            disabled={!cartItems.length}
          />
        </div>
      </ul>
    </>
  );
}
