import Center from "../../containers/Center";
import ColumnSpanFull from "../../containers/ColumnSpanFull";
import SubmitButton from "../../elements/SubmitButton";
import TwoGrids4x6 from "../../layouts/TwoGrids4x6";
import TextBox from "../textboxes/TextBox";

function NewSubjectForm({ onPopUpOpen }) {
  function handleSubmit(e) {
    e.preventDefault();

    onPopUpOpen(false);
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
          <div className="flex items-center gap-3 mb-3 relative">
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
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>

            <h1 className="text-2xl font-bold">Add Subject</h1>
          </div>
        </ColumnSpanFull>
        <ColumnSpanFull>
          <TextBox
            id="newSubjectName"
            name="newSubjectName"
            text="Name"
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
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
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

export default NewSubjectForm;
