import AccordionItem from "./AccordionItem";

function Accordion({ qnas }) {
  return (
    <ul className="flex flex-col gap-4">
      {qnas.map((qna) => (
        <AccordionItem qna={qna} />
      ))}
    </ul>
  );
}

export default Accordion;
