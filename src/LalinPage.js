import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import LalinReportTable from './LalinReportTable';

function LalinReportPage() {
  // Dummy data
  const data = [
    { ruas: "Ruas 1", gerbang: "Gerbang 1", gardu: "01", hari: "Kamis", tanggal: "30-05-2024", metodePembayaran: "Tunai", golI: 567, golII: 234, golIII: 12, golIV: 8, golV: 10, totalLalin: 831 },
    { ruas: "Ruas 1", gerbang: "Gerbang 2", gardu: "01", hari: "Rabu", tanggal: "29-05-2024", metodePembayaran: "Tunai", golI: 456, golII: 345, golIII: 23, golIV: 9, golV: 6, totalLalin: 986 },
    { ruas: "Ruas 1", gerbang: "Gerbang 3", gardu: "02", hari: "Selasa", tanggal: "28-05-2024", metodePembayaran: "Tunai", golI: 890, golII: 577, golIII: 23, golIV: 14, golV: 8, totalLalin: 897 },
    { ruas: "Ruas 2", gerbang: "Gerbang 4", gardu: "02", hari: "Senin", tanggal: "27-05-2024", metodePembayaran: "Tunai", golI: 980, golII: 677, golIII: 23, golIV: 14, golV: 9, totalLalin: 987 },
    { ruas: "Ruas 2", gerbang: "Gerbang 5", gardu: "02", hari: "Minggu", tanggal: "26-05-2024", metodePembayaran: "Tunai", golI: 1435, golII: 1234, golIII: 35, golIV: 20, golV: 17, totalLalin: 2741 },
    { ruas: "Ruas 2", gerbang: "Gerbang 4", gardu: "03", hari: "Sabtu", tanggal: "25-05-2024", metodePembayaran: "Tunai", golI: 2454, golII: 1256, golIII: 16, golIV: 13, golV: 7, totalLalin: 3459 },
    { ruas: "Ruas 3", gerbang: "Gerbang 5", gardu: "04", hari: "Jumat", tanggal: "24-05-2024", metodePembayaran: "Tunai", golI: 1234, golII: 678, golIII: 25, golIV: 10, golV: 5, totalLalin: 1895 },
    { ruas: "Ruas 3", gerbang: "Gerbang 1", gardu: "04", hari: "Kamis", tanggal: "23-05-2024", metodePembayaran: "Tunai", golI: 567, golII: 789, golIII: 12, golIV: 9, golV: 8, totalLalin: 1385 },
    { ruas: "Ruas 4", gerbang: "Gerbang 2", gardu: "05", hari: "Rabu", tanggal: "22-05-2024", metodePembayaran: "Tunai", golI: 789, golII: 123, golIII: 22, golIV: 11, golV: 6, totalLalin: 951 },
    { ruas: "Ruas 4", gerbang: "Gerbang 3", gardu: "05", hari: "Selasa", tanggal: "21-05-2024", metodePembayaran: "Tunai", golI: 678, golII: 543, golIII: 19, golIV: 10, golV: 7, totalLalin: 1457 },
    { ruas: "Ruas 5", gerbang: "Gerbang 4", gardu: "06", hari: "Senin", tanggal: "20-05-2024", metodePembayaran: "Tunai", golI: 321, golII: 654, golIII: 13, golIV: 5, golV: 2, totalLalin: 995 },
    { ruas: "Ruas 5", gerbang: "Gerbang 5", gardu: "06", hari: "Minggu", tanggal: "19-05-2024", metodePembayaran: "Tunai", golI: 543, golII: 765, golIII: 21, golIV: 14, golV: 11, totalLalin: 1354 },
    { ruas: "Ruas 6", gerbang: "Gerbang 1", gardu: "07", hari: "Sabtu", tanggal: "18-05-2024", metodePembayaran: "Tunai", golI: 234, golII: 432, golIII: 15, golIV: 6, golV: 3, totalLalin: 690 },
    { ruas: "Ruas 6", gerbang: "Gerbang 2", gardu: "07", hari: "Jumat", tanggal: "17-05-2024", metodePembayaran: "Tunai", golI: 456, golII: 678, golIII: 20, golIV: 12, golV: 10, totalLalin: 1276 },
    { ruas: "Ruas 7", gerbang: "Gerbang 3", gardu: "08", hari: "Kamis", tanggal: "16-05-2024", metodePembayaran: "Tunai", golI: 876, golII: 543, golIII: 30, golIV: 25, golV: 20, totalLalin: 1494 },
    { ruas: "Ruas 1", gerbang: "Gerbang 1", gardu: "01", hari: "Senin", tanggal: "15-05-2024", metodePembayaran: "EToll", golI: 400, golII: 250, golIII: 10, golIV: 5, golV: 3, totalLalin: 668 },
    { ruas: "Ruas 2", gerbang: "Gerbang 2", gardu: "02", hari: "Selasa", tanggal: "16-05-2024", metodePembayaran: "FLO", golI: 500, golII: 300, golIII: 12, golIV: 4, golV: 2, totalLalin: 818 },
    { ruas: "Ruas 3", gerbang: "Gerbang 3", gardu: "03", hari: "Rabu", tanggal: "17-05-2024", metodePembayaran: "KTP", golI: 600, golII: 400, golIII: 15, golIV: 8, golV: 1, totalLalin: 1024 },
    { ruas: "Ruas 4", gerbang: "Gerbang 4", gardu: "04", hari: "Kamis", tanggal: "18-05-2024", metodePembayaran: "EToll", golI: 700, golII: 500, golIII: 18, golIV: 9, golV: 6, totalLalin: 1233 },
    { ruas: "Ruas 5", gerbang: "Gerbang 5", gardu: "05", hari: "Jumat", tanggal: "19-05-2024", metodePembayaran: "FLO", golI: 800, golII: 600, golIII: 22, golIV: 11, golV: 5, totalLalin: 1444 },
    { ruas: "Ruas 1", gerbang: "Gerbang 1", gardu: "01", hari: "Sabtu", tanggal: "20-05-2024", metodePembayaran: "KTP", golI: 900, golII: 700, golIII: 25, golIV: 12, golV: 4, totalLalin: 1841 },
    { ruas: "Ruas 2", gerbang: "Gerbang 2", gardu: "02", hari: "Minggu", tanggal: "21-05-2024", metodePembayaran: "EToll", golI: 1000, golII: 800, golIII: 30, golIV: 15, golV: 8, totalLalin: 1853 },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow bg-gray-100">
        <Navbar />
        <div className="p-6 overflow-y-auto">
          <h2 className="text-3xl font-bold mb-4">Laporan Lalu Lintas</h2>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <LalinReportTable data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LalinReportPage;
