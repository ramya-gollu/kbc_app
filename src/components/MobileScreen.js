// src/components/MobileScreen.js
import React, { useState } from 'react';

const MobileScreen = ({ addPlayer, currentQuestionIndex, questions }) => {
  const [playerName, setPlayerName] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleJoin = () => {
    if (playerName) addPlayer(playerName);
  };

  const handleAnswerSubmit = () => {
    if (selectedOption === questions[currentQuestionIndex].correct) {
      alert('Correct Answer!');
    } else {
      alert('Wrong Answer!');
    }
  };

  return (
    <div className="mobile-screen">
      <h1>Join the Game</h1>
      {!playerName ? (
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <button onClick={handleJoin}>Join</button>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestionIndex].question}</h2>
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => setSelectedOption(option[0])}>
                  {option}
                </button>
              </li>
            ))}
          </ul>
          <button onClick={handleAnswerSubmit}>Submit Answer</button>
        </div>
      )}
    </div>
  );
};

export default MobileScreen;
