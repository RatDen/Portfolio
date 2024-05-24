import { styled } from 'styled-components';
import { darken, cssVar } from 'polished';
import SocialsLink from './SocialsLink';
import ScreenWidth from '/src/ScreenWidth';

import Vk from '/src/assets/socials/vk.svg?react';
import Telegram from '/src/assets/socials/telegram.svg?react';
import Github from '/src/assets/socials/github.svg?react';

export default function Socials() {
  return (
    <SocialsContainer>
      <SocialsLink href='https://vk.com/anikeev.freelance' name='ВКонтакте'>
        <Vk />
      </SocialsLink>
      <SocialsLink href='https://vk.com/anikeev.freelance' name='Телеграм'>
        <Telegram />
      </SocialsLink>
      <SocialsLink href='https://github.com/RatDen?tab=repositories' name='Github'>
        <Github />
      </SocialsLink>
    </SocialsContainer>
  );
}

const SocialsContainer = styled.aside`
  z-index: 1;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  padding: 5px 0;
  box-sizing: border-box;
  border: 2px solid var(--main-theme-color);
  border-radius: 7.5px;
  box-shadow: 0 0 10px var(--main-shadow-color);
  background-color: ${() => darken(0.35, cssVar('--main-theme-bg-hard-color'))};

  @media (width < ${() => `${ScreenWidth.tabletM}px`}) {
    & {
      inset: auto 50% 5px auto;
      flex-direction: row;
      transform: translate(50%);
      padding: 0 5px;
    }
  }
`;
