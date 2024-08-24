import React, { useState } from "react";
import "./Pagination.css";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Perform navigation or data fetch here based on the page
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="arrow"
      >
        &lt;
      </button>

      {[1, 2, 3].map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`page-item ${currentPage === page ? "active" : ""}`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === 3}
        className="arrow"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
