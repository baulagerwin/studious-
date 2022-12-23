import { useState } from "react";

function useNewQNAOpen() {
  const [isNewQNAOpen, setIsNewQNAOpen] = useState(false);

  return [isNewQNAOpen, setIsNewQNAOpen];
}

export default useNewQNAOpen;
