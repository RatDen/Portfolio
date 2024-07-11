import { styled } from 'styled-components';
import { darken, lighten, cssVar } from 'polished';
import { ScreenWidth } from '../../../constants/ScreenWidth';

export const Button = styled.button`
	--button-color: var(--main-theme-color);
	--button-shadow-color: var(--main-shadow-color);

	position: relative;
	min-width: 150px;
	padding: 6px 10px;
	background-color: ${() => darken(0.15, cssVar('--button-color') as string)};
	border: 2px solid currentColor;
	border-radius: 5px;
	font: inherit;
	color: var(--button-color);

	&:hover {
		color: ${() => lighten(0.4, cssVar('--button-color') as string)};
		box-shadow: 0 0 15px var(--button-shadow-color);
	}

	&:active {
		color: ${() => lighten(0.25, cssVar('--button-color') as string)};
	}

	&[type='submit'] {
		--button-color: var(--active-color);
		--button-shadow-color: var(--active-shadow-color);

		background-color: ${() => darken(0.2, cssVar('--active-color') as string)};

		&:hover {
			color: ${() => lighten(0.4, cssVar('--active-color') as string)};
		}

		&:active {
			color: ${() => lighten(0.25, cssVar('--active-color') as string)};
		}
	}

	&[type='reset'] {
		--button-color: var(--accent-color);
		--button-shadow-color: var(--accent-shadow-color);

		background-color: ${() => darken(0.2, cssVar('--accent-color') as string)};

		&:hover {
			color: ${() => lighten(0.4, cssVar('--accent-color') as string)};
		}

		&:active {
			color: ${() => lighten(0.25, cssVar('--accent-color') as string)};
		}
	}

	@media (width < ${() => `${ScreenWidth.mobileM}px`}) {
		min-width: 120px;
		font-size: 14px;
	}
`;
