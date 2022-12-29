import OneThirdsContainer from "../../containers/OneThirdsContainer";
import NewSubjectForm from "../forms/NewSubjectForm";
import PopupBackground from "./PopupBackground";
import PopupContent from "./PopupContent";

function PopupNewSubject({
  isPopUpOpen,
  onPopUpOpen,
  name,
  onChange,
  isValidating,
  onSubmit,
}) {
  return (
    <>
      <PopupBackground isPopUpOpen={isPopUpOpen} />
      <PopupContent isPopUpOpen={isPopUpOpen}>
        <OneThirdsContainer>
          <NewSubjectForm
            onPopUpOpen={onPopUpOpen}
            name={name}
            onChange={onChange}
            isValidating={isValidating}
            onSubmit={onSubmit}
          />
        </OneThirdsContainer>
      </PopupContent>
    </>
  );
}

export default PopupNewSubject;
