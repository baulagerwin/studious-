import { useState } from "react";

function useCurrentPage(initialPage) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  return [currentPage, setCurrentPage];
}

export default useCurrentPage;
