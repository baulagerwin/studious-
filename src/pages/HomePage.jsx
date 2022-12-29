import Container from "../containers/Container";
import Settings from "../components/Settings";
import TwoThirdsContainer from "../containers/TwoThirdsContainer";
import QuestionsAndAnswers from "../components/QuestionsAndAnswers";
import mockSubjects from "./subjects";
import mockQnas from "./qnas";
import FlexColGap4 from "../layouts/FlexColGap4";
import useInitSubjects from "../hooks/homePage/useInitSubjects";
import useSettings from "../hooks/homePage/useSettings";
import PopupNewSubject from "../components/popup/PopupNewSubject";
import PopupNewQNA from "../components/popup/PopupNewQNA";
import useHomeFields from "../hooks/homePage/useHomeFields";

function HomePage() {
  let qnas = mockQnas;
  let subjects = useInitSubjects(mockSubjects, qnas);

  let initialFilterBy = "All Subjects";
  let initialSortBy = "A - Z";
  let initialSearchBy = "";
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

  const [newSubjectFields] = useHomeFields(onOpen);

  return (
    <>
      <PopupNewSubject
        isPopUpOpen={onOpen.isNewSubjectOpen}
        onPopUpOpen={onOpen.onNewSubjectOpen}
        name={newSubjectFields.name}
        onChange={newSubjectFields.handleOnChange}
        isValidating={newSubjectFields.isValidating}
        onSubmit={newSubjectFields.handleSubmit}
      />
      <PopupNewQNA
        isPopUpOpen={onOpen.isNewQNAOpen}
        onPopUpOpen={onOpen.onNewQNAOpen}
        isSubjectsOpen={onOpen.isSubjectsOpen}
        onSubjectsOpen={onOpen.onSubjectsOpen}
      />
      <Container>
        <TwoThirdsContainer>
          <FlexColGap4>
            <Settings
              initialFilterBy={initialFilterBy}
              isFilterOpen={onOpen.isFilterOpen}
              onFilterOpen={onOpen.onFilterOpen}
              filterBy={onChanges.filterBy}
              onFilterBy={onChanges.onFilterBy}
              subjects={subjects}
              initialSortBy={initialSortBy}
              isSortOpen={onOpen.isSortOpen}
              onSortOpen={onOpen.onSortOpen}
              sortBy={onChanges.sortBy}
              onSortBy={onChanges.onSortBy}
              sorters={onEffects.sorters}
              searchBy={onChanges.searchBy}
              onChange={onChanges.onChange}
              onNewSubjectOpen={onOpen.onNewSubjectOpen}
              onNewQNAOpen={onOpen.onNewQNAOpen}
            />
            <hr className="mb-10" />
            <QuestionsAndAnswers
              qnas={onEffects.results}
              onFilterOpen={onOpen.onFilterOpen}
              onSortOpen={onOpen.onSortOpen}
              isPaginationOpen={onOpen.isPaginationOpen}
              onPaginationOpen={
                !onEffects.paginatedList.length ? null : onOpen.onPaginationOpen
              }
              currentPage={
                !onEffects.paginatedList.length ? 0 : onChanges.currentPage
              }
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
