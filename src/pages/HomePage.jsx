import Container from "../containers/Container";
import Paraphernalia from "../components/Paraphernalia";
import TwoThirdsContainer from "../containers/TwoThirdsContainer";
import QuestionsAndAnswers from "../components/QuestionsAndAnswers";
import mockSubjects from "./subjects";
import mockQnas from "./qnas";
import FlexColGap4 from "../layouts/FlexColGap4";
import useSort from "../hooks/useSort";
import useFilterOpen from "../hooks/useFilterOpen";
import useSortOpen from "../hooks/useSortOpen";
import usePagination from "../hooks/usePagination";
import usePaginationOpen from "../hooks/usePaginationOpen";
import useFilter from "../hooks/useFilter";
import useCurrentPage from "../hooks/useCurrentPage";
import useInitSubjects from "../hooks/useInitSubjects";
import useSearch from "../hooks/useSearch";
import useSearchBy from "../hooks/useSearchBy";
import useFilterBy from "../hooks/useFilterBy";

function HomePage() {
  let initialFilter = "All Subjects";
  let pageSize = 5;

  let qnas = mockQnas;
  let subjects = useInitSubjects(mockSubjects, qnas);

  const [currentPage, onPageChange] = useCurrentPage(1);
  const [searchBy, onChange, onEmptySearchBy] = useSearchBy("", initialFilter);
  const [filterBy, onFilter] = useFilterBy(
    initialFilter,
    onPageChange,
    onEmptySearchBy
  );

  const filtered = useFilter(initialFilter, filterBy, qnas);
  const results = useSearch(searchBy, filtered);
  const [sortBy, onSort, sorters, sorted] = useSort("A - Z", results);
  const [pages, paginatedList, nextPage, prevPage] = usePagination(
    currentPage,
    onPageChange,
    pageSize,
    sorted
  );

  const [isFilterOpen, onFilterOpen] = useFilterOpen();
  const [isSortOpen, onSortOpen] = useSortOpen();
  const [isPaginationOpen, onPaginationOpen] = usePaginationOpen(paginatedList);

  return (
    <Container>
      <TwoThirdsContainer>
        <FlexColGap4>
          <Paraphernalia
            isFilterOpen={isFilterOpen}
            onFilterOpen={onFilterOpen}
            filterBy={filterBy}
            onFilter={onFilter}
            subjects={subjects}
            isSortOpen={isSortOpen}
            onSortOpen={onSortOpen}
            sortBy={sortBy}
            onSort={onSort}
            options={sorters}
            searchBy={searchBy}
            onChange={onChange}
          />
          <hr className="mb-10" />
          <QuestionsAndAnswers
            qnas={results}
            onFilterOpen={onFilterOpen}
            onSortOpen={onSortOpen}
            isPaginationOpen={isPaginationOpen}
            onPaginationOpen={onPaginationOpen}
            currentPage={!paginatedList.length ? 0 : currentPage}
            pages={pages}
            paginatedQnas={paginatedList}
            onPageChange={onPageChange}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        </FlexColGap4>
      </TwoThirdsContainer>
    </Container>
  );
}

export default HomePage;
