import styled from 'styled-components';

type TScrollPromtArrows = {
	color?: string;
	scale?: number;
};

export function ScrollPromtArrows({ color, scale }: TScrollPromtArrows) {
	return (
		<PromtArrowsContainer scale={scale}>
			<PromtArrow color={color}>
				<div></div>
			</PromtArrow>
			<PromtArrow color={color}>
				<div></div>
			</PromtArrow>
		</PromtArrowsContainer>
	);
}

const PromtArrowsContainer = styled.div<{ scale?: number }>`
	scale: ${({ scale = 1 }) => scale};
	margin-top: ${({ scale = 1 }) => `${scale * -55}px`};
	animation-name: bounce;
	animation-duration: 1.5s;
	animation-iteration-count: infinite;

	@keyframes bounce {
		0% {
			transform: translateY(0);
		}
		10% {
			transform: translateY(3px);
		}
		20% {
			transform: translateY(6px);
		}
		30% {
			transform: translateY(9px);
		}
		40% {
			transform: translateY(12px);
		}
		50% {
			transform: translateY(15px);
		}
		60% {
			transform: translateY(18px);
		}
		70% {
			transform: translateY(21px);
		}
		80% {
			transform: translateY(24px);
		}
		90% {
			transform: translateY(27px);
		}
		100% {
			transform: translateY(30px);
		}
	}
`;

const PromtArrow = styled.div<{ color?: string }>`
	animation-name: opacity;
	animation-duration: 1.5s;
	animation-iteration-count: infinite;

	&:last-child {
		animation-direction: reverse;
		margin-top: -6px;
	}

	& > div {
		width: 36px;
		height: 36px;
		border-right: 8px solid ${({ color = '#bebebe' }) => color};
		border-bottom: 8px solid ${({ color = '#bebebe' }) => color};
		transform: rotate(45deg) translateZ(1px);
	}

	@keyframes opacity {
		0% {
			opacity: 0;
		}
		10% {
			opacity: 0.1;
		}
		20% {
			opacity: 0.2;
		}
		30% {
			opacity: 0.3;
		}
		40% {
			opacity: 0.4;
		}
		50% {
			opacity: 0.5;
		}
		60% {
			opacity: 0.6;
		}
		70% {
			opacity: 0.7;
		}
		80% {
			opacity: 0.8;
		}
		90% {
			opacity: 0.9;
		}
		100% {
			opacity: 1;
		}
	}
`;
