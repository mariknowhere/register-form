import {IInputProps} from "../../components/input/InputTypes";

interface IMessageInput {
  name: string;
}

export interface IFormBlockProps {
  nameInput: IInputProps;
  emailInput: IInputProps;
  numberInput: IInputProps;
  dateInput: IInputProps;
  messageInput: IMessageInput;
}
