import { arrNumbers } from "../data/numbers";
import usePagination from "../hooks/usePagination";

function UsePagination() {
  const {
    canPrevPage,
    canNextPage,
    prevPage,
    nextPage,
    setPage,
    itemsOnCurrentPage,
    endIndex,
    startIndex,
    totalPages,
    currentPage,
  } = usePagination(arrNumbers.length);

  console.log(startIndex, endIndex, canNextPage, canPrevPage);

  const whatPageAreWeOn = arrNumbers.slice(startIndex, endIndex + 1);
  console.log("this is total page:", totalPages);
  //console.log('this is what page we are: ', whatPageAreWeOn);

  return (
    <div>
      <h1>Pagination Demo</h1>
      <h2>
        {currentPage} of {totalPages}
      </h2>
      {whatPageAreWeOn.map((item, index) => (
        <li key={index}>{item}</li>
      ))}

      <button className="prev-button" onClick={prevPage}>
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)} // use the hook’s setPage function
          
        >
          {i + 1}
        </button>
      ))}

      <button className="next-button" onClick={nextPage}>
        Next
      </button>
    </div>
  );
}

export default UsePagination;
