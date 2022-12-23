import { useRef, useState, useEffect } from "react";
import AnimateHeight from "react-animate-height";

function AccordionItem({ qna, onFilterOpen, onSortOpen, onPaginationOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSwiped, setIsSwiped] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [positionDiff, setPositionDiff] = useState(0);
  const itemRef = useRef(null);
  const sideButtonRef = useRef(null);
  const iconsWidth = "w-1/8";

  useEffect(() => {
    if (isOpen) return;
    let scrollX = sideButtonRef.current.offsetWidth - positionDiff;
    itemRef.current.scroll(scrollX, 0);
  }, [positionDiff]);

  function handleOnMouseDown(e) {
    e.stopPropagation();

    // Components that needs to be closed
    onFilterOpen(false);
    onSortOpen(false);
    onPaginationOpen(false);

    setIsDown(true);
    setStartX(e.nativeEvent.offsetX);
  }

  function handleOnMouseMove(e) {
    e.stopPropagation();

    let offsetX = e.nativeEvent.offsetX;
    let swiped = isDown && startX !== offsetX;
    let diff = offsetX - startX;

    if (!swiped) return;

    setIsSwiped(true);
    setPositionDiff(diff);
  }

  function handleOnMouseUp(e) {
    e.stopPropagation();

    if (!isSwiped) setIsOpen(!isOpen);

    setIsDown(false);
    setIsSwiped(false);
    setStartX(0);
    setPositionDiff(0);
  }

  function handleOnMouseLeave(e) {
    e.stopPropagation();

    setIsDown(false);
    setIsSwiped(false);
    setStartX(0);
    setPositionDiff(0);
  }

  return (
    <li
      ref={itemRef}
      className={`border shadow-sm overflow-hidden rounded-md ${
        isOpen ? "bg-secondTint border-secondTint" : ""
      }`}
    >
      <div className="flex">
        <aside
          ref={sideButtonRef}
          className={`shrink-0 p-4 flex items-center bg-emerald-500 text-white ${iconsWidth}`}
        >
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
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </aside>
        <div className="shrink-0 w-full">
          <div
            className={`cursor-pointer flex select-none`}
            onMouseDown={handleOnMouseDown}
            onMouseUp={handleOnMouseUp}
            onMouseMove={handleOnMouseMove}
            onMouseLeave={handleOnMouseLeave}
          >
            <div className="flex items-center justify-center px-2 m-3 shrink-0 rounded-full bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-5 h-5 transition-all ${
                  isOpen ? "-rotate-45" : "rotate-0"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>

            <div className="py-4 pr-4 text-lg font-semibold">
              {qna.question}
            </div>
          </div>
          <AnimateHeight duration={200} height={!isOpen ? 0 : "auto"}>
            <div className="text-lg leading-8 px-4 pb-4 pt-2 ml-11">
              &#8211; {qna.answer}
            </div>
          </AnimateHeight>
        </div>
        <aside
          className={`shrink-0 p-4 flex items-center bg-red-500 text-white ${iconsWidth}`}
        >
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
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </aside>
      </div>
    </li>
  );
}

export default AccordionItem;
