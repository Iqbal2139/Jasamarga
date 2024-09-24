import React, { useState } from 'react';
import Pagination from './Pagination'; // Ensure you have the Pagination component
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FaFileExcel, FaFilePdf, FaDownload } from 'react-icons/fa';

function LalinReportTable({ data }) {
  const [selectedMethod, setSelectedMethod] = useState('Tunai'); // Default filter
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5); // Default entries per page
  const [filterDate, setFilterDate] = useState(''); // State for filtering by date
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

  // Unique payment methods based on the provided data
  const paymentMethods = [
    'Tunai',
    'EToll',
    'FLO',
    'KTP',
    'totalKeseluruhan',
    'totalETollTunaiFLO',
  ];

  // Filter data based on selected payment method and the filter date
  const filteredData = data.filter(row => {
    const isMethodMatch = row.metodePembayaran === selectedMethod;

    // Parse the row date and the filter date
    const rowDate = new Date(row.tanggal);
    const isDateMatch = !filterDate || rowDate.toDateString() === new Date(filterDate).toDateString();

    return isMethodMatch && isDateMatch;
  });

  // Calculate total pages based on filtered data
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);

  // Get current entries based on pagination
  const startIndex = (currentPage - 1) * entriesPerPage;
  const currentEntries = filteredData.slice(startIndex, startIndex + entriesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleEntriesChange = (value) => {
    setEntriesPerPage(value);
    setCurrentPage(1); // Reset to first page when changing entries per page
  };

  const handleReset = () => {
    setSelectedMethod('Tunai');
    setFilterDate('');
    setCurrentPage(1);
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Lalin Report');
    XLSX.writeFile(wb, 'lalin_report.xlsx');
  };

  const exportToPDF = () => {
    const input = document.getElementById('tableToExport');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('lalin_report.pdf');
      });
  };

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="paymentMethod" className="mx-3">Filter by Metode Pembayaran:</label>
        <select
          id="paymentMethod"
          value={selectedMethod}
          onChange={(e) => {
            setSelectedMethod(e.target.value);
            setCurrentPage(1); // Reset to first page when changing filter
          }}
          className="border border-gray-300 p-1 mx-2"
        >
          {paymentMethods.map(method => (
            <option key={method} value={method}>{method}</option>
          ))}
        </select>

        <label htmlFor="filterDate" className="mx-3">Filter by Tanggal:</label>
        <input
          type="date"
          id="filterDate"
          value={filterDate}
          onChange={(e) => {
            setFilterDate(e.target.value);
            setCurrentPage(1); // Reset to first page when changing filter
          }}
          className="border border-gray-300 p-1 mx-2"
        />

        <button
          onClick={handleReset}
          className="bg-red-500 text-white p-2 rounded mx-2"
        >
          Reset
        </button>

        {/* Export Dropdown */}
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown visibility
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <FaDownload className="mr-2" />
              Export
              <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {dropdownOpen && ( // Render dropdown only when open
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10" role="menu" aria-orientation="vertical" aria-labelledby="options-menu" tabIndex="-1">
              <div className="py-1" role="none">
                <button
                  onClick={exportToExcel}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  <FaFileExcel className="mr-2" />
                  Export to Excel
                </button>
                <button
                  onClick={exportToPDF}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  <FaFilePdf className="mr-2" />
                  Export to PDF
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Table with fixed size and scrolling */}
      <div className="overflow-y-auto max-h-96 border border-gray-300">
        <table id="tableToExport" className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">No.</th>
              <th className="border border-gray-300 p-2">Ruas</th>
              <th className="border border-gray-300 p-2">Gerbang</th>
              <th className="border border-gray-300 p-2">Gardu</th>
              <th className="border border-gray-300 p-2">Hari</th>
              <th className="border border-gray-300 p-2">Tanggal</th>
              <th className="border border-gray-300 p-2">Metode Pembayaran</th>
              <th className="border border-gray-300 p-2">Total Lalin</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2 text-center">{startIndex + index + 1}</td>
                <td className="border border-gray-300 p-2">{row.ruas}</td>
                <td className="border border-gray-300 p-2">{row.gerbang}</td>
                <td className="border border-gray-300 p-2">{row.gardu}</td>
                <td className="border border-gray-300 p-2">{row.hari}</td>
                <td className="border border-gray-300 p-2">{row.tanggal}</td>
                <td className="border border-gray-300 p-2">{row.metodePembayaran}</td>
                <td className="border border-gray-300 p-2 text-right">{row.totalLalin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Component */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onEntriesChange={handleEntriesChange}
        entriesPerPage={entriesPerPage} // Pass the current entriesPerPage
      />
    </div>
  );
}

export default LalinReportTable;
