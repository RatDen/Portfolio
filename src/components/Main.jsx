import { styled } from 'styled-components';
import Welcome from './Pages/Welcome';
import Portfolio from './Pages/Portfolio';

export default function Main({ userDialog, closeDialog, setUserDialog }) {
  return (
    <MainWindow>
      <MainItemsWrap translate={userDialog === 'portfolio' ? '0vh' : '-100vh'}>
        <Portfolio />
        <Welcome
          userDialog={userDialog}
          closeDialog={closeDialog}
          setUserDialog={setUserDialog}
        />
      </MainItemsWrap>
    </MainWindow>
  );
}

const MainWindow = styled.main`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const MainItemsWrap = styled.div`
  position: relative;
  transform: translateY(${(props) => props.translate});
  transition: transform 0.4s;
`;
