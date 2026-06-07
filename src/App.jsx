import logo from "./assets/logo-white.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
// import bgImg from './assets/hero-img.jpg';

function App() {
  return (
    <>
      <section className="relative bg-[url('/hero-img.avif')] bg-cover bg-center h-screen w-full">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="relative z-10 mx-auto">
          <header className="flex items-center justify-between pr-10">
            {/* <div className='size-20 bg-amber-200'> */}
            <img src={logo} alt="Quick bite logo" width={120} height={120} />
            {/* </div> */}
            <nav className="w-full">
              <ul className="flex items-top justify-end gap-4">
                <li>
                  <FaXTwitter style={{ color: "#fff" }} size={20} />
                </li>
                <li>
                  <FaSquareFacebook style={{ color: "#fff" }} size={20} />
                </li>
                <li>
                  <FaPinterest
                    style={{ color: "#fff" }}
                    className="mr-5"
                    size={20}
                  />
                </li>
                <li className="hidden md:flex items-start gap-2">
                  <TiShoppingCart style={{ color: "#D2042D" }} size={25} />
                  <div className="text-center">
                    <p className="font-bold">09:00 - 20:00</p>
                    <p className="text-[#DC143C] font-medium">Order Now</p>
                  </div>
                </li>
                <li className="hidden md:flex items-start gap-2">
                  <IoCall style={{ color: "#D2042D" }} size={20} />
                  <div className="text-center">
                    <p className="font-bold">+91 700989 XXXXX</p>
                    <p className="text-[#DC143C] font-medium">Request a call</p>
                  </div>
                </li>
                <li className="flex items-top gap-2 md:ml-7">
                  <FaCartShopping style={{ color: "#D2042D" }} />
                  Cart(0)
                </li>
              </ul>
            </nav>
          </header>
          <section className="flex items-center justify-center h-full">
            <div className="text-center">
              <h1 className="font-manrope text-6xl/relaxed">Every Bite Packed <br /> with Flavor.</h1>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default App;

{
  /* <div className='absolute inset-0 bg-black/55'></div>
      <div className='relative z-10 w-5/6 mx-auto'>
        <header className='flex items-center justify-between'>
          <img src={logo} alt="Quick bite logo" width={120} height={120} />
          <nav className='w-full'>
            <ul className='flex items-top justify-end gap-4'>
              <li><FaXTwitter style={{color: '#fff'}} size={20} /></li>
              <li><FaSquareFacebook style={{color: '#fff'}} size={20} /></li>
              <li><FaPinterest style={{color: '#fff'}} size={20} /></li>
              <li className='flex items-start gap-2 ml-32'>
                <TiShoppingCart style={{color: '#D2042D'}} size={25} />
                <div className='text-center'>
                  <p className='font-bold'>09:00 - 20:00</p>
                  <p className='text-[#DC143C] font-medium'>Order Now</p>
                </div>
              </li>
              <li className='flex items-start gap-2'>
                <IoCall style={{color: '#D2042D'}} size={20} />
                <div className='text-center'>
                  <p className='font-bold'>+91 700989 XXXXX</p>
                  <p className='text-[#DC143C] font-medium'>Request a call</p>
                </div>
              </li>
              <li className='flex items-top gap-2 ml-52'>
                <FaCartShopping style={{color: '#D2042D'}} 
              />
                Cart(0)
              </li>
            </ul>
          </nav>
        </header>
        <section>
          
        </section>
      </div> */
}
