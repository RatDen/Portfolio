import { styled } from 'styled-components';
import ScreenWidth from '/src/ScreenWidth';

export default function SocialsLink({ name, children, ...props }) {
  return (
    <Link {...props} >
      {children}
      <LinkNameWrap>
        <LinkName>{name}</LinkName>
      </LinkNameWrap>
    </Link>
  );
}

const Link = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  margin: 5px;
  color: var(--main-theme-color);
  border-radius: 50%;
  box-shadow: 0 0 7px var(--main-shadow-color);

  &:focus-visible {
    outline: 2px solid var(--accent-color);
  }

  &:hover {
    box-shadow: none;
  }

  & > svg {
    inline-size: 30px;
    aspect-ratio: 1;
    fill: currentColor;
  }
`;

const LinkNameWrap = styled.div`
  position: absolute; /*используется для анимации наведения. информация дублируется из альтернативного текста картинки. чисто визуальный эффект*/
  display: flex;
  max-inline-size: 100%;
  block-size: 100%;
  border: 2px solid transparent;
  border-radius: 15px;
  align-items: center;
  overflow: hidden;
  transition: max-inline-size 0.2s, border 0s 0.4s, box-shadow 0s 0.4s;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0;
    border-radius: inherit;
    opacity: 75%;
    background-color: var(--main-theme-color);
    filter: brightness(35%);
  }

  ${Link}:hover > & {
    max-inline-size: 200px;
    border: 2px solid var(--accent-color);
    box-shadow: 0 0 10px var(--accent-shadow-color);
    transition: max-inline-size 0.4s 0.2s;
  }

  ${Link}:active > & {
    border-color: var(--active-color);
    box-shadow: 0 0 10px var(--active-shadow-color);
  }

  @media (width <= ${() => `${ScreenWidth.tabletM}px`}) {
    ${Link}:hover > & {
      max-inline-size: 100%;
      transition: none;
    }
  }
`;

const LinkName = styled.p`
  padding-inline-start: 40px;
  padding-inline-end: 10px;
  text-shadow: 0 0 15px var(--main-shadow-color);
`;
