import React, {FC} from 'react';
import styles from './FormBlock.module.scss';
import {IFormBlockProps} from "./FormBlockTypes";
import Button from "../../components/button/Button";
import {
  BUTTON_TEXT,
  DATE_TEXT, DATE_TEXT_ERROR,
  EMAIL_TEXT,
  EMAIL_TEXT_ERROR,
  MESSAGE_TEXT,
  MESSAGE_TEXT_ERROR,
  NAME_TEXT,
  NAME_TEXT_ERROR,
  NUMBER_TEXT,
  NUMBER_TEXT_ERROR,
  SEND_TEXT,
  SUCCESS_MESSAGE_TEXT,
} from "../../constants/form";
import Text from "../../components/text/Text";
import {useNameValidate} from "../../hooks/useNameValidate";
import {useEmailValidate} from "../../hooks/useEmailValidate";
import {useNumberValidate} from "../../hooks/useNumberValidate";
import {useDateValidate} from "../../hooks/useDateValidate";
import {useMessageValidate} from "../../hooks/useMessageValidate";
import {TextVariantEnum} from "../../components/text/TextTypes";
import {useRequest} from "../../hooks/useRequest";
import FormInput from "./formInput/FormInput";

const FormBlock: FC<IFormBlockProps> = ({
  nameInput,
  emailInput,
  numberInput,
  dateInput,
  messageInput,
}) => {
  const { nameState, setNameState, onNameChangeHandler, isNameIncorrect } = useNameValidate();
  const { emailState, setEmailState, onEmailChangeHandler, isEmailCorrect } = useEmailValidate();
  const { numberState, setNumberState, onNumberChangeHandler, isNumberIncorrect } = useNumberValidate();
  const { dateState, setDateState, onDateChangeHandler, isDateIncorrect } = useDateValidate();
  const { messageState, setMessageState, onMessageChangeHandler, isMessageIncorrect } = useMessageValidate();

  const isFormIncorrect = !isNameIncorrect && isEmailCorrect && !isMessageIncorrect && !isNumberIncorrect &&
    !isDateIncorrect;

  const { errorMessage, isLoading, isRequestSuccessfully, isRequestCreate, onButtonClick } = useRequest(
    setNameState, setEmailState, setNumberState, setDateState, setMessageState, isFormIncorrect
  );

  if (isLoading) {
    return <Text children={SEND_TEXT} className={styles['form-loader']} />
  }

  return (
    <div className={styles.form}>
      <form id="form" className={styles['form-container']}>
        <FormInput
          {...nameInput}
          textError={NAME_TEXT_ERROR}
          labelError={NAME_TEXT}
          isValueIncorrect={isNameIncorrect}
          value={nameState.toUpperCase()}
          onChange={onNameChangeHandler}
        />
        <FormInput
          {...emailInput}
          textError={EMAIL_TEXT_ERROR}
          labelError={EMAIL_TEXT}
          value={emailState}
          isValueIncorrect={!isEmailCorrect}
          onChange={onEmailChangeHandler}
        />
        <FormInput
          {...numberInput}
          textError={NUMBER_TEXT_ERROR}
          labelError={NUMBER_TEXT}
          isValueIncorrect={isNumberIncorrect}
          value={numberState}
          onChange={onNumberChangeHandler}
        />
        <FormInput
          {...dateInput}
          textError={DATE_TEXT_ERROR}
          labelError={DATE_TEXT}
          isValueIncorrect={isDateIncorrect}
          value={dateState}
          onChange={onDateChangeHandler}
          isDate={true}
        />
        <div className={styles['form-message-wrapper']}>
          <textarea
            name={messageInput.name}
            value={messageState}
            onChange={onMessageChangeHandler}
            className={styles['form-message']}
          />
          <label htmlFor={messageInput.name} className={styles['form-label']}>
            {MESSAGE_TEXT}
          </label>
          {isMessageIncorrect && messageState.length !== 0 && (
            <Text children={MESSAGE_TEXT_ERROR} className={styles['form-error']} variant={TextVariantEnum.M} />
          )}
        </div>
      </form>
      <div className={styles['form-button-wrapper']} onClick={onButtonClick}>
        <Button buttonText={BUTTON_TEXT} />
      </div>
      {isRequestCreate && (isRequestSuccessfully ? (
        <Text children={SUCCESS_MESSAGE_TEXT} className={styles['form-success']} variant={TextVariantEnum.L} />
      ) : (
        <Text children={errorMessage} className={styles['form-error']} variant={TextVariantEnum.L} />
      ))}
    </div>
  );
};

export default FormBlock;
