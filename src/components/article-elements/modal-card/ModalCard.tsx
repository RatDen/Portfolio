import { styled } from 'styled-components';
import { ScreenWidth } from '../../../constants/ScreenWidth';

type TModalCard = {
	img: string;
	alt?: string;
	articles: string[];
};

export function ModalCard({ img, alt, articles }: TModalCard) {
	return (
		<CardContainer>
			<CardImage src={require(img)} alt={alt} loading='lazy' />
			<CardDescriptionWrap>
				{articles.map((article, idx) => (
					<li key={idx}>{article}</li>
				))}
			</CardDescriptionWrap>
		</CardContainer>
	);
}

const CardContainer = styled.article`
	position: relative;
	display: flex;
	padding: 9px;
	border: 2px solid var(--main-theme-color);
	border-radius: 7px;

	&::before {
		content: '';
		position: absolute;
		z-index: -1;
		inset: 0;
		border-radius: inherit;
		opacity: 80%;
		background-color: var(--main-theme-color);
	}
`;

const CardImage = styled.img`
	margin: 5px;
	max-height: 75px;
	aspect-ratio: 1;

	@media (width <= ${() => `${ScreenWidth.mobileM}px`}) {
		max-height: 60px;
	}

	@media (width <= ${() => `${ScreenWidth.mobileS}px`}) {
		max-height: 50px;
	}
`;

const CardDescriptionWrap = styled.ul`
	padding-inline-start: 15px;
	flex-grow: 1;
	display: flex;
	list-style: disc;
	gap: 5px;
	font-size: 16px;
	flex-direction: column;
	word-break: break-word;

	@media (width <= ${() => `${ScreenWidth.mobileM}px`}) {
		font-size: 14px;
	}

	@media (width <= ${() => `${ScreenWidth.mobileS}px`}) {
		font-size: 13px;
	}
`;
