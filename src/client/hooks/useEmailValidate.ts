import {KeyboardEvent, useEffect, useState} from "react";
import {EMAIL_REGEXP} from "../constants/form";

export const useEmailValidate = () => {
  const [emailState, setEmailState] = useState<string>('');
  const [isEmailCorrect, setEmailCorrect] = useState<boolean>(true);

  useEffect(() => {
    const splitEmail = emailState.split(' ').length === 2;

    if (splitEmail) {
      setEmailCorrect(false)
    }
  }, [emailState]);

  const onEmailChangeHandler = ((event: KeyboardEvent<HTMLInputElement>) => {
    setEmailState(event.target.value);
    setEmailCorrect(EMAIL_REGEXP.test(event.target.value));
  })

  return {  emailState, setEmailState, onEmailChangeHandler, isEmailCorrect }
}
