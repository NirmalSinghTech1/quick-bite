import { currencyFormatter } from "../../utils/formatter.js";

export default function CartItem({ meal, addMealToCart, removeMeal }) {
  const { id, name, quantity, price } = meal;
  return (
    <li>
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <div>
        <button onClick={() => removeMeal(id)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => addMealToCart(meal)}>+</button>
      </div>
    </li>
  );
}
