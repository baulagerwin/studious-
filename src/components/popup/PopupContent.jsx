function PopupContent({ isPopUpOpen, children }) {
  return (
    <div
      className={`absolute h-screen w-screen flex justify-center items-center z-20 ${
        isPopUpOpen ? "" : "hidden"
      }`}
    >
      {children}
    </div>
  );
}

export default PopupContent;
