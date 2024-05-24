import { styled } from 'styled-components';
import { darken, lighten, cssVar } from 'polished';
import ScreenWidth from '/src/ScreenWidth';

export const FormInput = styled.input`
  flex-grow: 1;
  padding: 10px 20px;
  background-color: ${() => darken(0.15, cssVar('--main-theme-color'))};
  border: 2px solid var(--main-theme-color);
  border-radius: 5px;
  color: ${() => lighten(0.15, cssVar('--main-theme-color'))};
  font: inherit;
  z-index: 1;

  &.input_error {
    border-color: var(--accent-color);
  }

  &:focus-visible {
    outline: 2px solid var(--accent-color);
  }

  &:-webkit-autofill {
    -webkit-text-fill-color: ${() => lighten(0.15, cssVar('--main-theme-color'))};
    -webkit-box-shadow: 0 0 0px 1000px ${() => darken(0.15, cssVar('--main-theme-color'))} inset;
  }

  &::-webkit-input-placeholder {
    color: var(--main-theme-color);
  }

  @media (width <= ${() => `${ScreenWidth.mobileL}px`}) {
    font-size: 20px;
  }

  @media (width <= ${() => `${ScreenWidth.mobileM}px`}) {
    font-size: 18px;
  }
`;

export const FormTextArea = styled.textarea`
  min-height: 150px;
  flex-grow: 1;
  padding: 10px 20px;
  background-color: ${() => darken(0.15, cssVar('--main-theme-color'))};
  border: 2px solid var(--main-theme-color);
  border-radius: 5px;
  color: ${() => lighten(0.15, cssVar('--main-theme-color'))};
  font: inherit;
  resize: none;
  z-index: 1;

  &.input_error {
    border-color: var(--accent-color);
  }

  &:focus-visible {
    outline: 2px solid var(--accent-color);
  }

  &:-webkit-autofill {
    -webkit-text-fill-color: ${() => lighten(0.15, cssVar('--main-theme-color'))};
    -webkit-box-shadow: 0 0 0px 1000px ${() => darken(0.15, cssVar('--main-theme-color'))} inset;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 10px;
    border: 2px solid var(--main-theme-color);
  }

  &::-webkit-input-placeholder {
    color: var(--main-theme-color);
  }

  @media (width <= ${() => `${ScreenWidth.mobileL}px`}) {
    font-size: 20px;
  }

  @media (width <= ${() => `${ScreenWidth.mobileM}px`}) {
    font-size: 18px;
  }
`;

export const FormFieldWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 5px;

  &:has(textarea) {
    flex-grow: 1;
  }
`;

export const FormFieldErrorWrap = styled.div`
  position: absolute;
  display: flex;
  padding: 0;
  align-items: center;
  right: 0px;
  transform: translate(calc(100% - 10px));
  overflow: hidden;
  block-size: 100%;
  max-inline-size: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  transition: max-inline-size 0.5s, border 0s 0.5s, padding 0.1s;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0;
    border-radius: inherit;
    opacity: 75%;
    background-color: var(--accent-color);
    filter: brightness(75%);
  }

  &.input_error {
    padding: 0 5px 0 15px;
    max-inline-size: 100%;
    border: 2px solid var(--accent-color);
    transition: max-inline-size 0.5s 0.05s, padding 0.05s;
  }

  @media (width <= ${() => `${ScreenWidth.desctopS}px`}) {
      inset: auto auto 0 auto;
      block-size: auto;
      inline-size: 100%;
      max-inline-size: none;
      transform: translate(0, calc(100% - 10px));

    &.input_error {
      padding: 15px 5px 5px;
      transition: max-block-size 0.5s 0.05s, padding 0.05s;
    }
  }
`;

export const FormFieldErrorText = styled.p`
  color: var(--accent-color);
  font-size: 12px;
  pointer-events: none;
`;

export const FormButton = styled.button`
  --button-color: var(--main-theme-color);
  --button-shadow-color: var(--main-shadow-color);

  position: relative;
  width: 50%;
  padding: 6px 10px;
  background-color: ${() => darken(0.15, cssVar('--button-color'))};
  border: 2px solid currentColor;
  border-radius: 5px;
  font: inherit;
  color: var(--button-color);

  &:hover {
    color: ${() => lighten(0.4, cssVar('--button-color'))};
    box-shadow: 0 0 15px var(--button-shadow-color);
  }

  &:active {
    color: ${() => lighten(0.25, cssVar('--button-color'))};
  }

  &[type='submit'] {
    --button-color: var(--active-color);
    --button-shadow-color: var(--active-shadow-color);

    background-color: ${() => darken(0.2, cssVar('--active-color'))};

    &:hover {
      color: ${() => lighten(0.4, cssVar('--active-color'))};
    }

    &:active {
      color: ${() => lighten(0.25, cssVar('--active-color'))};
    }
  }

  &[type='reset'] {
    --button-color: var(--accent-color);
    --button-shadow-color: var(--accent-shadow-color);

    background-color: ${() => darken(0.2, cssVar('--accent-color'))};

    &:hover {
      color: ${() => lighten(0.4, cssVar('--accent-color'))};
    }

    &:active {
      color: ${() => lighten(0.25, cssVar('--accent-color'))};
    }
  }

  &:disabled {
    --button-color: lightgray;
    --button-shadow-color: lightgray;

    color: var(--button-color);
    background-color: rgba(128, 128, 128, 0.5);
    pointer-events: none;
  }

  @media (width <= ${() => `${ScreenWidth.mobileL}px`}) {
    font-size: 16px;
  }

  @media (width <= ${() => `${ScreenWidth.mobileM}px`}) {
    padding: 6px 6px;
    min-width: 100px;
    font-size: 13px;
  }
`;
