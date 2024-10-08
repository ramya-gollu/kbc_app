// src/components/MainScreen.js
import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import Question from './Question';

const MainScreen = ({ players, currentQuestionIndex, questions, nextQuestion }) => {
  return (
    <div className="main-screen">
      <h1>KBC Game</h1>
      <QRCodeCanvas value="http://localhost:3000/mobile" />
      <h2>Players Joined:</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
      <Question
        question={questions[currentQuestionIndex]}
        nextQuestion={nextQuestion}
      />
    </div>
  );
};

export default MainScreen;
