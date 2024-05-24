import { styled } from 'styled-components';
import StarWarsScroller from '../StarWarsScroller';
import CaseItem from '../ItemElements/CaseItem';

export default function Portfolio() {
  return (
    <PageContainer id='portfolio'>
      <StarWarsScroller>
        <Filler />
        <CaseItem
          title='Пятая практическая работа Яндекс Практикум'
          url='https://ratden.github.io/mesto-project-ff/'
          img={'https://sun9-9.userapi.com/impg/ORjgP6INkPVRGuiO65zwauzySmDtfvlO1QQHMg/yc4S38J0GKg.jpg?size=1116x890&quality=96&sign=8a96aea8e3f9dfc8cea807778587c6b9&type=album'}
          alt='Скриншот работы'
        >
          <DescriptionContainer>
            <li>Реализована фронтэнд часть одностраничной социальной сети</li>
            <li>Использовались асинхронные запросы к серверу с дальнейшим преобразованием и выводом информации на страницу</li>
            <li>Имеется возможность добавлять, удалять (свои), лайкать карточки. Можно редактировать профиль (изменять аватар, имя и подпись)</li>
            <li>Были отработаны навыки взаимодействия фронтэнд части с уже готовым API сервера</li>
            <li>В процессе разработки использовался сборщик Webpack с различными минификаторами и пост обработчиками кода</li>
          </DescriptionContainer>
        </CaseItem>
        <CaseItem
          title='Четвертая практическая работа Яндекс Практикум'
          url='https://ratden.github.io/zakrivayuschiy-teg-f/'
          img={'https://sun9-30.userapi.com/impg/NwS3yNagWBXmRzca-_2D72Aw4Wy-DGKE-WDHaw/bEcmx2HL9JI.jpg?size=957x526&quality=96&sign=2def29dd74fd5f1c24c773b6c3b2603b&type=album'}
          alt='Скриншот работы'
        >
          <DescriptionContainer>
            <li>Реализован одностраничный отзывчивый, адаптивный сайт. Размеры и положение элементов меняются в зависимости от размера экрана устройства</li>
            <li>Отработаны навыки работы с графическими элементами (картинки, svg, градиенты и фильтры)</li>
            <li>Отработаны навыки работы с анимациями пользовательского интерфейса</li>
            <li>Реализована смена темы (автоматическая, светлая и темная)</li>
          </DescriptionContainer>
        </CaseItem>
        <CaseItem
          title='Курсовая работа'
          url='https://ratden.github.io/Coursework/'
          img={'https://sun9-13.userapi.com/impg/wnRb3J5TWsg05Usutu_I_Psug6Za2FSbvwzx9A/tYAI7ukLUJ4.jpg?size=1870x945&quality=96&sign=5fde98cb1052b66bd7cf8961485b351d&type=album'}
          alt='Скриншот работы'
        >
          <DescriptionContainer>
            <li>Реализована упрощенная таблица для учета товара на некотором предприятии.</li>
            <li>Разработана простая база данных и пользовательский интерфейс взаимодействия с ней. Имеется возможность добавлять, удалять и изменять записи.</li>
            <li>При большом количестве записей у таблицы появляется прокрутка.</li>
            <li>Разметка выполнена с помощью bootstrap</li>
            <li>К сожалению на github pages нет возможности работать с бд, поэтому по ссылке видна только верстка. Серверную часть можно посмотреть в самом репозитории.</li>
            <li>Примерное время - 4 часа</li>
          </DescriptionContainer>
        </CaseItem>
        <CaseItem
          title='Курсовая работа'
          url='https://ratden.github.io/DimaExpress/'
          img={'https://sun9-78.userapi.com/impg/EVNT8CWMZx95mfA0tK8ttY08KgPXmk7s3EC_LA/2ob6mk5XMK0.jpg?size=1871x940&quality=96&sign=8d92457ff7ba35056c2fb32316097584&type=album'}
          alt='Скриншот работы'
        >
          <DescriptionContainer>
            <li>Реализована упрощенная таблица для учета товара на некотором предприятии.</li>
            <li>Разработана простая база данных и пользовательский интерфейс взаимодействия с ней. Имеется возможность добавлять, удалять и изменять записи.</li>
            <li>При большом количестве записей у таблицы появляется прокрутка.</li>
            <li>Разметка выполнена с помощью bootstrap</li>
            <li>К сожалению на github pages нет возможности работать с бд, поэтому по ссылке видна только верстка. Серверную часть можно посмотреть в самом репозитории.</li>
            <li>Примерное время - 4 часа</li>
          </DescriptionContainer>
        </CaseItem>
        <CaseItem
          title='Третья практическая работа Яндекс Практикума'
          url='https://ratden.github.io/slozhno-sosredotochitsya/'
          img={'https://sun9-20.userapi.com/impg/qOZUyfkjFrCQeXQ3s-prn5E7B_tNl6ACDnPEfg/DXMEKWo-04g.jpg?size=1004x1109&quality=96&sign=c4b2c9c59e3d374579b7f87acf5ca376&type=album'}
          alt='Скриншот работы'
        >
          <DescriptionContainer>
            <li>Реализован одностраничный отзывчивый, адаптивный сайт. Размеры и положение элементов меняются в зависимости от размера экрана устройства</li>
            <li>Отработана работа с flex и grid элементами</li>
            <li>Реализована смена темы (автоматическая, светлая и темная)</li>
          </DescriptionContainer>
        </CaseItem>
        <CaseItem
          title='Вторая практическая работа Яндекс Практикума'
          url='https://ratden.github.io/posmotri_v_okno/'
          img={'https://sun9-13.userapi.com/impg/BCrK4elUkQIjye4Z5naS5UmPXe1FgNqfar0k_Q/JmZeZA2reks.jpg?size=1299x610&quality=95&sign=b99eb0e7eb26610cc42dfdfdf38ef9b6&type=album'}
          alt='Скриншот работы'
        >
          <DescriptionContainer>
            <li>Реализован одностраничный сайт с отзывчивым интерфейсом</li>
            <li>Отрабатывались навыки работы с видео и работы с готовым кодом</li>
          </DescriptionContainer>
        </CaseItem>
        <CaseItem
          title='Первая практическая работа Яндекс Практикум'
          url='https://ratden.github.io/ono-tebe-nado/'
          img={'https://sun9-35.userapi.com/impg/zNilcWYf7V7IviGFFJBlUEex3MsoU8yquE-L1A/8pTiO5s0FSk.jpg?size=1633x1108&quality=95&sign=630333381fbcf8dd50e9fb2966c2b53a&type=album'}
          alt='Скриншот работы'
        >
          <DescriptionContainer>
            <li>Реализован одностраничный статичный сайт с простым функционалом для отработки навыков верстки и кодстайла</li>
            <li>Использовалась семантическая верстка</li>
          </DescriptionContainer>
        </CaseItem>
        <Filler/>
      </StarWarsScroller>
    </PageContainer>
  );
}

const PageContainer = styled.section`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: 50% 50% / cover no-repeat url(${require('/src/assets/portfolio.jpg')});
  color: var(--main-theme-color);
  perspective: 100px;
  align-items: center;
`;

const DescriptionContainer = styled.ul`
  display: flex;
  list-style: disc;
  gap: 5px;
  flex-direction: column;
  padding-inline-start: 1lh;
`
const Filler = styled.div`
  min-height: calc(var(--viewport-height) * 0.75);
`