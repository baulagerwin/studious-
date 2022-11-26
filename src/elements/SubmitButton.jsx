import { Grid } from "svg-loaders-react";

function SubmitButton({ isAnimating, children }) {
  return (
    <button
      type="submit"
      className="border border-second bg-second hover:bg-first hover:border-first py-4 px-8 rounded-full text-xl text-white cursor-pointer flex items-center gap-2"
    >
      {isAnimating ? (
        <>
          <Grid className="w-4 h-4" />
          <span>Processing...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default SubmitButton;
