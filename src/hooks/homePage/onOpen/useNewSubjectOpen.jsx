import { useState } from "react";

function useNewSubjectOpen() {
  const [isNewSubjectOpen, setIsNewSubjectOpen] = useState(false);

  return [isNewSubjectOpen, setIsNewSubjectOpen];
}

export default useNewSubjectOpen;
