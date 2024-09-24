import React, { useState } from 'react';
import { FaTachometerAlt, FaFileAlt, FaCog, FaUserCircle, FaFilter } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { useNavigate } from 'react-router-dom';
const barData1 = [
    { name: 'BCA', value: 30 },
    { name: 'BRI', value: 50 },
    { name: 'BNI', value: 60 },
    { name: 'DKI', value: 20 },
    { name: 'Mandiri', value: 70 },
    { name: 'Mega', value: 90 },
    { name: 'Flo', value: 20 }
  ];
  
  const barData2 = [
    { name: 'Gerbang 1', value: 30 },
    { name: 'Gerbang 2', value: 50 },
    { name: 'Gerbang 3', value: 60 },
    { name: 'Gerbang 4', value: 20 },
    { name: 'Gerbang 5', value: 90 }
  ];
  
  const pieData1 = [
    { name: 'Shift 1', value: 60 },
    { name: 'Shift 2', value: 20 },
    { name: 'Shift 3', value: 20 }
  ];
  
  const pieData2 = [
    { name: 'Ruas 1', value: 60 },
    { name: 'Ruas 2', value: 20 },
    { name: 'Ruas 3', value: 20 }
  ];
  
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];
  

const Dashboard = () => {
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
    <div className="flex">
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

        {/* Main Dashboard Content */}
        <div className="p-10 bg-gray-50 flex-grow">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex space-x-4">
              <input type="date" className="border rounded-lg px-4 py-2" />
              <button className="bg-gray-700 text-white rounded-lg px-4 py-2">Filter</button>
            </div>
          </div>
          <div className="dashboard-container flex">
            <div className="dashboard-content flex-grow p-4 grid grid-cols-2 gap-4">
                {/* Bar Charts */}
                <div>
                <BarChart width={500} height={300} data={barData1} className='mb-12'>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
                <BarChart width={500} height={300} data={barData2}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
                </div>

                {/* Pie Charts */}
                <div>
                    <div className="flex flex-col items-center mb-7">
                    <PieChart width={170} height={170} className="mb-2">
                        <Pie
                        data={pieData1}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={50}
                        fill="#8884d8"
                        label
                        >
                        {pieData1.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                    <h2 className="text-lg font-bold mb-4">Total Lalin</h2>
                    <div className="flex flex-col items-start">
                        {pieData1.map((entry, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <div className="w-4 h-4 mr-2" style={{ backgroundColor: COLORS[index] }}></div>
                            <span className="text-sm">{entry.name}: {entry.value}%</span>
                        </div>
                        ))}
                    </div>
                    </div>

                    <div className="flex flex-col items-center">
                    <PieChart width={170} height={170} className="mb-2">
                        <Pie
                        data={pieData2}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={50}
                        fill="#82ca9d"
                        label
                        >
                        {pieData2.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                    <h2 className="text-lg font-bold mb-4">Total Lalin</h2>
                    <div className="flex flex-col items-start">
                        {pieData2.map((entry, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <div className="w-4 h-4 mr-2" style={{ backgroundColor: COLORS[index] }}></div>
                            <span className="text-sm">{entry.name}: {entry.value}%</span>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
