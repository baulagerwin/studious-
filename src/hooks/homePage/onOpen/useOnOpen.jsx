import useFilterOpen from "./useFilterOpen";
import usePaginationOpen from "./usePaginationOpen";
import useSortOpen from "./useSortOpen";
import useNewSubjectOpen from "./useNewSubjectOpen";
import useNewQNAOpen from "./useNewQNAOpen";

function useOnOpen() {
  const [isFilterOpen, onFilterOpen] = useFilterOpen();
  const [isSortOpen, onSortOpen] = useSortOpen();
  const [isPaginationOpen, onPaginationOpen] = usePaginationOpen();
  const [isNewSubjectOpen, onNewSubjectOpen] = useNewSubjectOpen();
  const [isNewQNAOpen, onNewQNAOpen] = useNewQNAOpen();

  return {
    isFilterOpen,
    onFilterOpen,
    isSortOpen,
    onSortOpen,
    isPaginationOpen,
    onPaginationOpen,
    isNewSubjectOpen,
    onNewSubjectOpen,
    isNewQNAOpen,
    onNewQNAOpen,
  };
}

export default useOnOpen;
