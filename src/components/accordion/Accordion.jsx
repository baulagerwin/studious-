import AccordionItem from "./AccordionItem";

function Accordion({ qnas }) {
  return (
    <ul className="flex flex-col gap-4">
      {qnas.map((qna) => (
        <AccordionItem key={qna._id} qna={qna} />
      ))}
    </ul>
  );
}

export default Accordion;
