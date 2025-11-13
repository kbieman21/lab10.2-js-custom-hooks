import { arrNumbers } from "../data/numbers";
import usePagination from "../hooks/usePagination";

function UsePagination() {
  const {
    canPrevPage,
    canNextPage,
    prevPage,
    nextPage,
    setpage,
    itemsOnCurrentPage,
    endIndex,
    startIndex,
    totalPages,
    currentPage,
  } = usePagination(arrNumbers.length);

  console.log(startIndex, endIndex, canNextPage, canPrevPage);

  const whatPageAreWeOn = arrNumbers.slice(startIndex, endIndex + 1);

  function handPageOneBtn(){
    return currentPage;
  }

  function handPageTwoBtn(){
    return currentPage;
  }
  return (
    <div>
      <h1>Pagination Demo</h1>
      <h2>
        {currentPage} of {totalPages}
      </h2>
      {whatPageAreWeOn.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      <button className="next-button" onClick={nextPage}>Next</button>
      <button className="prev-button" onClick={prevPage}>Previous</button>
      {/* {totalPages.map(page => (
                <button>{page}</button>
             ))} */}
      {/* <div>
        <button onClick={handPageTwoBtn}>1</button>
        <button onClick={nextPage}>2</button>
        <button onClick={nextPage}>3</button>
        <button onClick={nextPage}>4</button>
        <button onClick={nextPage}>5</button>
        <button onClick={nextPage}>6</button>
        <button onClick={nextPage}>7</button>
        <button onClick={nextPage}>8</button>
        <button onClick={nextPage}>9</button>
        <button onClick={nextPage}>10</button>
      
      </div> */}
    </div>
  );
}

export default UsePagination;

// import { useState } from "react";
// import usePagination from "../hooks/usePagination";

// function PaginationDemo() {
//   const [items, setItems] = useState(
//     Array.from({ length: 100 }, (_, i) => "Item " + (i + 1)),
//   );

//   const [itemsPerPage, setItemsPerPage] = useState(10);

//   const {
//     currentPage,
//     totalPages,
//     startIndex,
//     endIndex,
//     itemsOnCurrentPage,
//     setPage,
//     nextPage,
//     prevPage,
//     canNextPage,
//     canPrevPage,
//   } = usePagination(items.length, itemsPerPage);

//   // TODO: map over the currentItems and show each item in the jsx
//  const currentItems = items.slice(startIndex, endIndex);

//  // TODO:

//   return (
//     <div>
//       <h2>Pagination Demo</h2>
//       <div>
//         <select
//           value={itemsPerPage}
//           onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
//         >
//           <option value="5">5</option>
//           <option value="10">10</option>
//           <option value="15">15</option>
//           <option value="20">20</option>
//         </select>

//         <div>Total Items: {items.length}</div>
//       </div>

//       <div>
//         {/* map over the currentItems and show each item here*/}
//       </div>
//     </div>
//   );
// }

// export default PaginationDemo;
