import { useState, useEffect } from "react";

function onOpen() {
  const [isOpen, setIsOpen] = useState(false);

  function onOpen(value) {
    setIsOpen(value);
  }

  useEffect(() => {
    document.body.addEventListener("mousedown", close);

    return () => document.body.removeEventListener("mousedown", close);
  }, []);

  function close() {
    setIsOpen(false);
  }

  return [isOpen, onOpen];
}

export default onOpen;
