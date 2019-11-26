import React, {useState,useEffect,useRef} from 'react';
import useWordGame from './hooks/useWordGame'
import './App.css';


function App() {

  const {
    textRef, 
    handleChange, 
    isRunning, 
    userInput, 
    timer, 
    initializeGame, 
    wordCount
  } = useWordGame(5)

  return(
    <div>
      <h1>Typing Game</h1>
      
      <textarea 
        name="userInput"
        onChange={handleChange}
        disabled={!isRunning}
        value={userInput}
        ref={textRef}
      />

      <h4>Time Remaining: {timer}</h4>
      <button 
        onClick={initializeGame} 
        disabled={isRunning}>Start Challenge
      </button>
      <h1>Total Word Count:{wordCount}</h1>
    </div>
  )
}

export default App;
