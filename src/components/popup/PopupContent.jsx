function PopupContent({ isPopUpOpen, onPopUpOpen, children }) {
  return (
    <div
      onClick={() => onPopUpOpen(false)}
      className={`absolute h-screen w-screen flex justify-center items-center z-20 ${
        isPopUpOpen ? "" : "hidden"
      }`}
    >
      {children}
    </div>
  );
}

export default PopupContent;
