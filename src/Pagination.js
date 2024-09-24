import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange, onEntriesChange, entriesPerPage }) => {
  const handleClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const handleEntriesChange = (e) => {
    const value = parseInt(e.target.value);
    onEntriesChange(value); // Notify parent component of the change
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5; // Total number of visible page buttons

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pageNumbers.push(
        <button
          key={1}
          onClick={() => handleClick(1)}
          className={`mx-1 px-3 py-1 rounded ${
            currentPage === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
        >
          1
        </button>
      );
      if (startPage > 2) {
        pageNumbers.push(<span key="ellipsis-start">...</span>);
      }
    }

    for (let index = startPage; index <= endPage; index++) {
      pageNumbers.push(
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={`mx-1 px-3 py-1 rounded ${
            index === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
        >
          {index}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(<span key="ellipsis-end">...</span>);
      }
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => handleClick(totalPages)}
          className={`mx-1 px-3 py-1 rounded ${
            currentPage === totalPages ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center mt-4 py-2 px-2">
      <select
        value={entriesPerPage}
        onChange={handleEntriesChange}
        className="mr-4 border border-gray-400 rounded px-2 py-2"
      >
        <option value={5}>Show 5</option>
        <option value={10}>Show 10</option>
      </select>
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={`mx-1 px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-300'}`}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`mx-1 px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-300'}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
