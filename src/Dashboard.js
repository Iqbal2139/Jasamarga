import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
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

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Dashboard Content */}
      <div className="flex flex-col w-full h-auto">
        {/* Navbar */}
      <Navbar/>
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
