function useFilter(initialFilter, filterBy, qnas) {
  if (filterBy === initialFilter) return qnas;

  return qnas.filter((item) => item.subject.name === filterBy);
}

export default useFilter;
