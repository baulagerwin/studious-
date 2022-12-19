import { useState, useEffect } from "react";

function useSortOpen() {
  const [isSortOpen, setIsSortOpen] = useState(false);

  function handleSortOpen(e, value) {
    e.stopPropagation();
    setIsSortOpen(value);
  }

  useEffect(() => {
    document.body.addEventListener("mousedown", close);

    return () => document.body.removeEventListener("mousedown", close);
  }, []);

  function close(e) {
    e.stopPropagation();

    if (e.target.id === "sortButton") return;
    if (e.target.id === "sortText") return;
    if (e.target.id === "sortIcon") return;
    if (e.target.id === "sortList") return;

    setIsSortOpen(false);
  }

  return [isSortOpen, handleSortOpen];
}

export default useSortOpen;