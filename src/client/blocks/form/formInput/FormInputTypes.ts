import {IInputProps} from "../../../components/input/InputTypes";

export interface IFormInputProps extends IInputProps {
  isValueIncorrect: boolean;
  textError: string;
  labelError: string;
  isDate?: boolean;
}
