import { styled } from 'styled-components';

export default function Header({ name, caption }) {
  return (
    <HeaderContainer>
      <HeaderName>{name}</HeaderName>
      <HeaderCaption>{caption}</HeaderCaption>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  z-index: 1;
  inset-block-start: 10px;
  inset-inline-start: 10px;
  color: var(--main-theme-color);
  text-shadow: 0 0 15px var(--main-shadow-color);
  text-align: center;
  cursor: default;
`;

const HeaderName = styled.h1`
  font-family: 'Rollbox-BoldItalic', 'Conthrax', sans-serif;
  font-size: 22px;
`;

const HeaderCaption = styled.strong`
  font-size: 12px;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    inline-size: 17px;
    block-size: 2px;
    vertical-align: middle;
    background-color: var(--main-theme-color);
  }

  &::before {
    margin-inline-end: 3px;
  }
  
  &::after {
    margin-inline-start: 3px;
  }
`;
