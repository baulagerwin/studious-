import Container from "../containers/Container";
import Paraphernalia from "../components/Paraphernalia";
import TwoThirdsContainer from "../containers/TwoThirdsContainer";
import QuestionsAndAnswers from "../components/QuestionsAndAnswers";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useId } from "react";

function HomePage() {
  const [filter, setFilter] = useState("All Subjects");
  const allSubjectId = useId();

  let subjects = useSelector((state) => state.entities.subjects);
  subjects = [{ _id: allSubjectId, name: "All Subjects" }, ...subjects.list];

  return (
    <Container>
      <TwoThirdsContainer>
        <Paraphernalia
          filterBy={filter}
          onFilter={setFilter}
          subjects={subjects}
        />
        <hr className="my-4" />
        {/* <QuestionsAndAnswers qnas={qnas}/> */}
      </TwoThirdsContainer>
    </Container>
  );
}

export default HomePage;
