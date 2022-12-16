import Accordion from "../components/accordion/Accordion";
import Pagination from "./Pagination";

function QuestionsAndAnswers({
  qnas,
  onFilterOpen,
  onSortOpen,
  isPaginationOpen,
  onPaginationOpen,
  currentPage,
  pages,
  paginatedQnas,
  onPageChange,
  prevPage,
  nextPage,
}) {
  return (
    <>
      <div className="flex justify-between items-end">
        <p className="text-lg font-semibold">
          {qnas.length
            ? `There are ${qnas.length} question and answer in your storage.`
            : "There are no question and answer in your storage."}
        </p>
        <Pagination
          isPaginationOpen={isPaginationOpen}
          onPaginationOpen={onPaginationOpen}
          currentPage={currentPage}
          onPageChange={onPageChange}
          pages={pages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </div>

      <Accordion
        qnas={paginatedQnas}
        onFilterOpen={onFilterOpen}
        onSortOpen={onSortOpen}
        onPaginationOpen={onPaginationOpen}
      />
    </>
  );
}

export default QuestionsAndAnswers;
