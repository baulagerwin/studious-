import { useState } from "react";

function useFilter(onPageChange, qnas) {
  let initialFilter = "All Subjects";

  const [filter, setFilter] = useState(initialFilter);

  function handleFilter(value) {
    onPageChange(1);
    setFilter(value);
  }

  const filtered = filterQnas();

  function filterQnas() {
    if (filter === initialFilter) return qnas;

    return qnas.filter((qna) => qna.subject.name === filter);
  }

  return [filter, handleFilter, filtered];
}

export default useFilter;
