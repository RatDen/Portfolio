import { useState } from 'react';
import Header from './components/Header';
import Socials from './components/Socials/Socials';
import Menu from './components/Menu/Menu';
import Main from './components/Main';
import { toggleState, getWindowWidth } from '/src/scripts/functions';
import ScreenWidth from './ScreenWidth';

function App() {
  const [userDialog, setUserDialog] = useState('');
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  const onScreenWidthMenuToggle = (width) => {
    if (getWindowWidth() < width) {
      toggleState(menuIsOpen, setMenuIsOpen);
    }
  };

  return (
    <>
      <Header lang='en' name='Anikeev Denis' caption='Fullstack developer' />
      <Socials />
      <Menu
        isOpen={menuIsOpen}
        toggle={() => toggleState(menuIsOpen, setMenuIsOpen)}
      >
        <button
          type='button'
          className={`${userDialog === 'about' ? 'active' : ''}`}
          disabled={userDialog === 'about' ? true : false}
          onClick={() => {
            setUserDialog('about');
            onScreenWidthMenuToggle(ScreenWidth.desctopS);
          }}
        >
          About me
        </button>
        <button
          type='button'
          className={`${userDialog === 'contacts' ? 'active' : ''}`}
          disabled={userDialog === 'contacts' ? true : false}
          onClick={() => {
            setUserDialog('contacts');
            onScreenWidthMenuToggle(ScreenWidth.desctopS);
          }}
        >
          Contacts
        </button>
        <button
          type='button'
          className={`${userDialog === 'portfolio' ? 'active' : ''}`}
          onClick={() => {
            if (userDialog !== 'portfolio') {
              setUserDialog('portfolio');
              onScreenWidthMenuToggle(ScreenWidth.desctopS);
            } else {
              setUserDialog('');
            }
          }}
        >
          Portfolio
        </button>
      </Menu>
      <Main
        userDialog={userDialog}
        closeDialog={() => setUserDialog('')}
        setUserDialog={setUserDialog}
      />
    </>
  );
}

export default App;
