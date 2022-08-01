import {KeyboardEvent, useState} from "react";
import {EMAIL_REGEXP} from "../constants/form";

export const useEmailValidate = () => {
  const [emailState, setEmailState] = useState<string>('');
  const [isEmailCorrect, setIsEmailCorrect] = useState<boolean>(true);

  const onEmailChangeHandler = ((event: KeyboardEvent<HTMLInputElement>) => {
    setEmailState(event.target.value);
    setIsEmailCorrect(EMAIL_REGEXP.test(event.target.value));
  })

  return {  emailState, setEmailState, onEmailChangeHandler, isEmailCorrect }
}
