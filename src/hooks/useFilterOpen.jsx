import { useState, useEffect } from "react";

function useFilterOpen() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  function handleFilterOpen(e, value) {
    e.stopPropagation();
    setIsFilterOpen(value);
  }

  useEffect(() => {
    document.body.addEventListener("mousedown", closeDropDown);

    return () => document.body.removeEventListener("mousedown", closeDropDown);
  }, []);

  function closeDropDown(e) {
    e.stopPropagation();

    if (e.target.id === "filterButton") return;
    if (e.target.id === "filterText") return;
    if (e.target.id === "filterIcon") return;
    if (e.target.id === "filterList") return;

    setIsFilterOpen(false);
  }

  return [isFilterOpen, handleFilterOpen];
}

export default useFilterOpen;
