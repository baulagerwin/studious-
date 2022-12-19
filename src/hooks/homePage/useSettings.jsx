import useOnChanges from "./onChanges/useOnChanges";
import useOnEffects from "./onEffects/useOnEffects";
import useOnOpen from "./onOpen/useOnOpen";

function useSettings(
  initialFilterBy,
  initialSortBy,
  initialSearchBy,
  initialPage,
  pageSize,
  qnas
) {
  const onOpen = useOnOpen();

  const onChanges = useOnChanges(
    initialFilterBy,
    initialSortBy,
    initialSearchBy,
    initialPage
  );

  const onEffects = useOnEffects(
    onChanges.initialFilterBy,
    onChanges.filterBy,
    onChanges.sortBy,
    onChanges.searchBy,
    pageSize,
    onChanges.currentPage,
    onChanges.onPageChange,
    qnas
  );

  return [onOpen, onChanges, onEffects];
}

export default useSettings;
