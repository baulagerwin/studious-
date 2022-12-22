import { useState, useEffect } from "react";

function usePopUpOpen() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  return [isPopUpOpen, setIsPopUpOpen];
}

export default usePopUpOpen;
