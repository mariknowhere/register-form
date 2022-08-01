import React, {FC} from 'react';
import styles from "./FormInput.module.scss";
import Input from "../../../components/input/Input";
import Text from "../../../components/text/Text";
import {TextVariantEnum} from "../../../components/text/TextTypes";
import {IFormInputProps} from "./FormInputTypes";
import classNames from "classnames";

const FormInput: FC<IFormInputProps> = ({
  type,
  placeholder,
  image,
  value,
  onChange,
  name,
  className,
  isValueIncorrect,
  textError,
  labelError,
  isDate,
}) => {
  return (
    <div className={classNames(className, styles['form-input-wrapper'])}>
      <Input
        type={type}
        placeholder={placeholder}
        image={image}
        value={value}
        onChange={onChange}
        className={styles['form-input']}
      />
      <label htmlFor={name} className={styles['form-input-label']}>
        {labelError}
      </label>
      {isValueIncorrect && value?.length !== 0 && (
        <Text children={textError} variant={TextVariantEnum.M} className={styles['form-input-error']} />
      )}
      {isDate && <Text children={value} variant={TextVariantEnum.L} className={styles['form-input-date']} />}
    </div>
  );
};

export default FormInput;
