import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Surya-logo.png";
import { AiOutlineMenu, AiOutlineClose, AiFillMail, AiFillPhone } from "react-icons/ai";
import SocialIcons from "./SocialIcons";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const phoneNum = '6394846889';
  const handlePhoneNumber = () => {
    window.location.href = `tel:${phoneNum}`;
  }


  return (
    <>
      <div>
        <div className="md:flex justify-between bg-home-background2 bg-cover p-4 bg-black text-white">
          <div className="flex md:pl-20 md:pb-0 pb-4">
          <AiFillPhone className="mr-1 mt-1" size={20} />
            <div>
              <p onClick={handlePhoneNumber} className="mr-4">{phoneNum}</p>
            </div>
            <AiFillMail className="mr-1 ml-4 md:ml-0 mt-1" size={20} />
            <p><a href="mailto:surya4929pratap@gmail.com">surya4929pratap@gmail.com</a></p>
            <div></div>
          </div>
          <div className="flex md:pr-16 justify-center">
            <SocialIcons />
          </div>
        </div>
      </div>
      <div>
        <nav className="flex justify-between h-24 items-center w-[92%] pt-2 mx-auto text-black">
          <div>
            <Link to="/">
              <img className="w-56" src={logo} alt="" />
            </Link>
          </div>
          <div
            className={`md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
              isMenuOpen
                ? "fixed pl-12 top-[23%] w-full h-52"
                : "hidden md:block"
            } md:w-auto w-full flex items-center px-5 transition-all duration-300 ease-in-out`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <Link
                  className="no-underline text-txt-clr hover:text-hover-clr font-bold"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="no-underline text-txt-clr hover:text-hover-clr font-bold"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="no-underline text-txt-clr hover:text-hover-clr font-bold"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="no-underline text-txt-clr hover:text-hover-clr font-bold"
                  to="/blogs"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  className="no-underline text-txt-clr hover:text-hover-clr font-bold"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-btnclr1 hover:bg-txt-clr text-txt-clr hover:text-btnclr1 px-4 py-2 rounded-full">
              <Link className="no-underline  font-bold" to="/login">
                Login
              </Link>
            </button>
            {isMenuOpen ? (
              <AiOutlineClose
                onClick={toggleMenu}
                className="text-3xl cursor-pointer md:hidden"
              />
            ) : (
              <AiOutlineMenu
                onClick={toggleMenu}
                className="text-3xl cursor-pointer md:hidden"
              />
            )}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
