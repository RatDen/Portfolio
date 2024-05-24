import { styled } from 'styled-components';
import { useEffect, useRef } from 'react';
import { darken, cssVar } from 'polished';
import RoundButton from '/src/components/Buttons/RoundButton';
import ScreenWidth from '/src/ScreenWidth';

export default function HologramModal({ title, isClosed, close, children, footer }) {
  const modalContainerRef = useRef();
  const modalBodyRef = useRef();

  useEffect(() => {
    // добавление display: none когда модальное окно закрыто
    modalContainerRef.current.addEventListener('transitionend', () => {
      if (modalContainerRef.current.classList.contains('closed')) {
        modalContainerRef.current.classList.add('hidden');
      }
    });
  }, []);

  useEffect(() => {
    if (isClosed) {
      modalBodyRef.current.classList.add('closed');
      modalContainerRef.current.classList.add('closed');
    } else {
      modalContainerRef.current.classList.remove('hidden');
      // нужно для отрисовки анимации, без таймаута не отрисовывается
      setTimeout(() => {
        modalBodyRef.current.classList.remove('closed');
        modalContainerRef.current.classList.remove('closed');
      }, 0);
    }
  }, [isClosed]);

  return (
    <ModalContainer ref={modalContainerRef} className='closed'>
      <ModalHeader>
        <ModalHeaderTitle>{title}</ModalHeaderTitle>
        <RoundButton type='close' onClick={close} />
      </ModalHeader>
      <ModalBody ref={modalBodyRef}>
        <ModalBodyContentWrap>{children}</ModalBodyContentWrap>
      </ModalBody>
      <ModalFooter>{footer}</ModalFooter>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  --modal-borders-heght: 58px;

  position: absolute;
  width: 800px;
  margin: 0;
  padding: 0;
  border: 2px solid var(--main-theme-color);
  border-radius: 20px;
  text-shadow: 0 0 15px var(--main-shadow-color);
  color: var(--main-theme-color);
  background-color: transparent;
  box-shadow: 0 0 15px var(--main-shadow-color);
  opacity: 1;
  transition: opacity 0.3s 0.15s;

  &.closed {
    opacity: 0;
    transition: opacity 0.1s 0.3s;
  }

  &.hidden {
    display: none;
  }

  @media (width <= ${() => `${ScreenWidth.desctopS}px`}) {
    width: 100%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: var(--modal-borders-heght);
  padding: 0 15px 0 30px;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  border-bottom: inherit;
  background-color: ${() => darken(0.2, cssVar('--main-theme-bg-dense-color'))};
`;

const ModalHeaderTitle = styled.h2`
  font-size: 25px;
  color: var(--main-theme-color);
  pointer-events: none;
`;

const ModalBody = styled.div`
  height: 500px;
  background-color: ${() => darken(0.35, cssVar('--main-theme-bg-hard-color'))};
  overflow: hidden;
  transition: height 0.3s 0.6s;

  &.closed {
    height: 0;
    transition: height 0.3s;
  }

  @media (width <= ${() => `${ScreenWidth.tabletM}px`}) {
    height: calc(var(--viewport-height) - 56px * 2 - 118px);
  }
`;

const ModalBodyContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  width: 100%;
  padding: 20px 14px;
  overflow-y: scroll;
  scrollbar-gutter: stable both-edges;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--main-theme-color);
    border-radius: 10px;
  }
`;

const ModalFooter = styled.div`
  display: grid;
  width: 100%;
  height: var(--modal-borders-heght);
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  border-top: inherit;
  background-color: ${() => darken(0.2, cssVar('--main-theme-bg-dense-color'))};

  @media (width <= ${() => `${ScreenWidth.tabletM}px`}) {
    justify-content: center;
  }
`;
