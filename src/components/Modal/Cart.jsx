export default function Cart({ cartItems }) {
  return (
    <>
      <ul className="font-medium [&>li]:flex [&>li]:items-center [&>li]:justify-between [&>li]:mb-1 [&>li>div>span]:not-nth-2:bg-amber-800 [&>li>div>span]:not-nth-2:rounded-full [&>li>div>span]:not-nth-2:text-amber-200 [&>li>div>span]:not-nth-2:text-lg [&>li>div]:w-20 [&>li>div]:flex [&>li>div]:text-center [&>li>div>span]:flex-1 [&>li>div>span]:cursor-pointer">
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((meal) => (
              <CartItem
                key={meal.id ?? meal.name}
                item={meal.name}
                quantity={1}
                price={meal.price}
              />
            ))}
            <div className="mt-6">
              <p className="text-right font-semibold">$53.97</p>
            </div>
          </>
        ) : (
          <p className="text-gray-600">
            Looks like you haven't added any meals yet. Browse our menu and find
            something delicious!
          </p>
        )}
      </ul>
    </>
  );
}

function CartItem({ item, quantity, price }) {
  return (
    <li>
      <p>
        {item} - {quantity} x ${price}
      </p>
      <div>
        <span>-</span>
        <span>1</span>
        <span>+</span>
      </div>
    </li>
  );
}
