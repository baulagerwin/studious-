import useNewSubjectFields from "./useNewSubjectFields";

function useHomeFields(onOpen) {
  const newSubjectFields = useNewSubjectFields(onOpen);

  return [newSubjectFields];
}

export default useHomeFields;
