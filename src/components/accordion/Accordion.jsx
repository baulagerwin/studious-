import AccordionItem from "./AccordionItem";

function Accordion({ qnas, onFilterOpen }) {
  return (
    <ul className="flex flex-col gap-4">
      {qnas.map((qna) => (
        <AccordionItem key={qna._id} qna={qna} onFilterOpen={onFilterOpen} />
      ))}
    </ul>
  );
}

export default Accordion;
