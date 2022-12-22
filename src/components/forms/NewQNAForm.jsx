import Center from "../../containers/Center";
import ColumnSpanFull from "../../containers/ColumnSpanFull";
import SubmitButton from "../../elements/SubmitButton";
import TwoGrids4x6 from "../../layouts/TwoGrids4x6";
import TextBox from "../textboxes/TextBox";

function NewQNAForm({ onPopUpOpen }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleOnClick(e) {
    e.stopPropagation();
  }

  return (
    <form
      className="bg-white rounded-md p-5 -translate-y-20 shadow-xl"
      onSubmit={handleSubmit}
      onClick={handleOnClick}
    >
      <TwoGrids4x6>
        <ColumnSpanFull>
          <div className="flex items-center gap-3 mb-2 relative">
            <span
              onClick={() => onPopUpOpen(false)}
              className="text-3xl absolute top-0 right-0 -translate-x-2 -translate-y-1 cursor-pointer"
            >
              &times;
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <h1 className="text-2xl font-bold">Add Q & A</h1>
          </div>
        </ColumnSpanFull>
        <ColumnSpanFull>
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
        </ColumnSpanFull>
        <ColumnSpanFull>
          <TextBox
            id="answer"
            name="answer"
            text="Answer"
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
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />
        </ColumnSpanFull>
        <ColumnSpanFull>
          <Center>
            <SubmitButton isValidating={false}>Submit</SubmitButton>
          </Center>
        </ColumnSpanFull>
      </TwoGrids4x6>
    </form>
  );
}

export default NewQNAForm;
