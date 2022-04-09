import React from "react";
import "./index.css";
let size = 2;
function Pagination({ pageCount, currentPage, onPageChange }) {

    const getPageNumber = () => {
        const pages = [1];
        if (currentPage > size + 2) {
            pages.push('left');
        }

        for (let i = currentPage - size; i <= currentPage + size; i++) {
            if (i > 1 && i < pageCount) {
                pages.push(i)
            }
        }

        if (currentPage <= pageCount - size + 2) {
            pages.push('right');
        }
        pages.push(pageCount)
        return pages;
    }

    const pageNumber = getPageNumber();

    function handlePageButonClick(page) {
        if (page === 'left') {
            onPageChange(currentPage - size)

        } else if (page === 'right') {
            onPageChange(currentPage + size)

        } else {
            onPageChange(page)
        }
    }

    return (
        <div>
            <div className="pagination-container">
                <button
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    prev
                </button>
                {pageNumber.map(page => {
                    return (
                        <button
                            key={page}
                            className={currentPage === page ? 'active' : ''}
                            onClick={() => handlePageButonClick(page)}
                        >
                            {page === 'left' || page === 'right' ? '...' : page}
                        </button>
                    )
                })}
                <button
                    disabled={currentPage === pageCount}
                    onClick={() => onPageChange(currentPage + 1)}
                >
                    next
                </button>
            </div>
        </div >
    )
}
export default Pagination;
