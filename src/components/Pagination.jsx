import ToolTip from "./ToolTip";

function Pagination({
  isPaginationOpen,
  onPaginationOpen,
  currentPage,
  onPageChange,
  pages,
}) {
  return (
    <div className="flex text-zinc-600 rounded-md self-end relative">
      <ToolTip
        isPaginationOpen={isPaginationOpen}
        onPaginationOpen={onPaginationOpen}
        currentPage={currentPage}
        onPageChange={onPageChange}
        pages={pages}
      />
      <button
        type="button"
        className="flex justify-center items-center rounded-tl-md rounded-bl-md hover:bg-second hover:text-white active:text-first shadow-lg h-10 w-10 relative after:content-[''] after:bg-grey after:absolute after:w-px after:opacity-100 after:h-1/2 after:left-full after:top-1/2 after:-translate-y-1/2 after:-translate-x-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4}
          stroke="currentColor"
          className="w-5 h-5"
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
        id="paginationButton"
        className={`flex justify-center items-center border-transparent ${
          isPaginationOpen ? "bg-second text-white rounded-md" : ""
        } hover:bg-second hover:text-white active:text-first hover:rounded-md text-xl h-10 w-10 px-0.5 shadow-lg cursor-pointer`}
        onClick={(e) => onPaginationOpen(e, !isPaginationOpen)}
      >
        {currentPage}
      </button>
      <button
        type="button"
        className="flex justify-center items-center rounded-br-md rounded-tr-md hover:bg-second hover:text-white active:text-first shadow-lg h-10 w-10 relative before:content-[''] before:bg-grey before:absolute before:w-px before:opacity-100 before:h-1/2 before:left-0 before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4}
          stroke="currentColor"
          className="w-5 h-5"
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
