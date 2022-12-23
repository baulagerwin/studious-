import Center from "../../containers/Center";
import SubmitButton from "../../elements/SubmitButton";
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
      className="bg-white rounded-md py-6 px-8 -translate-y-1/4 shadow-xl"
      onSubmit={handleSubmit}
      onClick={handleOnClick}
    >
      <div className="flex flex-col gap-6 mb-4">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <h1 className="text-xl font-semibold">Add new subject</h1>
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
        <TextBox
          id="subjectName"
          name="subjectName"
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
      </div>
      <Center>
        <SubmitButton isValidating={false}>Submit</SubmitButton>
      </Center>
    </form>
  );
}

export default NewSubjectForm;
