function AddButton({ text, icon }) {
  return (
    <button
      type="button"
      className="py-3 px-6 border rounded-md flex items-center justify-center gap-2 bg-third hover:bg-first text-white w-full"
    >
      {icon}
      <div className="text-md">{text}</div>
    </button>
  );
}

export default AddButton;
