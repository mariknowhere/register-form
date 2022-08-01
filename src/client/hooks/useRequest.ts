import { MouseEvent } from "react";
import {ERROR, FORM_TEXT_ERROR, SUCCESS, SUCCESS_MESSAGE_TEXT, URL} from "../constants/form";
import {Dispatch, SetStateAction, useState} from "react";

export type SetType = Dispatch<SetStateAction<string>>

export const useRequest = (
  setNameState: SetType,
  setEmailState: SetType,
  setNumberState: SetType,
  setDateState: SetType,
  setMessageState: SetType,
  isFormIncorrect: boolean,
) => {
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isRequestCreate, setRequestCreate] = useState<boolean>(false);
  const [isRequestSuccessfully, setRequestSuccessfully] = useState<boolean>(false);

  const onButtonClick = async (event: MouseEvent<HTMLDivElement>) => {
    if (!isFormIncorrect) {
      setErrorMessage(FORM_TEXT_ERROR);
      setRequestCreate(true);
      return event.stopPropagation();
    }
    setNameState('');
    setEmailState('');
    setNumberState('');
    setDateState('');
    setMessageState('');

    event.preventDefault();
    setLoading(true);
    setRequestCreate(true);

    try {
      await fetch(URL, {
        method: 'POST',
        body: JSON.stringify({status: SUCCESS, message: SUCCESS_MESSAGE_TEXT}),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setRequestSuccessfully(true)
    } catch (error) {
      setErrorMessage(ERROR);
      setRequestSuccessfully(false)
    }

    setLoading(false);
  }

  return { errorMessage, isLoading, isRequestSuccessfully, isRequestCreate, onButtonClick }
}
