import React, { useState } from 'react';
import { FaFilter, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const handleLogout = () => navigate('/');

  return (
    <div className="flex justify-between items-center p-4 bg-blue-800 shadow-md">
      <h1 className="text-lg text-white font-semibold">Laporan Lalu Lintas (Lalin)</h1>
      <div className="flex items-center space-x-4">
        <FaFilter className="text-white text-xl cursor-pointer" />
        <div className="relative inline-block">
          <FaUserCircle className="text-3xl cursor-pointer text-white" onClick={toggleDropdown} />
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
              <div className="px-4 py-2 text-gray-800">Hello, User Name</div>
              <hr />
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
