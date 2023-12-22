// GamePage.js
import React, { useState } from 'react';
import KalviumLogo from './assets/KalviumLogo.png';
import './GamePage.css';
import { QuizData } from '../questions';

function GamePage({ finishGame }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState([]);
  const [highlightColor, setHighlightColor] = useState('#3498db'); // Default color

  const ChangeQuestion = () => {
    if (clickedOption === 0) {
      alert('Please select an option before proceeding to the next question.');
    } else {
      updateScore();
      if (currentQuestion < QuizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setClickedOption(0);
      } else {
        finishGame(score, answeredCorrectly);
      }
    }
  };

  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
      setAnsweredCorrectly([...answeredCorrectly, currentQuestion]);
    }
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const highlightQuestion = () => {
    const newColor = getRandomColor();
    setHighlightColor(newColor);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
      <div className='GamePage_BodyDiv'>
          <img className='GamePage_KalviumLogo_Image' src={KalviumLogo} alt="kalvium logo"/>
        <div className='GamePage_Question_div' style={{ borderBottom: `2px solid ${highlightColor}` }}>
          <div className='theme-toggle-container'>
            <input
              type='checkbox'
              id='theme-toggle'
              className='theme-toggle-checkbox'
              onChange={toggleTheme}
              checked={darkTheme}
            />
            <label htmlFor='theme-toggle' className={`theme-toggle-label ${darkTheme ? 'dark' : 'light'}`}>
              <span className='theme-toggle-ball'></span>
            </label>
          </div>
          <div className='GamePage_Question_Div'>
            <section className='GamePage_question_no'>{currentQuestion + 1}.</section>
            <section className='GamePage_question_txt' style={{ color: highlightColor }}>
              {QuizData[currentQuestion].question}
            </section>
          </div>
        </div>
        <div className='GamePage_options_div'>
          {QuizData[currentQuestion].options.map((option, i) => (
            <button
              className={`GamePage_options_btn ${clickedOption === i + 1 ? 'clicked' : ''}`}
              onClick={() => setClickedOption(i + 1)}
              key={i}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          className='glowing-button'
          onClick={highlightQuestion}
        >
          Highlight
        </button>
        <button
          className='button'
          onClick={ChangeQuestion}
        >
          {currentQuestion === QuizData.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default GamePage;
