import { SpinningCircles } from "svg-loaders-react";

function SubmitButton({ isValidating, children }) {
  return (
    <button
      type="submit"
      className="border border-second bg-second hover:bg-first hover:border-first py-4 px-8 rounded-full text-xl text-white cursor-pointer flex items-center gap-2"
    >
      {isValidating ? <SpinningCircles className="w-7 h-7" /> : children}
    </button>
  );
}

export default SubmitButton;
