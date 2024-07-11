import styled from 'styled-components';
import { useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import {
	FormButton,
	FormFieldWrap,
	FormFieldErrorWrap,
	FormFieldErrorText,
	FormInput,
	FormTextArea,
} from '../holorgam-form-elements';
import emailjs from '@emailjs/browser';

import { ScreenWidth } from '../../../constants/ScreenWidth';

export function ContactsForm() {
	const [loading, setLoading] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);

	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm({
		mode: 'onTouched',
	});

	const onSubmit = (data: FieldValues) => {
		setLoading(true);

		const templateParams = {
			...data,
		};

		emailjs
			.send(
				'service_26ly96r',
				'template_zvlelpo',
				templateParams,
				'JogiYYOG8yu-kgTmX'
			)
			.then(() => {
				formRef.current?.reset();
				alert('Ваше сообщение успешно отправлено!');
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<FormContainer ref={formRef} onSubmit={handleSubmit(onSubmit)}>
			<FormButtonsWrap>
				<FormButton type='submit' disabled={!isValid || loading}>
					{loading ? 'Отправка' : 'Отправить'}
				</FormButton>
				<FormButton type='reset'>Очистить</FormButton>
			</FormButtonsWrap>
			<FormFieldWrap>
				<FormFieldErrorWrap
					className={errors?.email ? 'input_error' : ''}
					data-form_field_name='email'>
					<FormFieldErrorText>{`${errors?.email?.message}`}</FormFieldErrorText>
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
				<FormFieldErrorWrap
					className={errors?.request ? 'input_error' : ''}
					data-form_field_name='request'>
					<FormFieldErrorText>{`${errors?.request?.message}`}</FormFieldErrorText>
				</FormFieldErrorWrap>
				<FormTextArea
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
				<FormFieldErrorWrap
					className={errors?.name ? 'input_error' : ''}
					data-form_field_name='name'>
					<FormFieldErrorText>{`${errors?.name?.message}`}</FormFieldErrorText>
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
