import { useEffect } from "react";

function useCloseDropDown(closeDropDown) {
  useEffect(() => {
    document.body.addEventListener("mousedown", closeDropDown);

    return () => document.body.removeEventListener("mousedown", closeDropDown);
  }, []);
}

export default useCloseDropDown;
