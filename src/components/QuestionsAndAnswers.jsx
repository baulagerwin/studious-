import Accordion from "../components/accordion/Accordion";

function QuestionsAndAnswers({ qnas }) {
  return (
    <>
      <p className="text-lg font-semibold mt-12 mb-4">
        {qnas.length
          ? "There are 325 question and answer in your storage."
          : "There are no question and answer in your storage."}
      </p>

      <Accordion qnas={qnas} />
    </>
  );
}

export default QuestionsAndAnswers;
