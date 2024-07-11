import styled from 'styled-components';
import { ScreenWidth } from '../../../constants/ScreenWidth';

type TCaseItem = {
	title: string;
	url: string;
	img: string;
	alt: string;
	description: string[];
};

export function CaseItem({ title, url, img, alt, description }: TCaseItem) {
	return (
		<ItemContainer>
			<ItemImage src={img} alt={alt} />
			<ItemTitleRef href={url}>
				<ItemTitle>{title}</ItemTitle>
			</ItemTitleRef>
			<DescriptionContainer>
				{description.map((text, idx) => (
					<li key={idx}>{text}</li>
				))}
			</DescriptionContainer>
		</ItemContainer>
	);
}

const ItemContainer = styled.article`
	display: flex;
	max-width: 100%;
	gap: 10px;
	text-shadow: 0 0 20px currentColor;
	font: inherit;
	color: inherit;
	flex-direction: column;
	word-break: break-word;

	@media (width <= ${() => `${ScreenWidth.tabletM}px`}) {
		font-size: 14px;
	}
`;

const ItemImage = styled.img`
	max-width: 100%;
	box-shadow: 0 0 25px -10px currentColor;
	border-radius: 5px;
	max-height: 400px;
`;

const ItemTitleRef = styled.a`
	text-underline-offset: 3px;

	&:hover {
		color: var(--active-color);
		text-shadow: 0 0 25px currentColor;
	}
`;

const ItemTitle = styled.h4`
	font-size: 22px;

	@media (width <= ${() => `${ScreenWidth.tabletM}px`}) {
		font-size: 18px;
	}
`;

const DescriptionContainer = styled.ul`
	display: flex;
	list-style: disc;
	gap: 5px;
	flex-direction: column;
	padding-inline-start: 1lh;
`;
