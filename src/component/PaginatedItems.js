import React, { useState } from "react";
import ReactPaginate from 'react-paginate';
import Card from './Card'; // Import the Card component

function PaginatedItems({ data, itemsPerRow, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(0);

  const startOffset = currentPage * itemsPerPage;
  const endOffset = startOffset + itemsPerPage;
  const currentItems = data.slice(startOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className="container mx-auto p-4  flex flex-wrap justify-center">
      {currentItems.map((item, index) => (
        <div key={index} className={`w-${Math.floor(12 / itemsPerRow)} p-2`}>
          <Card
            title={item.title}
            description={item.description}
            cta={item.cta}
            minutes={item.minutes}
            functionality={item.functionality}
          />
        </div>
      ))}
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
        containerClassName="flex justify-center mt-4"
        activeClassName="bg-blue-500 text-white px-3 py-1 rounded-lg"
        previousClassName="mr-2 px-3 py-1  rounded-lg border border-gray-300"
        nextClassName="ml-2 px-3 py-1 rounded-lg border border-gray-300"
        pageClassName="px-3 py-1 rounded-lg border border-gray-300"
      />
    </div>
  );
}

export default PaginatedItems;
