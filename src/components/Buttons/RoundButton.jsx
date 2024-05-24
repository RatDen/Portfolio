import { styled } from 'styled-components';
import { lighten, cssVar } from 'polished';

export default function RoundButton({ type, isOpen, onClick }) {
  return (
    <ButtonContainer
      className={
        (type == 'toggler' ? 'toggler' : '') + ' ' + (isOpen ? '' : 'closed')
      }
      onClick={onClick}
    />
  );
}
RoundButton.defaultProps = {
  type: 'button',
  isOpen: true,
};

const ButtonContainer = styled.button`
  --button-color: var(--main-theme-color);
  --button-shadow: var(--main-shadow-color);

  position: relative;
  inline-size: 35px;
  aspect-ratio: 1;
  border: 2px solid var(--button-color);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--button-shadow);
  background-color: var(--main-theme-bg-soft-color);

  &::before,
  &::after {
    content: '';
    position: absolute;
    inline-size: 65%;
    block-size: 3px;
    background-color: var(--button-color);
    inset-inline-start: 50%;
    inset-block-start: 50%;
    border-radius: 25%;
    transition: transform 0.18s;
  }
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:hover {
    --button-color: ${() => lighten(0.15, cssVar('--main-theme-color'))};
    --button-shadow: ${() => lighten(0.15, cssVar('--main-shadow-color'))};
    box-shadow: 0 0 15px var(--button-shadow);
  }

  &:active {
    --button-color: var(--active-color);
    --button-shadow: var(--active-shadow-color);
  }

  &.toggler.closed {
    &::before,
    &::after {
      transform: translate(-50%, -50%) rotate(0);
    }
    &::before {
      inset-block-start: 40%;
    }
    &::after {
      inset-block-start: 60%;
    }
  }
`;
