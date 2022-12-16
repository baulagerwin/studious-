function ToolTip({
  isPaginationOpen,
  onPaginationOpen,
  currentPage,
  onPageChange,
  pages,
}) {
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
      } absolute cursor-auto overflow-auto top-0 -left-5 translate-y-9 -translate-x-24 bg-white border  shadow-xl h-56 w-48 rounded-tl-md rounded-bl-md`}
    >
      <ul className="flex flex-wrap p-1">
        {pages.map((page) => (
          <li
            key={page}
            className={`h-10 w-10 cursor-pointer flex justify-center items-center shrink-0 text-md font-medium ${
              currentPage === page
                ? "bg-slate-200 rounded-md"
                : "text-slate-400"
            } `}
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
