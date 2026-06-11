import footerLogo from "../assets/site-logo-coloured.png";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="relative bg-[url('./footer-img.avif')] bg-cover bg-center h-80 md:mb-10 mt-10 shadow-[0_0_5px_yellow] md:shadow-[0_0_12px_yellow] shadow-amber-200">
        <div className="absolute inset-0 bg-linear-to-r from-black/90 to-black/15"></div>
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex flex-col justify-between h-full md:w-1/5">
            <img
              src={footerLogo}
              alt="Quick Bite logo"
              className="w-25 h-25 md:w-35 md:h-35"
            />
            <div className="mt-auto ml-6 mb-6">
              <div className="flex items-center space-x-2">
                <FaLocationDot style={{ color: "#fff" }} />
                <span className="text-lg">Visit Us:</span>
              </div>
              <address className="text-orange-300 font-semibold shadow-md">
                XYZ Street, City ABC, Panjab, India - 152026
              </address>
            </div>
          </div>
          <div className="absolute inset-0 text-center flex items-center justify-center">
            <h2 className="text-3xl/relaxed md:text-5xl/relaxed shadow-lg">
              Where Every Bite Brings <br /> a Moment of Delight
            </h2>
          </div>
        </div>
      </footer>
    )
}