import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handleClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
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
    <div className="flex justify-center mt-4">
      {renderPageNumbers()}
    </div>
  );
};

export default Pagination;
