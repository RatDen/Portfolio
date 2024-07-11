import { darken, cssVar } from 'polished';
import styled from 'styled-components';
import { SocialsItem, TSocialsItem } from './SocialsItem';

import { ScreenWidth } from '../../constants/ScreenWidth';

type TSocials = {
	content: TSocialsItem[];
};

export function Socials({ content }: TSocials) {
	return (
		<SocialsContainer>
			{content.map((item, idx) => (
				<SocialsItem key={idx} {...item} />
			))}
		</SocialsContainer>
	);
}

const SocialsContainer = styled.aside`
	z-index: 1;
	position: fixed;
	display: flex;
	flex-direction: column;
	top: 50%;
	left: 5px;
	transform: translateY(-50%);
	padding: 5px 0;
	box-sizing: border-box;
	border: 2px solid var(--main-theme-color);
	border-radius: 7.5px;
	box-shadow: 0 0 10px var(--main-shadow-color);
	background-color: ${() =>
		darken(0.35, cssVar('--main-theme-bg-hard-color') as string)};

	@media (width < ${() => `${ScreenWidth.tabletM}px`}) {
		& {
			inset: auto 50% 5px auto;
			flex-direction: row;
			transform: translate(50%);
			padding: 0 5px;
		}
	}
`;
