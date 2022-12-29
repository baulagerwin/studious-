import useOpen from "./useOpen";

function useOnOpen() {
  const [isFilterOpen, onFilterOpen] = useOpen();
  const [isSortOpen, onSortOpen] = useOpen();
  const [isPaginationOpen, onPaginationOpen] = useOpen();
  const [isNewSubjectOpen, onNewSubjectOpen] = useOpen();
  const [isNewQNAOpen, onNewQNAOpen] = useOpen();

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
