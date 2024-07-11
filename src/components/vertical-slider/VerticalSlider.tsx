import { styled } from 'styled-components';

type TVerticalSlider = React.PropsWithChildren<{
	element: number;
	height?: string;
	width?: string;
}>;

export function VerticalSlider({
	element,
	children,
	height = '100%',
	width = '100%',
}: TVerticalSlider) {
	return (
		<SliderContainer height={height} width={width}>
			<ItemsContainer
				translate={`-${element * parseInt(height)}${
					height.split(parseInt(height).toString()).at(1) as string
				}`}>
				{children}
			</ItemsContainer>
		</SliderContainer>
	);
}

interface ISliderContainer {
	height: string;
	width: string;
}
const SliderContainer = styled.div<ISliderContainer>`
	height: ${(props) => props.height};
	width: ${(props) => props.width};
	overflow: hidden;
`;

interface IItemsContainer {
	translate: string;
}
const ItemsContainer = styled.div<IItemsContainer>`
	position: relative;
	transform: translateY(${(props) => props.translate});
	transition: transform 0.4s;
`;
