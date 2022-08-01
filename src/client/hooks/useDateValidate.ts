import {KeyboardEvent, useEffect, useState} from "react";

export const useDateValidate = () => {
  const [dateState, setDateState] = useState<string>('');
  const [isDateIncorrect, setDateIncorrect] = useState<boolean>(false);

  useEffect(() => {
    const correctDateLength = dateState.length !== 10;
      console.log(dateState)

    if (correctDateLength) {
      setDateIncorrect(true)
    } else {
      setDateIncorrect(false)
    }
  }, [dateState]);

  const onDateChangeHandler = ((event: KeyboardEvent<HTMLInputElement>) => setDateState(event.target.value))

  return { dateState, setDateState, onDateChangeHandler, isDateIncorrect }
}
