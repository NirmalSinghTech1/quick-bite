import logo from "../assets/logo-white.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";

export default function Header() {
    return (
        <header className="flex items-center justify-between pr-10">
        <img src={logo} alt="Quick bite logo" width={130} height={130} className="md:ml-6" />
        <nav className="w-full">
          <ul className="flex items-top justify-end gap-4 *:cursor-pointer">
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
            <li className="flex items-top justify-end gap-2 md:w-32">
              <FaCartShopping style={{ color: "#D2042D" }} />
              Cart(0)
            </li>
          </ul>
        </nav>
      </header>
    )
}