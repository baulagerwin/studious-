function DDButton({ initialXBy, isXOpen, onXOpen, xBy }) {
  return (
    <button
      type="button"
      className={`px-4 py-3 flex items-center justify-between rounded-md h-full w-full ${
        isXOpen
          ? "border-2 border-second bg-white outline outline-2 outline-gray-200"
          : "border-2 border-transparent bg-gray-100 outline outline-2 outline-transparent"
      } cursor-pointer select-none`}
      onClick={() => onXOpen(!isXOpen)}
    >
      <div className="text-md">{Boolean(xBy) ? xBy : initialXBy}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-4 h-4 ${isXOpen ? "rotate-90" : "rotate-0"}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  );
}

export default DDButton;
