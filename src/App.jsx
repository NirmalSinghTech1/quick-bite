import { useRef } from 'react';

import LandingSection from "./components/LandingSection";
import Footer from "./components/Footer";
import Meals from "./components/Meals";
import Modal from './components/Modal/Modal';

function App() {
  const modalRef = useRef(null);

  return (
    <>
      <Modal modalRef={modalRef} />
      <LandingSection modalRef={modalRef} />
      <Meals />
      <Footer />
    </>
  );
}

export default App;
