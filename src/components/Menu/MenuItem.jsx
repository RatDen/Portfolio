import { styled } from 'styled-components';
import { useEffect, useRef } from 'react';
import { lighten, darken, cssVar } from 'polished';
import ScreenWidth from '/src/ScreenWidth';

export default function MenuItem({ children, isOpen }) {
  const itemRef = useRef();
  const lamp = useRef();

  useEffect(() => {
    itemRef.current.addEventListener('transitionend', () => {
      if (itemRef.current.parentNode.classList.contains('closed')) {
        // нужно для отрисовки анимации, без таймаута не отрисовывается
        setTimeout(() => {
          itemRef.current.classList.add('hidden');
        }, 25);
      }
    });

    // удаление таймера лампы при первой загрузке
    lamp.current.classList.remove('lamp_turn-on_transition');

    // удаление тамера лампы после анимации
    lamp.current.addEventListener('transitionend', () => {
      if (lamp.current.classList.contains('lamp_turn-on_transition')) {
        lamp.current.classList.remove('lamp_turn-on_transition');
      }
    });
  }, []);

  useEffect(() => {
    if (!isOpen) {
      itemRef.current.classList.add('closed');
    } else {
      itemRef.current.classList.remove('hidden');
      // нужно для отрисовки анимации, без таймаута не отрисовывается
      setTimeout(() => {
        itemRef.current.classList.remove('closed');
      }, 25);
    }
  }, [isOpen]);

  return (
    <Item ref={itemRef}>
      {children}
      <Lamp
        ref={lamp}
        className={`${isOpen ? 'lamp_turn-on_transition' : 'closed'}`}
      ></Lamp>
    </Item>
  );
}

const Item = styled.li`
  --button-text-color: var(--button-color);
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button[type='button'] {
    position: relative;
    perspective: 20px;
    box-sizing: content-box;
    height: 40px;
    width: 175px;
    padding: 0;
    opacity: 80%;
    background-color: transparent;
    border: none;
    color: var(--button-text-color);
    font-size: 20px;
    transition: opacity var(--animation-timer-turn-on) cubic-bezier(0.11, 1.73, 0, -0.42);

    &::before {
      content: '';
      z-index: -1;
      inset: 0;
      position: absolute;
      transform: translateX(10px) rotateY(1.8deg);
      opacity: 50%;
      background-color: var(--button-color);
      box-shadow: 0 0 7px var(--button-shadow);
      filter: blur(5px) drop-shadow(0 0 5px var(--button-shadow));
    }
  }

  &:has(button:hover) {
    /* кнопка при наведении */
    --button-color: ${() => lighten(0.15, cssVar('--main-theme-color'))};
    --button-shadow: ${() => lighten(0.15, cssVar('--main-shadow-color'))};

    button[type='button']::before {
      /* без переключателя меню, только у больших кнопок */
      box-shadow: 0 0 14px var(--button-shadow);
      filter: blur(5px) drop-shadow(0 0 10px var(--button-shadow));
    }
  }

  &:has(button:active) {
    /* при удержании кнопки */
    --button-text-color: var(--active-color);
    --button-shadow: var(--active-shadow-color);
  }

  &:has(.active:not(:disabled)) {
    /* после нажатия, когда активна */
    --button-color: var(--active-color);
    --button-shadow: var(--active-shadow-color);

    &:hover {
      --button-color: ${() => lighten(0.15, cssVar('--active-color'))};
      --button-shadow: ${() => lighten(0.15, cssVar('--active-shadow-color'))};
    }

    &:active {
      --button-text-color: var(--main-theme-color);
      --button-shadow: var(--main-shadow-color);
    }
  }

  &:has(button:disabled) {
    /* после нажатия, когда выключается */
    --button-color: var(--accent-color);
    --button-shadow: var(--accent-shadow-color);

    button {
      pointer-events: none;
    }
  }

  &.closed {
    /* при закрытом меню */
    button[type='button'] {
      opacity: 0;
      transition: opacity var(--animation-timer-turn-off);
    }
  }

  &.hidden {
    button[type='button'] {
      display: none;
    }
  }

  @media (width < ${() => `${ScreenWidth.desctopL}px`}) {
    /* только цвета */
    & {
      --button-color: ${() => darken(0.1, cssVar('--main-theme-color'))};
      --button-shadow: ${() => darken(0.1, cssVar('--main-shadow-color'))};

      button[type='button']::before {
        opacity: 100%;
        background-color: ${() => darken(0.47, cssVar('--main-shadow-color'))};
        filter: blur(5px)
          drop-shadow(
            0 0 6px ${() => darken(0.3, cssVar('--main-shadow-color'))}
          );
      }
    }

    &:has(button:hover) {
      /* кнопка при наведении */
      --button-color: var('--main-theme-color');
      --button-shadow: var('--main-shadow-color');

      button[type='button']::before {
        /* без переключателя меню, только у больших кнопок */
        box-shadow: 0 0 14px var(--button-shadow);
        background-color: ${() => darken(0.4, cssVar('--main-shadow-color'))};
        filter: blur(5px)
          drop-shadow(
            0 0 10px ${() => darken(0.1, cssVar('--main-shadow-color'))}
          );
      }
    }

    &:has(button:active) {
      /* при удержании кнопки */
      --button-text-color: var(--active-color);
      --button-shadow: var(--active-shadow-color);
    }

    &:has(.active:not(:disabled)) {
      /* после нажатия, когда активна */
      --button-color: ${() => darken(0.15, cssVar('--active-color'))};
      --button-shadow: ${() => darken(0.15, cssVar('--active-shadow-color'))};

      button[type='button']::before {
        box-shadow: 0 0 14px var(--button-shadow);
        background-color: ${() =>
          darken(0.47, cssVar('--active-shadow-color'))};
      }

      &:hover {
        --button-color: var(--active-color);
        --button-shadow: var(--active-shadow-color);

        button[type='button']::before {
          background-color: ${() => darken(0.27, cssVar('--active-color'))};
        }
      }

      &:active {
        --button-text-color: var(--main-theme-color);
        --button-shadow: var(--main-shadow-color);
      }
    }

    &:has(button:disabled) {
      /* после нажатия, когда выключается */
      --button-color: ${() => darken(0.1, cssVar('--accent-color'))};
      --button-shadow: ${() => darken(0.1, cssVar('--accent-color'))};

      button[type='button']::before {
        background-color: ${() => darken(0.32, cssVar('--accent-color'))};
        filter: blur(5px) drop-shadow(0 0 5px var(--button-shadow));
      }
    }
  }
`;

const Lamp = styled.div`
  position: relative;
  transform: translateX(50%);
  block-size: 60px;
  inline-size: 16px;
  border-radius: 5px;
  background: linear-gradient(315deg, #272c2d 0%, #51585d 74%);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 40px;
    width: 4px;
    background-color: var(--button-color);
    box-shadow: 0 0 10px var(--button-shadow);
  }

  &.lamp_turn-on_transition {
    &::before {
      transition: background-color var(--animation-timer-turn-on) cubic-bezier(0.11, 1.73, 0, -0.42),
        box-shadow var(--animation-timer-turn-on) cubic-bezier(0.11, 1.73, 0, -0.42);
    }
  }

  button[type='button'] + &.closed {
    &::before {
      box-shadow: -1px 0 10px 1px ${() => darken(0.45, cssVar('--button-shadow'))};
      background-color: ${() => darken(0.27, 'lightgray')};
      transition: background-color var(--animation-timer-turn-off);
    }
  }
`;
