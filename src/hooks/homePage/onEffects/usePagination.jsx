function usePagination(
  currentPage,
  onPageChange,
  onPaginationOpen,
  pageSize,
  list
) {
  const pages = getPages(pageSize, list);
  const paginatedList = paginate(pageSize, currentPage, list);
  const pageLength = pages.length + 1;

  function getPages(pageSize, list) {
    let pageLength = Math.ceil(list.length / pageSize);
    let pages = [];

    for (let i = 1; i <= pageLength; i++) pages.push(i);

    return pages;
  }

  function paginate(pageSize, pageNumber, list) {
    const skipLength = pageSize * (pageNumber - 1);
    const paginatedList = list.slice(skipLength, skipLength + pageSize);
    return paginatedList;
  }

  function nextPage() {
    if (!list.length) return;

    let nextPage = currentPage + 1;

    if (nextPage === pageLength) return;
    onPageChange(nextPage);
    onPaginationOpen(false);
  }

  function prevPage() {
    if (!list.length) return;

    let prevPage = currentPage - 1;

    if (prevPage === 0) return;
    onPageChange(prevPage);
    onPaginationOpen(false);
  }

  return [pages, paginatedList, nextPage, prevPage];
}

export default usePagination;
