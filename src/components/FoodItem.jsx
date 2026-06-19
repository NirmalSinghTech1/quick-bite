import { useState, useContext } from "react";
import { CartContext } from "./CartContext";

export default function FoodItem({ meal }) {
  const [itemIsAdded, setItemIsAdded] = useState(false);
  const { addMealToCart } = useContext(CartContext);

  const { image, name, price, description } = meal;

  function handleClick() {
    setItemIsAdded(true);
    addMealToCart(meal);

    setTimeout(() => {
      setItemIsAdded(false);
    }, 1000);
  }
  return (
    <article
      className={`flex flex-col justify-self-center w-full max-w-77 max-h-140 rounded-2xl text-center transition-all duration-200 shadow-lg ${itemIsAdded && "drop-shadow-[0_0_3px_#05df72,0_0_7px_#05df72]"} ${itemIsAdded ? 'hover:drop-shadow-[0_0_3px_#05df72,0_0_7px_#05df72]' : 'hover:drop-shadow-[0_0_3px_#FFBF00,0_0_7px_#FFBF00]'}`}
    >
      <img
        src={`http://localhost:3000/${image}`}
        alt={name + "image"}
        className="w-full h-70 rounded-tl-2xl rounded-tr-2xl object-cover aspect-3/4"
      />
      <div className="flex-1 flex flex-col items-center p-3 mx-auto rounded-bl-2xl rounded-br-2xl bg-linear-to-b from-black to-gray-900 h-full">
        <h3 className="text-xl font-semibold">{name}</h3>
        <span className="font-raleway bg-amber-300/20 text-yellow-300 text-xl font-semibold w-25 py-0.5 my-3 inline-block rounded-sm shadow-lg tracking-wide">
          ${price}
        </span>
        <div className="block mb-4">
          <p className="text-md">{description}</p>
        </div>
        <button
          onClick={handleClick}
          className={`mt-auto mb-3 ${itemIsAdded ? "bg-green-500 hover:bg-green-600" : "bg-amber-400 hover:bg-amber-500"} text-gray-900 w-35 py-2 rounded-md shadow-xl cursor-pointer transition-all duration-300 active:scale-95 font-medium`}
        >
          {itemIsAdded ? "Added to Cart!" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}
