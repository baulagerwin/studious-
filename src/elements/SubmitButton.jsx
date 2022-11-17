function SubmitButton({ children }) {
  return (
    <button
      type="submit"
      className="border border-second bg-second hover:bg-first hover:border-first py-4 px-8 rounded-full text-xl text-white cursor-pointer"
    >
      {children}
    </button>
  );
}

export default SubmitButton;
