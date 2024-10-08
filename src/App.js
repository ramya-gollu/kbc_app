// src/App.js
import React, { useState } from 'react';
import MainScreen from './components/MainScreen';
import MobileScreen from './components/MobileScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [players, setPlayers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["A. Paris", "B. Berlin", "C. Rome", "D. Madrid"],
      correct: "A",
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["A. Chaucer", "B. Shakespeare", "C. Dickens", "D. Orwell"],
      correct: "B",
    },
  ];

  const addPlayer = (name) => {
    setPlayers([...players, name]);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainScreen
              players={players}
              currentQuestionIndex={currentQuestionIndex}
              questions={questions}
              nextQuestion={nextQuestion}
            />
          }
        />
        <Route
          path="/mobile"
          element={
            <MobileScreen
              addPlayer={addPlayer}
              currentQuestionIndex={currentQuestionIndex}
              questions={questions}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
