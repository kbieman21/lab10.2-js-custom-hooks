// import { useState } from "react";


// function usePagination(totalItem, itemsPerPage=10, initialPage=1){

//     //compute total pages
//     const totalPages = totalItem/itemsPerPage;

//     //need to update initial state
//     const [currentPage, setCurrentPage] = useState(1)

//     //startIndex
//     // const startIndex = useMemo(() => {
//     //     return (currentPage -1) * itemsPerPage;
//     // }, [currentPage, itemsPerPage]);
//     const startIndex = (currentPage-1) * itemsPerPage; // 1-1 = 0 multiplied by any number will be zero???????????

//     //endIndex
//     const endIndex = (startIndex + itemsPerPage) - 1

//     //itemsOnCurrentPage
//     const itemsOnCurrentPage = endIndex - startIndex + 1

//     //setPage
//     function setPage(pages){
//         setCurrentPage(pages);
//     }
    

//     //canPrevPage
//     const canPrevPage = currentPage > 1

//     //canNextPage
//     const canNextPage = currentPage < totalPages;

//     //nextPage
//     function nextPage(pageNumber){
//         if(canNextPage){
//            setCurrentPage(currentPage + 1);
//         }
        
//     }

//     //prevPage
//     function prevPage(){
//         if(canPrevPage){
//              setCurrentPage(currentPage - 1);
//         }
       
//     }

//     return{
//         canPrevPage,
//         canNextPage,
//         prevPage,
//         nextPage,
//         setPage,
//         itemsOnCurrentPage,
//         endIndex,
//         startIndex,
//         totalPages,
//         currentPage
//     }

// }

// export default usePagination;

// Objective: Create a hook to manage pagination logic for a list of items.
import { useState } from "react";

// Function Inputs:
// totalItems: The total number of items to be paginated.
// itemsPerPage: The number of items to display per page (default to 10).
// initialPage: The page to start on (default to 1).

function usePagination(totalItems,itemsPerPage = 10,initialPage = 1) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  // Implementation Details:
  // Calculate totalPages correctly (e.g., using Math.ceil).
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Ensure currentPage does not go below 1 or above totalPages.
  if (currentPage < 1) {
    setCurrentPage(1);
  } else if (currentPage > totalPages) {
    setCurrentPage(totalPages);
  }

  // startIndex and endIndex should be calculated based on the currentPage and itemsPerPage.
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage - 1;

  // itemsOnCurrentPage should correctly reflect the count for the last page if it’s not full.
  const itemsOnCurrentPage =
    endIndex < totalItems ? endIndex - startIndex + 1 : totalItems - startIndex;

  // Return Values (Object):
  return {
    currentPage, // currentPage: The current active page number.
    totalPages, // totalPages: The total number of pages calculated based on totalItems and itemsPerPage.
    startIndex, // startIndex: The starting index of items for the current page (0-based).
    endIndex, // endIndex: The ending index of items for the current page (0-based).
    itemsOnCurrentPage, // itemsOnCurrentPage: The actual number of items on the current page (useful for the last page).
    setPage: setCurrentPage, // setPage(pageNumber): A function to jump to a specific page number.
    nextPage: () => setCurrentPage(currentPage + 1), // nextPage(): A function to go to the next page.
    prevPage: () => setCurrentPage(currentPage - 1), // prevPage(): A function to go to the previous page.
    canNextPage: currentPage < totalPages, // canNextPage: Boolean indicating if there is a next page.
    canPrevPage: currentPage > 1, // canPrevPage: Boolean indicating if there is a previous page.
  };
}

export default usePagination;