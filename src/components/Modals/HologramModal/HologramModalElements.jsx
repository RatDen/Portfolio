import { styled } from 'styled-components';
import ScreenWidth from '/src/ScreenWidth';

export const HologramHeader = styled.h3`
  font-size: 23px;

  @media (width <= ${() => `${ScreenWidth.mobileL}px`}) {
    font-size: 20px;
  }

  @media (width <= ${() => `${ScreenWidth.mobileM}px`}) {
    font-size: 18px;
  }
`;

export const HologramText = styled.p`
  font-size: 20px;
`;
