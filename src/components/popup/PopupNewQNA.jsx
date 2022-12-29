import OneThirdsContainer from "../../containers/OneThirdsContainer";
import NewQNAForm from "../forms/NewQNAForm";
import PopupBackground from "./PopupBackground";
import PopupContent from "./PopupContent";

function PopupNewQNA({ isPopUpOpen, onPopUpOpen }) {
  return (
    <>
      <PopupBackground isPopUpOpen={isPopUpOpen} />
      <PopupContent isPopUpOpen={isPopUpOpen}>
        <OneThirdsContainer>
          <NewQNAForm onPopUpOpen={onPopUpOpen} />
        </OneThirdsContainer>
      </PopupContent>
    </>
  );
}

export default PopupNewQNA;
