function useSearch(searchBy, list) {
  if (!Boolean(searchBy)) return list;

  const results = list.filter(
    (item) => !(item.question.toLocaleLowerCase().indexOf(searchBy) < 0)
  );

  return results;
}

export default useSearch;
