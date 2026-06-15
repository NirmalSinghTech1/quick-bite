import FoodItem from "./FoodItem";

export default function Meals() {
  return (
    <main id="main">
      <section className="flex flex-col items-center w-full">
        <h2 className="mt-16 text-4xl font-manrope font-medium tracking-wide border-b-4 border-amber-400">
          MENU
        </h2>
        <div className="grid w-5/6 grid-cols-[repeat(auto-fit,minmax(19em,1fr))] gap-4 gap-y-8 max-w-5xl mt-8 mb-6 mx-auto">
          <FoodItem />
        </div>
      </section>
    </main>
  );
}
