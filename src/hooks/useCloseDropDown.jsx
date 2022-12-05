import { useEffect } from "react";

function useCloseDropDown(closeDropDown) {
  useEffect(() => {
    document.body.addEventListener("click", closeDropDown);

    return () => document.body.removeEventListener("click", closeDropDown);
  }, []);
}

export default useCloseDropDown;
