import { useState } from "react";

function useCurrentPage(initialPage) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  function onInitialPage() {
    setCurrentPage(initialPage);
  }

  return [currentPage, setCurrentPage, onInitialPage];
}

export default useCurrentPage;
