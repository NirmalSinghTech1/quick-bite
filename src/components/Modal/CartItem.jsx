import { useState } from "react";

export default function CartItem({
  item,
  itemQuantity,
  price,
  id,
  removeCartMeal,
  updateTotalAmount
}) {
  const [quantity, setQuantity] = useState(itemQuantity);

  function handleIncreaseQuantity() {
    setQuantity(prevQ => prevQ + 1);
    updateTotalAmount('add', price);
  }

  function handleRemoveQuantity() {
    updateTotalAmount('remove', price);
    if (quantity <= 1) {
      removeCartMeal(id); 
      return;
    } 
    
    setQuantity(prevQ => prevQ - 1);
  }

  return (
    <li>
      <p>
        {item} - {quantity} x ${price}
      </p>
      <div>
        <button onClick={handleRemoveQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncreaseQuantity}>+</button>
      </div>
    </li>
  );
}
