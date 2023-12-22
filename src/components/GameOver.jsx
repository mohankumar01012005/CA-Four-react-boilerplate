// ScorePage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { QuizData } from '../questions';
import './GameOver.css';

function ScorePage({ score, userAnswers }) {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  let scorePhrase;

  if (score === 0) {
    scorePhrase = "Oops! Your cricket knowledge is currently doing somersaults in zero gravity!";
  } else if (score === 1 || (score >= 2 && score <= 3)) {
    scorePhrase = "Well, at least you scored! Your cricketing neurons are doing cartwheels!";
  } else if ((score >= 4 && score <= 5) || (score >= 6 && score <= 7)) {
    scorePhrase = `${score} points! Your cricket wisdom is like a double-century, just in a smaller unit!`;
  } else if ((score >= 8 && score <= 9) || (score >= 10 && score <= 11)) {
    scorePhrase = `${score} points! Your cricket expertise is shining like a supernova in the cricketing galaxy!`;
  } else if ((score >= 12 && score <= 13) || (score >= 14 && score <= 15)) {
    scorePhrase = `${score} points! Your cricket acumen is sharper than a yorker on the leg stump!`;
  } else if ((score >= 16 && score <= 17) || (score >= 18 && score <= 19)) {
    scorePhrase = `${score} points! Your cricketing brain is like a magician pulling off mind-bending deliveries!`;
  } else if (score === 20) {
    scorePhrase = "Congratulations! Your cricket expertise is so mad, it's on the verge of inventing a new cricket format!";
  }

  return (
    <div className={`GamePage_BodyDiv ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className='toggle-container' onClick={toggleTheme}>
        <div className={`toggle ${darkTheme ? 'dark' : 'light'}`}></div>
      </div>
     <div className='GameOver_div'> <h2 className='Game_over_Yourscore'>Your Score: {score}</h2>
      <p className='GameOver_Phrase'>{scorePhrase}</p></div>
    </div>
  );
}

export default ScorePage;
