// App.js
import React, { useState } from 'react';
// import Home from './components/Home';
import Home from './components/Home';

// import GamePage from './components/GamePage';
import ScorePage from './components/GameOver';
// import ScorePage from './components/ScorePage';
import GamePage from './components/GamePage';
// import ReportPage from './components/ReportPage';
import { QuizData } from './questions';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const startGame = () => {
    setCurrentPage('game');
  };

  const finishGame = (finalScore, answers) => {
    setScore(finalScore);
    setUserAnswers(answers);
    setCurrentPage('score');
  };

  return (
    <div className='App'>
      {currentPage === 'home' && <Home startGame={startGame} />}
      {currentPage === 'game' && <GamePage finishGame={finishGame} />}
      {currentPage === 'score' && <ScorePage score={score} userAnswers={userAnswers} quizData={QuizData} />}
      
    </div>
  );
}

export default App;
