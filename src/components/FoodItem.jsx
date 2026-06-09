import sample from "../assets/beef-tacos.jpg";

export default function FoodItem() {
  return (
    <article className="flex flex-col justify-self-center w-full max-w-77 max-h-140 rounded-2xl text-center transition-all duration-200 shadow-lg hover:drop-shadow-[0px_0px_3px_#FFBF0050,0px_0px_7px_#FFBF00]">
      <img
        src={sample}
        alt=""
        className="w-full h-70 rounded-tl-2xl rounded-tr-2xl object-cover aspect-3/4"
      />
      <div className="flex-1 p-3 mx-auto rounded-bl-2xl rounded-br-2xl bg-linear-to-b from-black to-gray-900">
        <h3 className="text-2xl font-semibold">Beef Tacos</h3>
        <span className="font-raleway bg-amber-300/20 text-yellow-300 text-2xl font-semibold w-25 py-0.5 my-3 inline-block rounded-sm shadow-lg">
          $25
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
          voluptas!
        </p>
        <button className="my-3 bg-amber-400 text-gray-900 w-35 py-2 rounded-md shadow-xl cursor-pointer transition-colors duration-200 hover:bg-amber-400/90 active:bg-amber-400">
          Add to Cart
        </button>
      </div>
    </article>
  );
}
