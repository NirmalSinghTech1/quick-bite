import FoodItem from "./components/FoodItem";
import Footer from "./components/Footer";
import LandingSection from "./components/LandingSection";

function App() {
  return (
    <>
      <LandingSection />
      <main>
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
      <Footer />
    </>
  );
}

export default App;

{
  /* <footer className="relative bg-[url('./footer-img.avif')] bg-cover bg-center h-80 mb-15 mt-10 shadow-[0_0_15px_yellow] shadow-amber-200">
        <div className="absolute inset-0 bg-linear-to-r from-black/90 to-black/15"></div>
        <div className="relative z-10 border h-full flex">
          <div className="w-1/5 flex flex-col">
            <img src={footerLogo} alt="Quick Bite logo" width={140} height={140} />
            <div className="mt-auto ml-6 mb-6">
              <div className="flex items-center space-x-2">
                <FaLocationDot style={{color: '#fff'}} />
                <span className="text-lg">Visit Us:</span>
              </div>
              <address className="text-orange-300 font-semibold">
                XYZ Street, City ABC, Panjab, India - 152026
              </address>
            </div>
          </div>
          <div className="absolute inset-0 text-center border flex items-center justify-center">
            <h2 className="text-5xl/relaxed shadow-lg">Where Every Bite Brings <br /> a Moment of Delight</h2>
          </div>
        </div>
      </footer> */
}
