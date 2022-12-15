import FiveGrids4x5 from "../layouts/FiveGrids4x5";
import Column from "../containers/Column";
import AddButton from "../elements/AddButton";
import ColumnSpanFull from "../containers/ColumnSpanFull";
import TextBox from "./textboxes/TextBox";
import FilterSubjects from "./dropDownMenus/FilterSubjects";
import SortQnas from "./dropDownMenus/SortQnas";

function Paraphernalia({
  isFilterOpen,
  onFilterOpen,
  filterBy,
  onFilter,
  subjects,
  isSortOpen,
  onSortOpen,
  sortBy,
  onSort,
  options,
}) {
  return (
    <FiveGrids4x5>
      <Column>
        <FilterSubjects
          isFilterOpen={isFilterOpen}
          onFilterOpen={onFilterOpen}
          filterBy={filterBy}
          onFilter={onFilter}
          subjects={subjects}
        />
      </Column>
      <Column>
        <AddButton
          text="New Subject"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM12.75 12a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V18a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V12z"
                clipRule="evenodd"
              />
              <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
            </svg>
          }
        />
      </Column>
      <Column />
      <Column>
        <SortQnas
          isSortOpen={isSortOpen}
          onSortOpen={onSortOpen}
          sortBy={sortBy}
          onSort={onSort}
          options={options}
        />
      </Column>
      <Column>
        <AddButton
          text="New Q & A"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clipRule="evenodd"
              />
            </svg>
          }
        />
      </Column>
      <ColumnSpanFull>
        <TextBox
          id="search"
          name="search"
          text="Search"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
          }
        />
      </ColumnSpanFull>
    </FiveGrids4x5>
  );
}

export default Paraphernalia;
