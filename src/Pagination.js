import React, { useState } from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange, onEntriesChange }) => {
  const [entriesPerPage, setEntriesPerPage] = useState(5);

  const handleClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const handleEntriesChange = (e) => {
    const value = parseInt(e.target.value);
    setEntriesPerPage(value);
    onEntriesChange(value); // Notify parent component of the change
  };

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index + 1}
        onClick={() => handleClick(index + 1)}
        className={`mx-1 px-3 py-1 rounded ${
          index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'
        }`}
      >
        {index + 1}
      </button>
    ));
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <select
        value={entriesPerPage}
        onChange={handleEntriesChange}
        className="mr-4 border border-gray-400 rounded px-2 py-1"
      >
        <option value={5}>Show 5</option>
        <option value={10}>Show 10</option>
      </select>
      {renderPageNumbers()}
    </div>
  );
};

export default Pagination;
