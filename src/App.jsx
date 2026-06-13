import FoodItem from "./components/FoodItem";
import Footer from "./components/Footer";
import LandingSection from "./components/LandingSection";

function App() {
  // const cartModal = useRef(null);

  return (
    <>
      <LandingSection />
      <main id="main">
        <section className="flex flex-col items-center w-full">
          <h2 className="mt-16 text-4xl font-manrope font-medium tracking-wide border-b-4 border-amber-400">
            MENU
          </h2>
          <div className="grid w-5/6 grid-cols-[repeat(auto-fit,minmax(19em,1fr))] gap-4 gap-y-8 max-w-5xl mt-8 mb-6 mx-auto">
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
          </div>
        </section>
      </main>
      <button command="show-modal" commandFor="cart-modal">Show Modal</button>
      <Footer />
      <dialog id="cart-modal" className="fixed m-auto inset-0 w-lg rounded-lg backdrop:bg-black/50 animate-[SlideIn_0.4s_ease-out]">
      <div className="font-raleway text-gray-800 bg-amber-100 p-4 flex flex-col gap-3">
        <h3 className="font-bold font-manrope text-lg text-gray-950">Your Cart</h3>
        <ul className="font-medium [&>li]:flex [&>li]:items-center [&>li]:justify-between [&>li]:mb-1 [&>li>div>span]:not-nth-2:bg-amber-800 [&>li>div>span]:not-nth-2:rounded-full [&>li>div>span]:not-nth-2:text-amber-200 [&>li>div>span]:not-nth-2:text-lg [&>li>div]:w-20 [&>li>div]:flex [&>li>div]:text-center [&>li>div>span]:flex-1 [&>li>div>span]:cursor-pointer">
          <li>
            <p>Seafood Paella - 1 x $19.99</p>
            <div>
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>
          </li>
          <li>
            <p>Seafood Paella - 1 x $19.99</p>
            <div>
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>
          </li>
          <li>
            <p>Seafood Paella - 1 x $19.99</p>
            <div>
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>
          </li>
        </ul>
        <p className="self-end font-semibold">$53.97</p>
        <div className="self-end">
          <button commandFor="cart-modal" command="close" className="cursor-pointer hover:text-shadow-sm font-medium">Close</button>
          <button className="ml-3 bg-linear-to-r from-amber-400/80 to-amber-300 py-2 px-4 rounded-lg shadow-sm cursor-pointer hover:opacity-80 active:opacity-100 font-medium">Go to Checkout</button>
        </div>
      </div>
      </dialog>
    </>
  );
}

export default App;