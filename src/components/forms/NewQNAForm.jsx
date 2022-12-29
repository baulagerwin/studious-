import { useState } from "react";
import Center from "../../containers/Center";
import SubmitButton from "../../elements/SubmitButton";
import DropDownMenu from "../dropDownMenus/DropDownMenu";
import TextBox from "../textboxes/TextBox";
import TextPack from "../textboxes/TextPack";
import mockSubjects from "../../pages/subjects";
import useOpen from "../../hooks/homePage/onOpen/useOpen";

function NewQNAForm({ onPopUpOpen }) {
  let initialSubject = mockSubjects[0].name;
  const [subject, setIsSubject] = useState(initialSubject);
  const [isOpen, onOpen] = useOpen();

  function handleSubmit(e) {
    e.preventDefault();
    onPopUpOpen(false);
  }

  return (
    <form
      className="bg-white rounded-md py-6 px-8 -translate-y-0 shadow-xl"
      onSubmit={handleSubmit}
      onMouseDown={(e) => {
        onOpen(false);
        e.stopPropagation();
      }}
    >
      <div className="flex flex-col gap-4 mb-4">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <h1 className="text-xl font-semibold">
              Add new question and answer
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 cursor-pointer"
              onClick={() => onPopUpOpen(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <hr />
        </div>

        <DropDownMenu
          initialXBy={initialSubject}
          isXOpen={isOpen}
          onXOpen={onOpen}
          xBy={subject}
          onXBy={setIsSubject}
          limitLength={4}
          items={mockSubjects}
          swipeable={false}
        />

        <TextBox
          id="question"
          name="question"
          text="Question"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
          }
        />
        <TextPack id="answer" name="answer" text="Answer" />
      </div>
      <Center>
        <SubmitButton isValidating={false}>Submit</SubmitButton>
      </Center>
    </form>
  );
}

export default NewQNAForm;
