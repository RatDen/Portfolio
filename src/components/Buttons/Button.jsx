import { styled } from 'styled-components';
import { darken, lighten, cssVar } from 'polished';
import ScreenWidth from '/src/ScreenWidth';

export default styled.button`
  --button-color: var(--main-theme-color);
  --button-shadow-color: var(--main-shadow-color);

  position: relative;
  min-width: 150px;
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

  @media (width < ${() => `${ScreenWidth.mobileM}px`}) {
    min-width: 120px;
    font-size: 14px;
  }
`;
