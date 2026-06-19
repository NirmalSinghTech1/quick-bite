export default function CartItem({
  item,
  itemQuantity,
  price,
  id,
  onUpdateQuantity,
}) {
  return (
    <li>
      <p>
        {item} - {itemQuantity} x ${price}
      </p>
      <div>
        <button onClick={() => onUpdateQuantity(id, "remove")}>-</button>
        <span>{itemQuantity}</span>
        <button onClick={() => onUpdateQuantity(id, "add")}>+</button>
      </div>
    </li>
  );
}
