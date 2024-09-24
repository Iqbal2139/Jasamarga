import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import LalinReportTable from './LalinReportTable';
import Pagination from './Pagination';

function LalinReportPage() {
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Dummy data
  const data = [
    { ruas: "Ruas 1", gerbang: "Gerbang 1", gardu: "01", hari: "Kamis", tanggal: "30-05-2024", metodePembayaran: "Tunai", golI: 567, golII: 234, golIII: 12, golIV: 8, golV: 10, totalLalin: 831 },
    { ruas: "Ruas 1", gerbang: "Gerbang 2", gardu: "01", hari: "Rabu", tanggal: "29-05-2024", metodePembayaran: "Tunai", golI: 456, golII: 345, golIII: 23, golIV: 9, golV: 6, totalLalin: 986 },
    { ruas: "Ruas 1", gerbang: "Gerbang 3", gardu: "02", hari: "Selasa", tanggal: "28-05-2024", metodePembayaran: "Tunai", golI: 890, golII: 577, golIII: 23, golIV: 14, golV: 8, totalLalin: 897 },
    { ruas: "Ruas 2", gerbang: "Gerbang 4", gardu: "02", hari: "Senin", tanggal: "27-05-2024", metodePembayaran: "Tunai", golI: 980, golII: 677, golIII: 23, golIV: 14, golV: 9, totalLalin: 987 },
    { ruas: "Ruas 2", gerbang: "Gerbang 5", gardu: "02", hari: "Minggu", tanggal: "26-05-2024", metodePembayaran: "Tunai", golI: 1435, golII: 1234, golIII: 35, golIV: 20, golV: 17, totalLalin: 2741 },
    { ruas: "Ruas 2", gerbang: "Gerbang 6", gardu: "03", hari: "Sabtu", tanggal: "25-05-2024", metodePembayaran: "Tunai", golI: 2454, golII: 1256, golIII: 16, golIV: 13, golV: 7, totalLalin: 3459 },
    { ruas: "Ruas 3", gerbang: "Gerbang 7", gardu: "04", hari: "Jumat", tanggal: "24-05-2024", metodePembayaran: "Tunai", golI: 1234, golII: 678, golIII: 25, golIV: 10, golV: 5, totalLalin: 1895 },
    { ruas: "Ruas 3", gerbang: "Gerbang 8", gardu: "04", hari: "Kamis", tanggal: "23-05-2024", metodePembayaran: "Tunai", golI: 567, golII: 789, golIII: 12, golIV: 9, golV: 8, totalLalin: 1385 },
    { ruas: "Ruas 4", gerbang: "Gerbang 9", gardu: "05", hari: "Rabu", tanggal: "22-05-2024", metodePembayaran: "Tunai", golI: 789, golII: 123, golIII: 22, golIV: 11, golV: 6, totalLalin: 951 },
    { ruas: "Ruas 4", gerbang: "Gerbang 10", gardu: "05", hari: "Selasa", tanggal: "21-05-2024", metodePembayaran: "Tunai", golI: 678, golII: 543, golIII: 19, golIV: 10, golV: 7, totalLalin: 1457 },
    { ruas: "Ruas 5", gerbang: "Gerbang 11", gardu: "06", hari: "Senin", tanggal: "20-05-2024", metodePembayaran: "Tunai", golI: 321, golII: 654, golIII: 13, golIV: 5, golV: 2, totalLalin: 995 },
    { ruas: "Ruas 5", gerbang: "Gerbang 12", gardu: "06", hari: "Minggu", tanggal: "19-05-2024", metodePembayaran: "Tunai", golI: 543, golII: 765, golIII: 21, golIV: 14, golV: 11, totalLalin: 1354 },
    { ruas: "Ruas 6", gerbang: "Gerbang 13", gardu: "07", hari: "Sabtu", tanggal: "18-05-2024", metodePembayaran: "Tunai", golI: 234, golII: 432, golIII: 15, golIV: 6, golV: 3, totalLalin: 690 },
    { ruas: "Ruas 6", gerbang: "Gerbang 14", gardu: "07", hari: "Jumat", tanggal: "17-05-2024", metodePembayaran: "Tunai", golI: 456, golII: 678, golIII: 20, golIV: 12, golV: 10, totalLalin: 1276 },
    { ruas: "Ruas 7", gerbang: "Gerbang 15", gardu: "08", hari: "Kamis", tanggal: "16-05-2024", metodePembayaran: "Tunai", golI: 876, golII: 543, golIII: 30, golIV: 25, golV: 20, totalLalin: 1494 },
  ];


  const filteredData = data.filter(item =>
    item.ruas.toLowerCase().includes(search.toLowerCase()) || 
    item.gerbang.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleFilter = () => {
    // Apply filter logic
  };

  const handleReset = () => {
    setSearch('');
    setDate('');
    setCurrentPage(1); // Reset to the first page
  };

  return (
    <div className='flex h-screen'> {/* Set height to fullscreen */}
      <Sidebar />
      <div className="flex flex-col w-full h-full"> {/* Set height to fullscreen */}
        <Navbar />
        <div className="p-12 bg-gray-50 flex-grow overflow-y-auto"> {/* Allow scrolling */}
          <h2 className="text-xl font-bold mb-4">Laporan Lalin Per Hari</h2>
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
          <div className="grid grid-cols-6 gap-4 mb-4">
            {/* Summary boxes */}
          </div>

          {/* Table */}
          <LalinReportTable data={currentData} />
          {/* Pagination */}
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onEntriesChange={setItemsPerPage} // Pass entries change handler
          />
        </div>
      </div>
    </div>
  );
}

export default LalinReportPage;
