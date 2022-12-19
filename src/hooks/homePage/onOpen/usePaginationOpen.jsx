import { useState, useEffect } from "react";

function usePaginationOpen() {
  const [isPaginationOpen, setIsPaginationOpen] = useState(false);

  function handlePaginationOpen(e, value) {
    e.stopPropagation();

    setIsPaginationOpen(value);
  }

  useEffect(() => {
    document.body.addEventListener("mousedown", close);

    return () => document.body.removeEventListener("mousedown", close);
  }, []);

  function close(e) {
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
