import FilterSubjectsItem from "./FilterSubjectsItem";

function FilterSubjects({
  isFilterOpen,
  onFilterOpen,
  filterBy,
  onFilter,
  subjects,
}) {
  let limitLength = 6;

  return (
    <div className="relative h-full w-full">
      <button
        type="button"
        id="filterButton"
        className={`px-4 py-2 flex items-center justify-between border rounded-md h-full w-full ${
          isFilterOpen ? "border-second" : ""
        } cursor-pointer select-none`}
        onClick={(e) => onFilterOpen(e, !isFilterOpen)}
      >
        <div id="filterText" className="text-md">
          {filterBy}
        </div>
        <svg
          id="filterIcon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-4 h-4 ${isFilterOpen ? "rotate-90" : "rotate-0"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <ul
        id="filterList"
        className={`absolute left-0 top-full translate-y-1 w-full border rounded-md cursor-pointer bg-white z-10 shadow ${
          subjects.length > limitLength ? "h-60 overflow-y-auto" : "h-auto"
        } ${isFilterOpen ? "visible" : "invisible"}`}
      >
        {subjects.map((item) => (
          <li key={item._id}>
            <FilterSubjectsItem
              filterBy={filterBy}
              onFilter={onFilter}
              onOpen={onFilterOpen}
              item={item}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterSubjects;
