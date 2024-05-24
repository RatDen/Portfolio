import { styled } from 'styled-components';
import HologramModal from '/src/components/Modals/HologramModal/HologramModal.jsx';
import {
  HologramHeader,
  HologramText,
} from '/src/components/Modals/HologramModal/HologramModalElements.jsx';
import ContactsForm from '../Forms/ContactsForm';
import SocialsLink from '/src/components/Socials/SocialsLink';
import Button from '/src/components/Buttons/Button.jsx';
import ModalCard from '/src/components/ItemElements/ModalCard.jsx';
import ScreenWidth from '/src/ScreenWidth';

import Vk from '/src/assets/socials/vk.svg?react';
import Telegram from '/src/assets/socials/telegram.svg?react';
import Github from '/src/assets/socials/github.svg?react';

export default function Welcome({ userDialog, closeDialog, setUserDialog }) {
  return (
    <PageContainer id='welcome'>
      <Slogan className={`${userDialog !== '' ? 'closed' : ''}`}>
        Create your own site <br /> or make it better
      </Slogan>
      <ModalsWrap>
        <HologramModal
          title='About me'
          isClosed={userDialog !== 'about' ? true : false}
          close={closeDialog}
          footer={
            <AboutFooterWrap>
              <ContactsFooterText>Хотите работать вместе?</ContactsFooterText>
              <Button
                type='submit'
                onClick={() => {
                  setUserDialog('contacts');
                }}
              >
                За работу
              </Button>
              <Button type='reset' onClick={closeDialog}>
                Закрыть
              </Button>
            </AboutFooterWrap>
          }
        >
          <HologramHeader>Мои навыки</HologramHeader>
          <AboutContentContainer>
            <ModalCard img={require('/src/assets/aboutCards/html.png')}>
              <li>Адаптивная верстка</li>
              <li>Отзывчивая вертска</li>
              <li>Семантичная вертска</li>
            </ModalCard>
            <ModalCard img={require('/src/assets/aboutCards/css.png')}>
              <li>Sass/Less</li>
              <li>Bootstrap</li>
              <li>Koala</li>
            </ModalCard>
            <ModalCard img={require('/src/assets/aboutCards/js.png')}>
              <li>Node.js</li>
              <li>JQuery (Ajax)</li>
              <li>Асинхронные запросы</li>
              <li>Работа с Api</li>
            </ModalCard>
            <ModalCard img={require('/src/assets/aboutCards/react.png')}>
              <li>styled-components</li>
              <li>react-hook-form</li>
              <li>polished</li>
            </ModalCard>
            <ModalCard img={require('/src/assets/aboutCards/additional.png')}>
              <li>Git</li>
              <li>Webpack</li>
              <li>Vite</li>
            </ModalCard>
            <ModalCard img={require('/src/assets/aboutCards/sql.png')}>
              <li>PostgreSQL</li>
              <li>pgAdmin4</li>
              <li>PowerDesigner</li>
            </ModalCard>
          </AboutContentContainer>
        </HologramModal>
        <HologramModal
          title='Contacts'
          isClosed={userDialog !== 'contacts' ? true : false}
          close={closeDialog}
          footer={
            <ContactsFooterWrap>
              <SocialsLink
                href='https://vk.com/anikeev.freelance'
                name='ВКонтакте'
              >
                <Vk />
              </SocialsLink>
              <SocialsLink
                href='https://vk.com/anikeev.freelance'
                name='Телеграм'
              >
                <Telegram />
              </SocialsLink>
              <SocialsLink
                href='https://github.com/RatDen?tab=repositories'
                name='Github'
              >
                <Github />
              </SocialsLink>
              <HologramText>{'<=  или найдите меня в соц сетях'}</HologramText>
            </ContactsFooterWrap>
          }
        >
          <HologramHeader>
            // Вы можете связаться со мной, заполнив и отправив форму:
          </HologramHeader>
          <p>(!Внимание из-за особенностей работы github pages отправка не возможна, лучший способ связаться со мной - написать во ВКонтакте)</p>
          <ContactsForm />
        </HologramModal>
      </ModalsWrap>
    </PageContainer>
  );
}

const PageContainer = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  background: 49% 50% / cover no-repeat
    url(${require('/src/assets/main-bg.jpg')});
`;

const Slogan = styled.p`
  position: absolute;
  inset-block-start: 15%;
  inset-inline-start: 10%;
  opacity: 70%;
  cursor: default;
  font-family: 'StarShineMF', sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  color: var(--main-theme-color);
  font-size: min(90px, 6.5vw);
  text-shadow: 0 0 70px var(--main-shadow-color);
  transition: opacity 0.4s, font-size 0.5s;

  &.closed {
    opacity: 0;
  }

  @media (width < ${() => `${ScreenWidth.desctopL}px`}) {
    font-size: 7.5vw;
  }

  @media (width < ${() => `${ScreenWidth.tabletM}px`}) {
    font-size: 8.5vw;
  }

  @media (width < ${() => `${ScreenWidth.tabletS}px`}) {
    inset-inline-start: 7%;
    font-size: max(41px, 10vw);
  }
`;

const ModalsWrap = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  top: calc(var(--viewport-height) / 2);
  left: 7.5%;

  @media (width <= ${() => `${ScreenWidth.desctopS}px`}) {
    left: 9%;
    right: 9%;
  }

  @media (width <= ${() => `${ScreenWidth.tabletS}px`}) {
    left: 15px;
    right: 15px;
  }
`;

const ContactsFooterText = styled.p`
  font-size: 20px;

  @media (width <= ${() => `${ScreenWidth.tabletM}px`}) {
    display: none;
  }
`;

const AboutContentContainer = styled.div`
  display: grid;
  grid-template: auto / 1fr 1fr;
  gap: 15px;

  @media (width <= ${() => `${ScreenWidth.tabletM}px`}) {
    grid-template: auto / auto;
  }
`;

const ContactsFooterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-self: start;
  margin: 0 10px;

  & > a > div {
    max-inline-size: 100% !important;
    transition: none !important;
  }

  @media (width <= ${() => `${ScreenWidth.tabletM}px`}) {
    display: none;
  }
`;
const AboutFooterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;
  margin: 0 10px;
  gap: 10px;
`;
