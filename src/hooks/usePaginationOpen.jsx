import { useState, useEffect } from "react";

function usePaginationOpen() {
  const [isPaginationOpen, setIsPaginationOpen] = useState(false);

  function handlePaginationOpen(e, value) {
    e.stopPropagation();
    setIsPaginationOpen(value);
  }

  useEffect(() => {
    document.body.addEventListener("mousedown", closeDropDown);

    return () => document.body.removeEventListener("mousedown", closeDropDown);
  }, []);

  function closeDropDown(e) {
    e.stopPropagation();

    if (e.target.id === "paginationButton") return;
    if (e.target.id === "paginationToolTip") return;

    setIsPaginationOpen(false);
  }

  return [isPaginationOpen, handlePaginationOpen];
}

export default usePaginationOpen;
