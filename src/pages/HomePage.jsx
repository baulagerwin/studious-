import Container from "../containers/Container";
import Paraphernalia from "../components/Paraphernalia";
import TwoThirdsContainer from "../containers/TwoThirdsContainer";
import QuestionsAndAnswers from "../components/QuestionsAndAnswers";
import mockSubjects from "./subjects";
import mockQnas from "./qnas";
import getSubjects from "./getSubjects";
import FlexColGap4 from "../layouts/FlexColGap4";
import useSort from "../hooks/useSort";
import useFilterOpen from "../hooks/useFilterOpen";
import useSortOpen from "../hooks/useSortOpen";
import usePagination from "../hooks/usePagination";
import usePaginationOpen from "../hooks/usePaginationOpen";
import useFilter from "../hooks/useFilter";
import useCurrentPage from "../hooks/useCurrentPage";

function HomePage() {
  let pageSize = 5;

  let qnas = mockQnas;
  let subjects = getSubjects(mockSubjects, qnas);

  const [isFilterOpen, onFilterOpen] = useFilterOpen();
  const [isSortOpen, onSortOpen] = useSortOpen();
  const [isPaginationOpen, onPaginationOpen] = usePaginationOpen();

  const [currentPage, onPageChange] = useCurrentPage();
  const [filter, onFilter, filtered] = useFilter(onPageChange, qnas);
  const [sort, onSort, sorters, sorted] = useSort(filtered);
  const [pages, paginatedList, nextPage, prevPage] = usePagination(
    currentPage,
    onPageChange,
    pageSize,
    sorted
  );

  return (
    <Container>
      <TwoThirdsContainer>
        <FlexColGap4>
          <Paraphernalia
            isFilterOpen={isFilterOpen}
            onFilterOpen={onFilterOpen}
            filterBy={filter}
            onFilter={onFilter}
            subjects={subjects}
            isSortOpen={isSortOpen}
            onSortOpen={onSortOpen}
            sortBy={sort}
            onSort={onSort}
            options={sorters}
          />
          <hr className="mb-10" />
          <QuestionsAndAnswers
            qnas={filtered}
            onFilterOpen={onFilterOpen}
            onSortOpen={onSortOpen}
            isPaginationOpen={isPaginationOpen}
            onPaginationOpen={onPaginationOpen}
            currentPage={currentPage}
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
