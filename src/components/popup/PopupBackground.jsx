function PopupBackground({ isPopUpOpen }) {
  return (
    <div
      className={`absolute h-screen w-screen bg-neutral-600 opacity-75 z-10 ${
        isPopUpOpen ? "visible" : "invisible"
      }`}
    ></div>
  );
}

export default PopupBackground;
