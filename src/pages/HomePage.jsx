import Container from "../containers/Container";
import Paraphernalia from "../components/Paraphernalia";
import TwoThirdsContainer from "../containers/TwoThirdsContainer";
import QuestionsAndAnswers from "../components/QuestionsAndAnswers";
import mockSubjects from "./subjects";
import mockQnas from "./qnas";
import FlexColGap4 from "../layouts/FlexColGap4";
import useInitSubjects from "../hooks/homePage/useInitSubjects";
import useSettings from "../hooks/homePage/useSettings";

function HomePage() {
  let qnas = mockQnas;
  let subjects = useInitSubjects(mockSubjects, qnas);

  let initialFilterBy = "All Subjects";
  let initialSortBy = "A - Z";
  let initialSearchBy;
  let initialPage = 1;
  let pageSize = 5;

  const [onOpen, onChanges, onEffects] = useSettings(
    initialFilterBy,
    initialSortBy,
    initialSearchBy,
    initialPage,
    pageSize,
    qnas
  );

  const validateCurrentPage = !onEffects.paginatedList.length
    ? 0
    : onChanges.currentPage;

  const validateOnPaginationOpen = !onEffects.paginatedList.length
    ? null
    : onOpen.onPaginationOpen;

  return (
    <Container>
      <TwoThirdsContainer>
        <FlexColGap4>
          <Paraphernalia
            isFilterOpen={onOpen.isFilterOpen}
            onFilterOpen={onOpen.onFilterOpen}
            filterBy={onChanges.filterBy}
            onFilterBy={onChanges.onFilterBy}
            subjects={subjects}
            isSortOpen={onOpen.isSortOpen}
            onSortOpen={onOpen.onSortOpen}
            sortBy={onChanges.sortBy}
            onSort={onChanges.onSortBy}
            options={onEffects.sorters}
            searchBy={onChanges.searchBy}
            onChange={onChanges.onChange}
          />
          <hr className="mb-10" />
          <QuestionsAndAnswers
            qnas={onEffects.results}
            onFilterOpen={onOpen.onFilterOpen}
            onSortOpen={onOpen.onSortOpen}
            isPaginationOpen={onOpen.isPaginationOpen}
            onPaginationOpen={validateOnPaginationOpen}
            currentPage={validateCurrentPage}
            pages={onEffects.pages}
            paginatedQnas={onEffects.paginatedList}
            onPageChange={onChanges.onPageChange}
            prevPage={onEffects.prevPage}
            nextPage={onEffects.nextPage}
          />
        </FlexColGap4>
      </TwoThirdsContainer>
    </Container>
  );
}

export default HomePage;
