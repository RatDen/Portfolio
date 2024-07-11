import { Children, cloneElement } from 'react';
import styled from 'styled-components';
import { MenuItem } from './MenuItem';
import { RoundButton } from '../buttons/round-button';

import { ScreenWidth } from '../../constants/ScreenWidth';

type TMenu = {
	isOpen: boolean;
	onToggle: () => void;
	children: React.ReactNode | React.ReactNode[];
};

export function Menu({ isOpen, onToggle, children }: TMenu) {
	return (
		<MenuContainer>
			<MenuList className={isOpen ? '' : 'closed'}>
				{Children.map(children, (child: React.ReactNode) =>
					cloneElement(<MenuItem isOpen={isOpen}>{child}</MenuItem>)
				)}
				<MenuItem isOpen={true}>
					<RoundButton type='toggler' isOpen={isOpen} onClick={onToggle} />
				</MenuItem>
			</MenuList>
		</MenuContainer>
	);
}

const MenuContainer = styled.nav`
	position: fixed;
	z-index: 1;
	top: 50%;
	transform: translateY(-37%);
	right: 0;

	@media (width <= ${() => `${ScreenWidth.tabletS}px`}) {
		top: 100%;
		transform: translateY(-100%);
	}
`;

const MenuList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;
