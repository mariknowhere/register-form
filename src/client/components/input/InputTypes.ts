import { KeyboardEvent } from "react";
import {IImageProps} from "../image/ImageTypes";

export interface IInputProps {
  image: IImageProps
  value?: string;
  onChange?: (event: KeyboardEvent<HTMLInputElement>) => void;
  name?: string;
  type?: string;
  placeholder?: string;
  className?: string;
}
