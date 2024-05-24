import { styled } from 'styled-components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser";
import {
  FormFieldWrap,
  FormFieldErrorWrap,
  FormFieldErrorText,
  FormInput,
  FormTextArea,
  FormButton,
} from '/src/components/Forms/FormElements.jsx';
import ScreenWidth from '/src/ScreenWidth';

export default function ContactsForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onTouched',
  });

  const onSubmit = (data) => {
    setLoading(true);

    const templateParams = {
      ...data,
    };

    emailjs
      .send(
        "service_26ly96r",
        "template_zvlelpo",
        templateParams,
        "JogiYYOG8yu-kgTmX"
      )
      .then(() => {
        reset();
        alert('Ваше сообщение успешно отправлено!');
      })
      .catch(() => {
        alert('Что-то пошло не по плану...');
      })
      .finally(() => {
        setLoading(false);
      })
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormButtonsWrap>
        <FormButton type='submit' disabled={!isValid || loading}>
          {loading ? "Отправка" : "Отправить"}
        </FormButton>
        <FormButton type='reset'>Очистить</FormButton>
      </FormButtonsWrap>
      <FormFieldWrap>
         <FormFieldErrorWrap className={errors?.email ? 'input_error' : ''} data-form_field_name='email'>
          <FormFieldErrorText>{errors?.email?.message}</FormFieldErrorText>
        </FormFieldErrorWrap>
        <FormInput
          type='email'
          placeholder='Ваш email'
          {...register('email', {
            required: {
              value: true,
              message: 'Это поле должно быть заполнено',
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Введите корректный email вида user@example.com',
            },
          })}
          className={errors?.email ? 'input_error' : ''}
        />
      </FormFieldWrap>
      <FormFieldWrap>
        <FormFieldErrorWrap className={errors?.request ? 'input_error' : ''} data-form_field_name='request'>
          <FormFieldErrorText>{errors?.request?.message}</FormFieldErrorText>
        </FormFieldErrorWrap>
        <FormTextArea
          type='text'
          placeholder='С чем требуется помощь?'
          {...register('request', {
            required: {
              value: true,
              message: 'Это поле должно быть заполнено',
            },
            minLength: {
              value: 2,
              message: 'Минимум 2 символа',
            },
            maxLength: {
              value: 1000,
              message: 'Максимум 1000 символов',
            },
          })}
          className={errors?.request ? 'input_error' : ''}
        />
      </FormFieldWrap>
      <FormFieldWrap>
        <FormFieldErrorWrap className={errors?.name ? 'input_error' : ''} data-form_field_name='name'>
          <FormFieldErrorText>{errors?.name?.message}</FormFieldErrorText>
        </FormFieldErrorWrap>
        <FormInput
          type='text'
          placeholder='Как вас зовут?'
          {...register('name', {
            required: {
              value: true,
              message: 'Это поле должно быть заполнено',
            },
            pattern: {
              value: /^[а-яёА-ЯЁa-zA-Z ]+$/,
              message: 'Только кирилические и латинские буквы и пробелы',
            },
            minLength: {
              value: 2,
              message: 'Минимум 2 символа',
            },
            maxLength: {
              value: 20,
              message: 'Максимум 20 символов',
            },
          })}
          className={errors?.name ? 'input_error' : ''}
        />
      </FormFieldWrap>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
  gap: 15px;
  max-width: 50%;
  font-size: 19px;
  font-weight: bold;
  transition: max-width 0.5s;

  @media (width <= ${() => `${ScreenWidth.desctopS}px`}) {
    max-width: 75%;
  }

  @media (width <= ${() => `${ScreenWidth.tabletM}px`}) {
    max-width: 100%;
  }
`;

const FormButtonsWrap = styled.div`
  display: flex;
  gap: 15px;
`;
