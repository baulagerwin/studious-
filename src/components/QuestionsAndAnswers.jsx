import Accordion from "../components/accordion/Accordion";

function QuestionsAndAnswers({ qnas }) {
  return (
    <>
      <p className="text-lg font-semibold">
        {qnas.length
          ? `There are ${qnas.length} question and answer in your storage.`
          : "There are no question and answer in your storage."}
      </p>

      <Accordion qnas={qnas} />
    </>
  );
}

export default QuestionsAndAnswers;
