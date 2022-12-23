function DDButton({ initialXBy, isXOpen, onXOpen, xBy }) {
  return (
    <button
      type="button"
      className={`px-4 py-2 flex items-center justify-between border rounded-md h-full w-full ${
        isXOpen ? "border-second" : ""
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
