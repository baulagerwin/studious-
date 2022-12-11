import { useState, useRef, useEffect } from "react";
import DropDownMenuItem from "./DropDownMenuItem";

function DropDownMenu({ name, filterBy, onFilter, list }) {
  const [isOpen, setIsOpen] = useState(false);
  const unorderedListRef = useRef(null);
  let limitLength = 6;

  useEffect(() => {
    document.body.addEventListener("mousedown", closeDropDown);

    return () => document.body.removeEventListener("mousedown", closeDropDown);
  }, []);

  function closeDropDown(e) {
    e.stopPropagation();
    let ulClicked = false;

    for (let node of e.path)
      if (unorderedListRef.current === node) {
        ulClicked = true;
        break;
      }

    if (e.target.name !== name && !ulClicked) setIsOpen(false);

    ulClicked = false;
  }

  function handleOnClick(e) {
    e.stopPropagation();
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative h-full w-full">
      <button
        className={`px-4 py-2 flex items-center justify-between border rounded-md h-full w-full ${
          isOpen ? "border-second" : ""
        } cursor-pointer select-none`}
        onClick={(e) => {
          e.target.name = name;
          handleOnClick(e);
        }}
      >
        <div
          className="text-md"
          onClick={(e) => {
            e.target.name = name;
            handleOnClick(e);
          }}
        >
          {Boolean(filterBy) ? filterBy : "All Subjects"}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-4 h-4 ${isOpen ? "rotate-90" : "rotate-0"}`}
          onClick={(e) => {
            e.target.name = name;
            handleOnClick(e);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <ul
        ref={unorderedListRef}
        className={`absolute left-0 top-full translate-y-1 w-full border rounded-md cursor-pointer bg-white z-10 shadow ${
          list.length > limitLength ? "h-60 overflow-y-auto" : "h-auto"
        } ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        {list.map((item) => (
          <li key={item._id}>
            <DropDownMenuItem
              item={item}
              filterBy={filterBy}
              onFilter={onFilter}
              onOpen={setIsOpen}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDownMenu;
