// Home.js
import React, { useState } from 'react';
import KalviumLogo from './assets/KalviumLogo.png';
import Logo from './assets/Logo.png';
import './Home.css';

function Home({ startGame }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`HomePage_Div ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className='logo_div'>
        <img className='KalviumLogo_Image' src={KalviumLogo} alt="kalvium logo" />
        <img className='App_logo' src={Logo} alt="Logo" />
        <label className='switch'>
          <input type='checkbox' onChange={toggleDarkMode} />
          <span className={`slider ${darkMode ? 'dark' : 'light'}`}></span>
        </label>
        <span className={`mode-label ${darkMode ? 'dark' : 'light'}`}>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
      </div>
      <h2 className='first_line_txt'>QuizQuest: Master Your Mind</h2>
      <h2 className='second_line_txt'>Unlock Your Knowledge Power!</h2>
      <button className='play_btn' onClick={startGame}>Play</button>
      <div className='toggle-button-container'>
        
      </div>
    </div>
  );
}

export default Home;
