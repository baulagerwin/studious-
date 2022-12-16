import { useState } from "react";

function useCurrentPage() {
  let initialPage = 1;

  const [currentPage, setCurrentPage] = useState(initialPage);

  return [currentPage, setCurrentPage];
}

export default useCurrentPage;
