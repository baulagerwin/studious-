import useFilter from "./useFilter";
import usePagination from "./usePagination";
import useSearch from "./useSearch";
import useSort from "./useSort";

function useOnEffects(
  initialFilterBy,
  filterBy,
  sortBy,
  searchBy,
  pageSize,
  currentPage,
  onPageChange,
  onPaginationOpen,
  qnas
) {
  const filtered = useFilter(initialFilterBy, filterBy, qnas);
  const results = useSearch(searchBy, filtered);
  const [sorters, sorted] = useSort(sortBy, results);
  const [pages, paginatedList, nextPage, prevPage] = usePagination(
    currentPage,
    onPageChange,
    onPaginationOpen,
    pageSize,
    sorted
  );

  return {
    sortBy,
    sorters,
    pages,
    paginatedList,
    results,
    nextPage,
    prevPage,
  };
}

export default useOnEffects;
