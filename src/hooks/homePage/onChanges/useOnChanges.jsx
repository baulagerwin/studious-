import useCurrentPage from "./useCurrentPage";
import useSearchBy from "./useSearchBy";
import useFilterBy from "./useFilterBy";
import useSortBy from "./useSortBy";

function useOnChanges(
  initialFilterBy,
  initialSortBy,
  initialSearchBy,
  initialPage
) {
  const [currentPage, onPageChange, onInitialPage] =
    useCurrentPage(initialPage);

  const [searchBy, onChange, onEmptySearchBy, setTheFilterBy] = useSearchBy(
    initialSearchBy,
    initialFilterBy
  );

  const [filterBy, onFilterBy] = useFilterBy(
    initialFilterBy,
    onInitialPage,
    onEmptySearchBy,
    setTheFilterBy
  );

  const [sortBy, onSortBy] = useSortBy(initialSortBy, onInitialPage);

  return {
    initialFilterBy,
    filterBy,
    onFilterBy,
    sortBy,
    onSortBy,
    searchBy,
    onChange,
    currentPage,
    onPageChange,
  };
}

export default useOnChanges;
