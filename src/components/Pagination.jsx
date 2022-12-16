import ToolTip from "./ToolTip";

function Pagination({
  isPaginationOpen,
  onPaginationOpen,
  currentPage,
  onPageChange,
  pages,
  prevPage,
  nextPage,
}) {
  return (
    <div className="flex relative">
      <ToolTip
        isPaginationOpen={isPaginationOpen}
        onPaginationOpen={onPaginationOpen}
        currentPage={currentPage}
        onPageChange={onPageChange}
        pages={pages}
      />
      <button
        type="button"
        id="paginationButton"
        className="flex items-center gap-1 border px-3 py-1 rounded-tl-md rounded-bl-md"
        onClick={(e) => onPaginationOpen(e, !isPaginationOpen)}
      >
        <div
          id="paginationContainer"
          className="text-md font-medium flex items-center gap-1"
        >
          <span id="paginationCurrentPage">{currentPage}</span>
          <span id="paginationDash" className="text-slate-400 text-xs">
            /
          </span>
          <span id="paginationPageLength" className="text-slate-400">
            {pages.length}
          </span>
        </div>
        <svg
          id="paginationIcon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className={`w-4 h-4 text-slate-400`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <button
        type="button"
        className="px-3 py-1 border-t border-b text-slate-400 hover:bg-slate-200 hover:text-black"
        onClick={prevPage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        type="button"
        className="px-3 py-1 border rounded-tr-md rounded-br-md text-slate-400 hover:bg-slate-200 hover:text-black"
        onClick={nextPage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default Pagination;
