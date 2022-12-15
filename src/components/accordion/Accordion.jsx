import AccordionItem from "./AccordionItem";

function Accordion({ qnas, onFilterOpen, onSortOpen, onPaginationOpen }) {
  return (
    <ul className="flex flex-col gap-4">
      {qnas.map((qna) => (
        <AccordionItem
          key={qna._id}
          qna={qna}
          onFilterOpen={onFilterOpen}
          onSortOpen={onSortOpen}
          onPaginationOpen={onPaginationOpen}
        />
      ))}
    </ul>
  );
}

export default Accordion;
