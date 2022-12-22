import useFilterOpen from "./useFilterOpen";
import usePaginationOpen from "./usePaginationOpen";
import usePopUpOpen from "./usePopUpOpen";
import useSortOpen from "./useSortOpen";

function useOnOpen() {
  const [isFilterOpen, onFilterOpen] = useFilterOpen();
  const [isSortOpen, onSortOpen] = useSortOpen();
  const [isPaginationOpen, onPaginationOpen] = usePaginationOpen();
  const [isPopUpOpen, onPopUpOpen] = usePopUpOpen();

  return {
    isFilterOpen,
    onFilterOpen,
    isSortOpen,
    onSortOpen,
    isPaginationOpen,
    onPaginationOpen,
    isPopUpOpen,
    onPopUpOpen,
  };
}

export default useOnOpen;
