import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addSubject } from "../../store/subjects";

function useNewSubjectFields(onOpen) {
  const [name, setName] = useState("");
  const [isValidating, setIsValidating] = useState(false);

  const dispatch = useDispatch();

  function handleOnChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // validation
    if (!Boolean(name)) return;

    try {
      // successScenario
      dispatch(addSubject({ name }));
      // toast.success(`${name} has been successfully added.`);
    } catch (ex) {
      // failScenario
      console.log("error");
    }

    onOpen.onNewSubjectOpen(false);
  }

  return { name, handleOnChange, isValidating, handleSubmit };
}

export default useNewSubjectFields;
