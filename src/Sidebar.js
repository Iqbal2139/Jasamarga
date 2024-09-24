import React from 'react';
import { FaTachometerAlt, FaFileAlt, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 h-auto bg-yellow-300 p-5">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="mb-10">
            <img src="jasamarga-logo.png" alt="App Logo" className="w-24 mx-auto" />
          </div>
          <ul>
            <li className="mb-4">
              <a href="/dashboard" className="flex items-center text-gray-700 hover:text-black">
                <FaTachometerAlt className="mr-2" /> Dashboard
              </a>
            </li>
            <li className="mb-4">
              <a href="/lalin" className="flex items-center text-gray-700 hover:text-black">
                <FaFileAlt className="mr-2" /> Laporan Lalin
              </a>
              <ul className="ml-6 mt-2">
                <li>
                  <a href="/lalin" className="text-gray-500 hover:text-gray-700">Laporan Per Hari</a>
                </li>
              </ul>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center text-gray-700 hover:text-black">
                <FaCog className="mr-2" /> Master Gerbang
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="text-gray-500 hover:text-gray-700">
            <FaCog className="mr-2" /> Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
