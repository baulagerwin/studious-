import { useState, useEffect } from "react";

function useSortOpen() {
  const [isSortOpen, setIsSortOpen] = useState(false);

  function handleSortOpen(value) {
    setIsSortOpen(value);
  }

  useEffect(() => {
    document.body.addEventListener("mousedown", close);

    return () => document.body.removeEventListener("mousedown", close);
  }, []);

  function close() {
    setIsSortOpen(false);
  }

  return [isSortOpen, handleSortOpen];
}

export default useSortOpen;
