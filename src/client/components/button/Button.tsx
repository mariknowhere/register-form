import React, {FC} from 'react';
import styles from "./Button.module.scss";
import {IButtonProps} from "./ButtonTypes";
import classNames from "classnames";

const Button: FC<IButtonProps> = ({
  buttonText,
  className,
}) => {
  return (
    <button className={classNames(className, styles['secondary-button'])}>
      <span>{buttonText}</span>
    </button>
  );
};

export default Button;
