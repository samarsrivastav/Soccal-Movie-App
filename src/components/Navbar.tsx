import { useState } from 'react';
import logo from '/bookmyshow.png';
import { SlArrowDown } from 'react-icons/sl';
import { FiMenu } from 'react-icons/fi';
import Searchbar from './Searchbar';

const Navbar = ({setSearch}:{setSearch:any}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="w-28 md:w-40" />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 hover:text-blue-500 focus:outline-none"
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Main Menu (shown on larger screens) */}
      <div className="hidden md:flex items-center w-full">
        <Searchbar setSearch={setSearch}/>

        {/* Location Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="px-3 py-2 text-gray-700 hover:text-blue-500 focus:outline-none flex items-center"
          >
            Gurugram &nbsp;<SlArrowDown />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Option 1
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Option 2
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Option 3
              </a>
            </div>
          )}
        </div>

        <button className="mx-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 focus:outline-none">
          Sign In
        </button>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 hover:text-blue-500 focus:outline-none"
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Dropdown Menu for Mobile (toggle with hamburger) */}
      {menuOpen && (
        <div className="md:hidden absolute z-10 top-16 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-lg space-y-4">
          <Searchbar setSearch={setSearch}/>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="px-3 py-2 text-gray-700 hover:text-blue-500 focus:outline-none flex items-center w-full text-left"
            >
              Gurugram &nbsp;<SlArrowDown />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Option 1
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Option 2
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Option 3
                </a>
              </div>
            )}
          </div>

          <button className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 focus:outline-none">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
