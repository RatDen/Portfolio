import { styled } from 'styled-components';
import { useState, useEffect, Children, cloneElement } from 'react';
import MenuItem from './MenuItem';
import RoundButton from '/src/components/Buttons/RoundButton';
import ScreenWidth from '/src/ScreenWidth';

export default function Menu({ isOpen, toggle, children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(
      Children.map(children, (child) => {
        return cloneElement(<MenuItem isOpen={isOpen}>{child}</MenuItem>);
      })
    );
  }, [children, isOpen]);

  return (
    <MenuContainer>
      <MenuList className={isOpen ? '' : 'closed'}>
        {items}
        <MenuItem>
          <RoundButton type='toggler' isOpen={isOpen} onClick={toggle} />
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
