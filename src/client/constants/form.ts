export const URL = 'https://jsonplaceholder.typicode.com/posts';
export const SEND_TEXT = 'ОТПРАВКА...';
export const SUCCESS_MESSAGE_TEXT = 'Успешная отправка';
export const SUCCESS = 'success';
export const ERROR = 'error';

export const NAME_TEXT = 'Name';
export const EMAIL_TEXT = 'Email';
export const NUMBER_TEXT = 'Number';
export const DATE_TEXT = 'Date';
export const MESSAGE_TEXT = 'Message';
export const BUTTON_TEXT = 'Отправить заявку';

export const NAME_TEXT_ERROR = `Поле должно состоять только из 2-х слов латинского алфавита.
  Длина каждого слова от 3 до 30 символов с одним пробелом между.`;
export const EMAIL_TEXT_ERROR = 'Email некорректен!';
export const NUMBER_TEXT_ERROR = 'Укажите корректный номер!';
export const DATE_TEXT_ERROR = 'Укажите корректную дату рождения';
export const MESSAGE_TEXT_ERROR = 'Минимальная длина должна составлять от 10 до 300 символов!';
export const FORM_TEXT_ERROR = 'Заполните форму и заполните её корректно перед отправкой!';

export const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
export const NUMBER_REGEXP = /[^\d]/g;
export const NAME_REGEXP = /[а-яё]/iu;

export const DATE_MIN = '1922-08-01';
export const DATE_MAX = '2016-08-01';
