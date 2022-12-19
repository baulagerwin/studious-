import useFilterOpen from "./useFilterOpen";
import usePaginationOpen from "./usePaginationOpen";
import useSortOpen from "./useSortOpen";

function useOnOpen() {
  const [isFilterOpen, onFilterOpen] = useFilterOpen();
  const [isSortOpen, onSortOpen] = useSortOpen();
  const [isPaginationOpen, onPaginationOpen] = usePaginationOpen();

  return {
    isFilterOpen,
    onFilterOpen,
    isSortOpen,
    onSortOpen,
    isPaginationOpen,
    onPaginationOpen,
  };
}

export default useOnOpen;
