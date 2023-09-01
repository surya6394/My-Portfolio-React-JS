import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Surya-logo.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className='flex justify-between items-center w-[92%] pt-2 mx-auto text-black'>
        <div>
        <Link to='/'>
          <img className='w-56' src={logo} alt='' />
          </Link>
        </div>
        <div
          className={`md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-${
            isMenuOpen ? '9%' : '-100%'
          } md:w-auto w-full flex items-center px-5 transition-all duration-300 ease-in-out`}
        >
          <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
            <li>
              <Link className='no-underline text-txt-clr hover:text-hover-clr font-bold' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='no-underline text-txt-clr hover:text-hover-clr font-bold' to='/about'>
                About
              </Link>
            </li>
            <li>
              <Link className='no-underline text-txt-clr hover:text-hover-clr font-bold' to='/services'>
                Services
              </Link>
            </li>
            <li>
              <Link className='no-underline text-txt-clr hover:text-hover-clr font-bold' to='/blogs'>
                Blogs
              </Link>
            </li>
            <li>
              <Link className='no-underline text-txt-clr hover:text-hover-clr font-bold' to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex items-center gap-6'>
          <button className='bg-hover-clr hover:bg-txt-clr px-4 py-2 rounded-full'>
            <Link className='no-underline text-txt-clr hover:text-hover-clr font-bold' to='/login'>
              Login
            </Link>
          </button>
          {isMenuOpen ? (
            <AiOutlineClose onClick={toggleMenu} className='text-3xl cursor-pointer md:hidden' />
          ) : (
            <AiOutlineMenu onClick={toggleMenu} className='text-3xl cursor-pointer md:hidden' />
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
