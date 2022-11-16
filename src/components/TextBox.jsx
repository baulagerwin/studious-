import Joi from "joi";
import { useState } from "react";

function TextBox({ name, text, icon, type = "text" }) {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState("");

  let box = `bg-gray-100 rounded-md p-2 relative border-2 border-transparent outline outline-transparent`;
  let input = "text-xl p-2 outline-none bg-gray-100 w-full";
  let placeholder =
    "text-xl absolute top-50 translate-y-2 left-0 translate-x-6 pointer-events-none transition-all duration-250";

  if (isFocus) {
    box = `bg-gray-100 rounded-md p-2 relative border-2 border-second bg-white outline outline-gray-200`;
    input = "text-xl p-2 outline-none bg-white w-full";
    placeholder =
      "text-md text-second font-semibold bg-white p-1 absolute top-50 -translate-y-7 left-0 translate-x-2 pointer-events-none transition-all duration-250";
  }

  function handleOnChange(e) {
    setValue(e.target.value);
  }

  function handleOnFocus(e) {
    setIsFocus(true);
  }

  function handleOnBlur(e) {
    if (value) return;

    setIsFocus(false);
  }

  return (
    <div className={box}>
      <input
        id={name}
        type={type}
        className={input}
        value={value}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      <span className={placeholder}>{text}</span>
      <label
        htmlFor={name}
        className="absolute top-50 left-100 translate-y-3 -translate-x-7"
      >
        {icon}
      </label>
    </div>
  );
}

export default TextBox;
