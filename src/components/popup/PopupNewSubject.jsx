import OneThirdsContainer from "../../containers/OneThirdsContainer";
import NewSubjectForm from "../forms/NewSubjectForm";
import PopupBackground from "./PopupBackground";
import PopupContent from "./PopupContent";

function PopupNewSubject({ isPopUpOpen, onPopUpOpen }) {
  return (
    <>
      <PopupBackground isPopUpOpen={isPopUpOpen} />
      <PopupContent isPopUpOpen={isPopUpOpen} onPopUpOpen={onPopUpOpen}>
        <OneThirdsContainer>
          <NewSubjectForm onPopUpOpen={onPopUpOpen} />
        </OneThirdsContainer>
      </PopupContent>
    </>
  );
}

export default PopupNewSubject;
