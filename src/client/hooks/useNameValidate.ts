import {KeyboardEvent, useEffect, useState} from "react";
import {NAME_REGEXP} from "../constants/form";

export const useNameValidate = () => {
  const [nameState, setNameState] = useState<string>('');
  const [isNameIncorrect, setNameIncorrect] = useState<boolean>(false);

  const splitName = nameState.split(' ');
  const isNameWithoutTwoWords = splitName.length !== 2;
  const isNameWithoutCorrectWords = splitName.filter(word => word.length < 3 || word.length > 30).length !== 0;

  useEffect(() => {
    const isNameWithError = isNameWithoutTwoWords || isNameWithoutCorrectWords;

    if (isNameWithError) {
      setNameIncorrect(true)
    } else {
      setNameIncorrect(false)
    }
  }, [isNameWithoutCorrectWords, isNameWithoutTwoWords])

  const onNameChangeHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    setNameState(event.target.value.replace(NAME_REGEXP, ""));
  };

  return { nameState, setNameState, onNameChangeHandler, isNameIncorrect }
}