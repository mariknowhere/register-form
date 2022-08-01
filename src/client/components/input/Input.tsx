import React, {FC} from 'react';
import {IInputProps} from "./InputTypes";
import styles from "./Input.module.scss";
import Image from "../image/Image";
import classNames from "classnames";
import {DATE_MAX, DATE_MIN} from "../../constants/form";

const Input: FC<IInputProps> = ({
  type = 'text',
  image,
  name,
  placeholder,
  className,
  value,
  onChange,
}) => {
  return (
    <div className={classNames(className, styles['input-wrapper'])}>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
        min={DATE_MIN}
        max={DATE_MAX}
      />
      <Image {...image} className={styles['input-image']} />
    </div>
  );
};

export default Input;
