import { useState, useEffect } from "react";

function usePaginationOpen(paginatedList) {
  const [isPaginationOpen, setIsPaginationOpen] = useState(false);

  function handlePaginationOpen(e, value) {
    e.stopPropagation();
    if (!paginatedList.length) return;

    setIsPaginationOpen(value);
  }

  useEffect(() => {
    document.body.addEventListener("mousedown", closeDropDown);

    return () => document.body.removeEventListener("mousedown", closeDropDown);
  }, []);

  function closeDropDown(e) {
    e.stopPropagation();

    if (e.target.id === "paginationButton") return;
    if (e.target.id === "paginationContainer") return;
    if (e.target.id === "paginationCurrentPage") return;
    if (e.target.id === "paginationDash") return;
    if (e.target.id === "paginationPageLength") return;
    if (e.target.id === "paginationIcon") return;
    if (e.target.id === "paginationToolTip") return;

    setIsPaginationOpen(false);
  }

  return [isPaginationOpen, handlePaginationOpen];
}

export default usePaginationOpen;
