import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { lighten, cssVar, darken } from 'polished';

import { ScreenWidth } from '../../constants/ScreenWidth';

type TMenuItem = {
	isOpen: boolean;
	children: React.ReactNode;
};

export function MenuItem({ isOpen, children }: TMenuItem) {
	const itemRef = useRef<HTMLLIElement>(null);
	const lampRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleLamp = () => {
			// удаление тамера лампы после анимации
			if (lampRef.current?.classList.contains('lamp_turn-on_transition')) {
				lampRef.current.classList.remove('lamp_turn-on_transition');
			}
		};

		const handleItem = () => {
			const parent = itemRef.current?.parentNode as HTMLUListElement;
			if (parent?.classList.contains('closed')) {
				// нужно для отрисовки анимации, без таймаута не отрисовывается
				setTimeout(() => {
					itemRef.current?.classList.add('hidden');
				}, 25);
			}
		};

		itemRef.current?.addEventListener('transitionend', handleItem);

		// удаление таймера лампы при первой загрузке
		lampRef.current?.classList.remove('lamp_turn-on_transition');

		lampRef.current?.addEventListener('transitionend', handleLamp);

		return () => {
			itemRef.current?.removeEventListener('transitionend', handleItem);
			lampRef.current?.removeEventListener('transitionend', handleLamp);
		};
	}, []);

	useEffect(() => {
		if (!isOpen) {
			itemRef.current?.classList.add('closed');
		} else {
			itemRef.current?.classList.remove('hidden');
			// нужно для отрисовки анимации, без таймаута не отрисовывается
			setTimeout(() => {
				itemRef.current?.classList.remove('closed');
			}, 25);
		}
	}, [isOpen]);

	return (
		<Item ref={itemRef}>
			{children}
			<Lamp
				ref={lampRef}
				className={isOpen ? 'lamp_turn-on_transition' : 'closed'}
			/>
		</Item>
	);
}

const Item = styled.li`
	--button-text-color: var(--button-color);
	display: flex;
	justify-content: flex-end;
	align-items: center;

	button:not(.toggler) {
		position: relative;
		perspective: 20px;
		box-sizing: content-box;
		height: 40px;
		width: 175px;
		padding: 0;
		opacity: 80%;
		background-color: transparent;
		border: none;
		color: var(--button-text-color);
		font-size: 20px;
		transition: opacity var(--animation-timer-turn-on)
			cubic-bezier(0.11, 1.73, 0, -0.42);

		&::before {
			content: '';
			z-index: -1;
			inset: 0;
			position: absolute;
			transform: translateX(10px) rotateY(1.8deg);
			opacity: 50%;
			background-color: var(--button-color);
			box-shadow: 0 0 7px var(--button-shadow);
			filter: blur(5px) drop-shadow(0 0 5px var(--button-shadow));
		}
	}

	/* кнопка при наведении */
	&:has(button:hover) {
		--button-color: ${() =>
			lighten(0.15, cssVar('--main-theme-color') as string)};
		--button-shadow: ${() =>
			lighten(0.15, cssVar('--main-shadow-color') as string)};

		/* без переключателя меню, только у больших кнопок */
		button:not(.toggler)::before {
			box-shadow: 0 0 14px var(--button-shadow);
			filter: blur(5px) drop-shadow(0 0 10px var(--button-shadow));
		}
	}

	/* при удержании кнопки */
	&:has(button:active) {
		--button-text-color: var(--active-color);
		--button-shadow: var(--active-shadow-color);
	}

	/* после нажатия, когда активна */
	&:has(.active) {
		--button-color: var(--active-color);
		--button-shadow: var(--active-shadow-color);

		&:hover {
			--button-color: ${() =>
				lighten(0.15, cssVar('--active-color') as string)};
			--button-shadow: ${() =>
				lighten(0.15, cssVar('--active-shadow-color') as string)};
		}

		&:active {
			--button-text-color: var(--main-theme-color);
			--button-shadow: var(--main-shadow-color);
		}
	}

	/* после нажатия, когда выключается */
	&:has(button:disabled) {
		--button-color: var(--accent-color);
		--button-shadow: var(--accent-shadow-color);

		pointer-events: none;
	}

	/* при закрытом меню */
	&.closed {
		button:not(.toggler) {
			opacity: 0;
			transition: opacity var(--animation-timer-turn-off);
		}
	}

	&.hidden {
		button:not(.toggler) {
			display: none;
		}
	}

	/* только цвета */
	@media (width < ${() => `${ScreenWidth.desctopL}px`}) {
		& {
			--button-color: ${() =>
				darken(0.1, cssVar('--main-theme-color') as string)};
			--button-shadow: ${() =>
				darken(0.1, cssVar('--main-shadow-color') as string)};

			button:not(.toggler)::before {
				opacity: 100%;
				background-color: ${() =>
					darken(0.47, cssVar('--main-shadow-color') as string)};
				filter: blur(5px)
					drop-shadow(
						0 0 6px
							${() => darken(0.3, cssVar('--main-shadow-color') as string)}
					);
			}
		}

		/* кнопка при наведении */
		&:has(button:hover) {
			--button-color: var('--main-theme-color');
			--button-shadow: var('--main-shadow-color');

			/* без переключателя меню, только у больших кнопок */
			button:not(.toggler)::before {
				box-shadow: 0 0 14px var(--button-shadow);
				background-color: ${() =>
					darken(0.4, cssVar('--main-shadow-color') as string)};
				filter: blur(5px)
					drop-shadow(
						0 0 10px
							${() => darken(0.1, cssVar('--main-shadow-color') as string)}
					);
			}
		}

		/* при удержании кнопки */
		&:has(button:active) {
			--button-text-color: var(--active-color);
			--button-shadow: var(--active-shadow-color);
		}

		/* после нажатия, когда активна */
		&:has(.active) {
			--button-color: ${() => darken(0.15, cssVar('--active-color') as string)};
			--button-shadow: ${() =>
				darken(0.15, cssVar('--active-shadow-color') as string)};

			button:not(.toggler)::before {
				box-shadow: 0 0 14px var(--button-shadow);
				background-color: ${() =>
					darken(0.47, cssVar('--active-shadow-color') as string)};
			}

			&:hover {
				--button-color: var(--active-color);
				--button-shadow: var(--active-shadow-color);

				button:not(.toggler)::before {
					background-color: ${() =>
						darken(0.27, cssVar('--active-color') as string)};
				}
			}

			&:active {
				--button-text-color: var(--main-theme-color);
				--button-shadow: var(--main-shadow-color);
			}
		}

		/* после нажатия, когда выключается */
		&:has(button:disabled) {
			--button-color: ${() => darken(0.1, cssVar('--accent-color') as string)};
			--button-shadow: ${() => darken(0.1, cssVar('--accent-color') as string)};

			button:not(.toggler)::before {
				background-color: ${() =>
					darken(0.32, cssVar('--accent-color') as string)};
				filter: blur(5px) drop-shadow(0 0 5px var(--button-shadow));
			}
		}
	}
`;

const Lamp = styled.div`
	position: relative;
	transform: translateX(50%);
	block-size: 60px;
	inline-size: 16px;
	border-radius: 5px;
	background: linear-gradient(315deg, #272c2d 0%, #51585d 74%);

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		height: 40px;
		width: 4px;
		background-color: var(--button-color);
		box-shadow: 0 0 10px var(--button-shadow);
	}

	/* таймер анимации при включении меню */
	&.lamp_turn-on_transition {
		&::before {
			transition: background-color var(--animation-timer-turn-on)
					cubic-bezier(0.11, 1.73, 0, -0.42),
				box-shadow var(--animation-timer-turn-on)
					cubic-bezier(0.11, 1.73, 0, -0.42);
		}
	}

	/* при закрытом меню */
	button:not(.toggler) + &.closed {
		&::before {
			box-shadow: -1px 0 10px 1px
				${() => darken(0.45, cssVar('--button-shadow') as string)};
			background-color: ${() => darken(0.27, 'lightgray')};
			transition: background-color var(--animation-timer-turn-off);
		}
	}
`;
