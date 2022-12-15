function ToolTip({
  isPaginationOpen,
  onPaginationOpen,
  currentPage,
  onPageChange,
  pages,
}) {
  // Check if the page is the same

  function handleOnMouseDown(e) {
    e.stopPropagation();
  }

  function handleOnMouseUp(e, page) {
    e.stopPropagation();

    onPageChange(page);
    onPaginationOpen(e, false);
  }

  return (
    <div
      id="paginationToolTip"
      className={`${
        isPaginationOpen ? "visible" : "invisible"
      } absolute cursor-auto overflow-auto bottom-0 right-0 -translate-y-14 bg-gray-50 text-black border-2 border-gray-100 shadow-lg h-56 w-48 rounded-lg`}
    >
      <ul className="flex flex-wrap p-1">
        {pages.map((page) => (
          <li
            key={page}
            className={`h-10 w-10 cursor-pointer flex justify-center items-center shrink-0 ${
              currentPage === page ? "bg-second rounded-md text-white" : ""
            } hover:bg-second hover:rounded-md hover:text-white`}
            onMouseDown={handleOnMouseDown}
            onMouseUp={(e) => handleOnMouseUp(e, page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToolTip;
