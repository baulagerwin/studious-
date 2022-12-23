import { useState, useEffect } from "react";

function usePaginationOpen() {
  const [isPaginationOpen, setIsPaginationOpen] = useState(false);

  function handlePaginationOpen(value) {
    setIsPaginationOpen(value);
  }

  useEffect(() => {
    document.body.addEventListener("mousedown", close);

    return () => document.body.removeEventListener("mousedown", close);
  }, []);

  function close() {
    setIsPaginationOpen(false);
  }

  return [isPaginationOpen, handlePaginationOpen];
}

export default usePaginationOpen;
