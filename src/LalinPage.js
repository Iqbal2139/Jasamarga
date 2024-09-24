import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaFileAlt, FaCog, FaUserCircle, FaFilter } from 'react-icons/fa';
function LalinReportPage() {
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  
  // Dummy data
  const data = [
    { ruas: "Ruas 1", gerbang: "Gerbang 1", gardu: "01", hari: "Kamis", tanggal: "30-05-2024", metodePembayaran: "Tunai", golI: 567, golII: 234, golIII: 12, golIV: 8, golV: 10, totalLalin: 831 },
    { ruas: "Ruas 1", gerbang: "Gerbang 2", gardu: "01", hari: "Rabu", tanggal: "29-05-2024", metodePembayaran: "Tunai", golI: 456, golII: 345, golIII: 23, golIV: 9, golV: 6, totalLalin: 986 },
    { ruas: "Ruas 1", gerbang: "Gerbang 3", gardu: "02", hari: "Selasa", tanggal: "28-05-2024", metodePembayaran: "Tunai", golI: 890, golII: 577, golIII: 23, golIV: 14, golV: 8, totalLalin: 897 },
    { ruas: "Ruas 2", gerbang: "Gerbang 4", gardu: "02", hari: "Senin", tanggal: "27-05-2024", metodePembayaran: "Tunai", golI: 980, golII: 677, golIII: 23, golIV: 14, golV: 9, totalLalin: 987 },
    { ruas: "Ruas 2", gerbang: "Gerbang 5", gardu: "02", hari: "Minggu", tanggal: "26-05-2024", metodePembayaran: "Tunai", golI: 1435, golII: 1234, golIII: 35, golIV: 20, golV: 17, totalLalin: 2741 },
    { ruas: "Ruas 2", gerbang: "Gerbang 6", gardu: "03", hari: "Sabtu", tanggal: "25-05-2024", metodePembayaran: "Tunai", golI: 2454, golII: 1256, golIII: 16, golIV: 13, golV: 7, totalLalin: 3459 },
  ];

  const handleFilter = () => {
    // Apply filter logic
  };

  const handleReset = () => {
    setSearch('');
    setDate('');
    // Reset logic
  };
    // Dropdown untuk menu logut
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  
    const handleLogout = () => {
      // Add logout functionality here
      navigate('/');
    };
  return (
    <div className='flex'>
     {/* Sidebar */}
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
                    <a href="#" className="text-gray-500 hover:text-gray-700">Laporan Per Hari</a>
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
      {/* Dashboard Content */}
      <div className="flex flex-col w-full h-auto">
        {/* Navbar */}
        <div className="flex justify-between items-center p-4 bg-blue-800 shadow-md">
          <h1 className="text-lg text-white font-semibold">Laporan Lalu Lintas (Lalin)</h1>
          <div className="flex items-center space-x-4">
            <FaFilter className="text-white text-xl cursor-pointer" />
            <div className="relative inline-block">
              {/* User Icon */}
              <FaUserCircle 
                className="text-3xl cursor-pointer text-white" 
                onClick={toggleDropdown} 
              />

              {/* Dropdown */}
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
    <div className="p-12 bg-gray-50 flex-grow">
      {/* Header */}
      <h2 className="text-xl font-bold mb-4">Laporan Lalin Per Hari</h2>
      {/* Search and Filter */}
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="border p-2 rounded"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={handleFilter} className="bg-blue-500 text-white px-4 py-2 rounded">Filter</button>
        <button onClick={handleReset} className="bg-gray-500 text-white px-4 py-2 rounded">Reset</button>
      </div>
      {/* Top Summary Header */}
      <div className="grid grid-cols-6 gap-4 mb-4">
        <div className="p-4 bg-gray-200 rounded text-center">
          <p className="font-bold">Total Tunai</p>
          <p>6570</p>
        </div>
        <div className="p-4 bg-gray-200 rounded text-center">
          <p className="font-bold">Total E-Toll</p>
          <p>7698</p>
        </div>
        <div className="p-4 bg-gray-200 rounded text-center">
          <p className="font-bold">Total Flo</p>
          <p>210</p>
        </div>
        <div className="p-4 bg-gray-200 rounded text-center">
          <p className="font-bold">Total KTP</p>
          <p>120</p>
        </div>
        <div className="p-4 bg-gray-200 rounded text-center">
          <p className="font-bold">Total Keseluruhan</p>
          <p>7546</p>
        </div>
        <div className="p-4 bg-gray-200 rounded text-center">
          <p className="font-bold">Total E-Toll+Tunai+Flo</p>
          <p>7546</p>
        </div>
      </div>

      {/* Table */}
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">No.</th>
            <th className="border border-gray-300 p-2">Ruas</th>
            <th className="border border-gray-300 p-2">Gerbang</th>
            <th className="border border-gray-300 p-2">Gardu</th>
            <th className="border border-gray-300 p-2">Hari</th>
            <th className="border border-gray-300 p-2">Tanggal</th>
            <th className="border border-gray-300 p-2">Metode Pembayaran</th>
            <th className="border border-gray-300 p-2">Gol I</th>
            <th className="border border-gray-300 p-2">Gol II</th>
            <th className="border border-gray-300 p-2">Gol III</th>
            <th className="border border-gray-300 p-2">Gol IV</th>
            <th className="border border-gray-300 p-2">Gol V</th>
            <th className="border border-gray-300 p-2">Total Lalin</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
              <td className="border border-gray-300 p-2">{row.ruas}</td>
              <td className="border border-gray-300 p-2">{row.gerbang}</td>
              <td className="border border-gray-300 p-2">{row.gardu}</td>
              <td className="border border-gray-300 p-2">{row.hari}</td>
              <td className="border border-gray-300 p-2">{row.tanggal}</td>
              <td className="border border-gray-300 p-2">{row.metodePembayaran}</td>
              <td className="border border-gray-300 p-2 text-right">{row.golI}</td>
              <td className="border border-gray-300 p-2 text-right">{row.golII}</td>
              <td className="border border-gray-300 p-2 text-right">{row.golIII}</td>
              <td className="border border-gray-300 p-2 text-right">{row.golIV}</td>
              <td className="border border-gray-300 p-2 text-right">{row.golV}</td>
              <td className="border border-gray-300 p-2 text-right">{row.totalLalin}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-end mt-4">
        {/* Add pagination component here */}
      </div>
    </div>
      
      </div>
    </div>
  );
}

export default LalinReportPage;
