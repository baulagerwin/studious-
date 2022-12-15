import Container from "../containers/Container";
import Paraphernalia from "../components/Paraphernalia";
import TwoThirdsContainer from "../containers/TwoThirdsContainer";
import QuestionsAndAnswers from "../components/QuestionsAndAnswers";
import { useState } from "react";
import mockSubjects from "./subjects";
import mockQnas from "./qnas";
import getSubjects from "./getSubjects";
import FlexColGap4 from "../layouts/FlexColGap4";
import useFilterOpen from "../hooks/useFilterOpen";
import useSortOpen from "../hooks/useSortOpen";
import usePaginationOpen from "../hooks/usePaginationOpen";
import sorter from "./sorter";
import Pagination from "../components/Pagination";

function HomePage() {
  const [isFilterOpen, handleFilterOpen] = useFilterOpen();
  const [isSortOpen, handleSortOpen] = useSortOpen();
  const [isPaginationOpen, handlePaginationOpen] = usePaginationOpen();

  const [filter, setFilter] = useState("All Subjects");
  const [sort, setSort] = useState("A - Z");
  const [currentPage, setCurrentPage] = useState(1);

  let qnas = mockQnas;
  let subjects = getSubjects(mockSubjects, qnas);
  const pages = [1, 2, 3];

  return (
    <Container>
      <TwoThirdsContainer>
        <FlexColGap4>
          <Paraphernalia
            isFilterOpen={isFilterOpen}
            onFilterOpen={handleFilterOpen}
            filterBy={filter}
            onFilter={setFilter}
            subjects={subjects}
            isSortOpen={isSortOpen}
            onSortOpen={handleSortOpen}
            sortBy={sort}
            onSort={setSort}
            options={sorter}
          />
          <hr className="mb-10" />
          <QuestionsAndAnswers
            qnas={qnas}
            onFilterOpen={handleFilterOpen}
            onSortOpen={handleSortOpen}
            onPaginationOpen={handlePaginationOpen}
          />
          <Pagination
            isPaginationOpen={isPaginationOpen}
            onPaginationOpen={handlePaginationOpen}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            pages={pages}
          />
        </FlexColGap4>
      </TwoThirdsContainer>
    </Container>
  );
}

export default HomePage;
