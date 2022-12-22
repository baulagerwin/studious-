import Container from "../containers/Container";
import Settings from "../components/Settings";
import TwoThirdsContainer from "../containers/TwoThirdsContainer";
import QuestionsAndAnswers from "../components/QuestionsAndAnswers";
import mockSubjects from "./subjects";
import mockQnas from "./qnas";
import FlexColGap4 from "../layouts/FlexColGap4";
import useInitSubjects from "../hooks/homePage/useInitSubjects";
import useSettings from "../hooks/homePage/useSettings";
import NewSubjectForm from "../components/forms/NewSubjectForm";
import PopupBackground from "../components/popup/PopupBackground";
import PopupContent from "../components/popup/PopupContent";
import OneThirdsContainer from "../containers/OneThirdsContainer";
import NewQNAForm from "../components/forms/NewQNAForm";

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
    <>
      <PopupBackground isPopUpOpen={onOpen.isPopUpOpen} />
      <PopupContent
        isPopUpOpen={onOpen.isPopUpOpen}
        onPopUpOpen={onOpen.onPopUpOpen}
      >
        <OneThirdsContainer>
          {/* <NewSubjectForm onPopUpOpen={onOpen.onPopUpOpen} /> */}
          <NewQNAForm onPopUpOpen={onOpen.onPopUpOpen} />
        </OneThirdsContainer>
      </PopupContent>
      <Container>
        <TwoThirdsContainer>
          <FlexColGap4>
            <Settings
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
              isPopUpOpen={onOpen.isPopUpOpen}
              onPopUpOpen={onOpen.onPopUpOpen}
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
    </>
  );
}

export default HomePage;
