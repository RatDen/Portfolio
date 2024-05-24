import { styled } from 'styled-components';
import ScreenWidth from '../ScreenWidth';

export default function StarWarsScroller({ children }) {
  return <ScrollerContainer>{children}</ScrollerContainer>;
}

const ScrollerContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20vh;
  padding: 0 3%;
  width: 43%;
  height: 107%;
  transform: rotateX(3deg) translateY(-13%);
  overflow-y: scroll;
  transition: width 0.5s;

  &::-webkit-scrollbar {
    width: 5px;

    &-thumb {
      border-radius: 3px;
      background-color: var(--main-theme-color);
    }
  }

  @media (width <= ${() => `${ScreenWidth.desctopL}px`}) {
    width: 50%;
  }

  @media (width <= ${() => `${ScreenWidth.desctopS}px`}) {
    width: 65%;
  }

  @media (width < ${() => `${ScreenWidth.mobileM}px`}) {
    width: 75%;
  }

  @media (height < ${() => `${ScreenWidth.tabletL}px`}) {
    height: 105%;
    transform: rotateX(3deg) translateY(-11%);
  }

  @media (height < ${() => `${ScreenWidth.tabletM}px`}) {
    height: 104%;
    transform: rotateX(3deg) translateY(-9%);
  }
`;
