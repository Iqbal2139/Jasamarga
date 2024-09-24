// LalinReportTable.js
import React from 'react';

function LalinReportTable({ data }) {
  return (
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
  );
}

export default LalinReportTable;
