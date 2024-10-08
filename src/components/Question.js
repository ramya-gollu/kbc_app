// src/components/Question.js
import React from 'react';

const Question = ({ question, nextQuestion }) => {
  return (
    <div className="question-container">
      <h2>{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  );
};

export default Question;
