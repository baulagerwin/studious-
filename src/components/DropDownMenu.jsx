import { useState } from "react";
import useCloseDropDown from "../hooks/useCloseDropDown";

function DropDownMenu({ name }) {
  const [isOpen, setIsOpen] = useState(false);

  useCloseDropDown(closeDropDown);

  function closeDropDown(e) {
    if (e.target.name !== name) setIsOpen(false);
  }

  function handleOnClick(e) {
    e.stopPropagation();
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative h-full w-full">
      <button
        name={name}
        className={`px-4 py-2 flex items-center justify-between border rounded-md h-full w-full ${
          isOpen ? "border-second" : ""
        } cursor-pointer select-none`}
        onClick={handleOnClick}
      >
        <div
          className="text-md"
          onClick={(e) => {
            e.target.name = name;
            handleOnClick(e);
          }}
        >
          All Subjects
        </div>
        <svg
          onClick={(e) => {
            e.target.name = name;
            handleOnClick(e);
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-4 h-4 ${isOpen ? "rotate-90" : "rotate-0"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <ul
        className={`absolute left-0 top-full translate-y-1 w-full border rounded-md cursor-pointer bg-white z-10 shadow ${
          isOpen ? "" : "hidden"
        }`}
      >
        <li className="px-4 py-2 flex items-center gap-1 hover:bg-secondTint rounded-md">
          <div>Unclassified</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <div className="shrink-0">50</div>
        </li>
        <li className="px-4 py-2 flex items-center gap-1 hover:bg-secondTint rounded-md">
          <div>HTML</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <div className="shrink-0">43</div>
        </li>
        <li className="px-4 py-2 flex items-center gap-1 hover:bg-secondTint rounded-md">
          <div>Consitution of the Philippines</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <div className="shrink-0">77</div>
        </li>
      </ul>
    </div>
  );
}

export default DropDownMenu;
