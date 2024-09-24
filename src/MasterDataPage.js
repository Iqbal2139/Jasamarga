import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function MasterDataPage() {
  // Sample data for demonstration
  const data = [
    { no: 1, ruas: "Ruas A", gerbang: "Gerbang 1" },
    { no: 2, ruas: "Ruas B", gerbang: "Gerbang 2" },
    { no: 3, ruas: "Ruas C", gerbang: "Gerbang 3" },
    { no: 4, ruas: "Ruas D", gerbang: "Gerbang 4" },
    { no: 5, ruas: "Ruas E", gerbang: "Gerbang 5" },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow bg-gray-100">
        <Navbar />
        <div className="p-6 overflow-y-auto">
          <h2 className="text-3xl font-bold mb-4">Master Data</h2>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">No</th>
                  <th className="py-3 px-6 text-left">Ruas</th>
                  <th className="py-3 px-6 text-left">Gerbang</th>
                  <th className="py-3 px-6 text-left">Aksi</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {data.map(item => (
                  <tr key={item.no} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6">{item.no}</td>
                    <td className="py-3 px-6">{item.ruas}</td>
                    <td className="py-3 px-6">{item.gerbang}</td>
                    <td className="py-3 px-6">
                      <button className="text-blue-500 hover:underline">Edit</button>
                      <button className="text-red-500 hover:underline ml-4">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MasterDataPage;
