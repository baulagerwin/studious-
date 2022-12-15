import SortQnasItem from "./SortQnasItem";

function SortQnas({ isSortOpen, onSortOpen, sortBy, onSort, options }) {
  let limitLength = 6;

  return (
    <div className="relative h-full w-full">
      <button
        type="button"
        id="sortButton"
        className={`px-4 py-2 flex items-center justify-between border rounded-md h-full w-full ${
          isSortOpen ? "border-second" : ""
        } cursor-pointer select-none`}
        onClick={(e) => onSortOpen(e, !isSortOpen)}
      >
        <div id="sortText" className="text-md">
          {Boolean(sortBy) ? sortBy : "All Subjects"}
        </div>
        <svg
          id="sortIcon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-4 h-4 ${isSortOpen ? "rotate-90" : "rotate-0"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <ul
        id="sortList"
        className={`absolute left-0 top-full translate-y-1 w-full border rounded-md cursor-pointer bg-white z-10 shadow ${
          options.length > limitLength ? "h-60 overflow-y-auto" : "h-auto"
        } ${isSortOpen ? "visible" : "invisible"}`}
      >
        {options.map((item) => (
          <li key={item._id}>
            <SortQnasItem
              sortBy={sortBy}
              onSort={onSort}
              onOpen={onSortOpen}
              item={item}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortQnas;
