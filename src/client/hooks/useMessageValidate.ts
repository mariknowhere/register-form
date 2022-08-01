import {ChangeEvent, useEffect, useState} from "react";

export const useMessageValidate = () => {
  const [messageState, setMessageState] = useState<string>('');
  const [isMessageIncorrect, setMessageIncorrect] = useState<boolean>(false);

  useEffect(() => {
    const messageLengthIncorrect = messageState.length > 300 || messageState.length < 10

    if (messageLengthIncorrect) {
      setMessageIncorrect(true)
    } else {
      setMessageIncorrect(false)
    }
  }, [messageState.length]);

  const onMessageChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessageState(event.target.value);
  };

  return { messageState, setMessageState, onMessageChangeHandler, isMessageIncorrect }
}
