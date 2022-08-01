import {KeyboardEvent, useEffect, useState} from 'react'
import {NUMBER_REGEXP} from "../constants/form";

export const useNumberValidate = () => {
  const [numberState, setNumberState] = useState<string>('');
  const [isNumberIncorrect, setNumberIncorrect] = useState<boolean>(false);

  useEffect(() => {
    const correctNumberLength = numberState.length !== 12;

    if (correctNumberLength) {
      setNumberIncorrect(true)
    } else {
      setNumberIncorrect(false)
    }
  }, [numberState.length]);

  const onNumberChangeHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    setNumberState(event.target.value.replace(NUMBER_REGEXP, ""))
  }

  return { numberState, setNumberState, onNumberChangeHandler, isNumberIncorrect }
}
