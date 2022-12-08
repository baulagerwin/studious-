import Container from "../containers/Container";
import Paraphernalia from "../components/Paraphernalia";
import TwoThirdsContainer from "../containers/TwoThirdsContainer";
import QuestionsAndAnswers from "../components/QuestionsAndAnswers";

function HomePage() {
  return (
    <Container>
      <TwoThirdsContainer>
        {/* <Paraphernalia /> */}
        <hr className="my-4" />
        {/* <QuestionsAndAnswers qnas={qnas}/> */}
      </TwoThirdsContainer>
    </Container>
  );
}

export default HomePage;
