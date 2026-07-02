import { CartContextProvider } from "./store/CartContextProvider";
import { UserProgressContextProvider } from "./store/UserProgressContextProvider";

import LandingSection from "./components/LandingSection";
import Footer from "./components/Footer";
import Meals from "./components/Meals";
import Cart from "./components/Modal/Cart";
import Checkout from "./components/Modal/Checkout";

function App() {
  return (
    <>
      <UserProgressContextProvider>
        <CartContextProvider>
          <LandingSection />
          <Meals />
          <Cart />
          <Checkout />
          <Footer />
        </CartContextProvider>
      </UserProgressContextProvider>
    </>
  );
}

export default App;
