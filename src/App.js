import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * Challenge: build the basic structure of our game
 * 
 * 1. <h1> title at the top
 * 2. <textarea> for the box to type in 
 *      (tip: React normalizes <textarea /> to be more like <input />, 
 *      so it can be used as a self-closing element and uses the `value` property
 *      to set its contents)
 * 3. <h4> ti display the amount of time remaining
 * 4. <button> to start the game
 * 5. Another <h1> to display the word count
 */

function App() {

  const[userInput,setUserInput] = useState("")

 

  function handleChange(event){
    const {value} = event.target
    setUserInput(value)
  }

  return(
    <div>
      <h1>Typing Game</h1>
      
      <textarea 
        name="userInput"
        onChange={handleChange}
        value={userInput}
      />

      <h4>Time Remaining: ??</h4>
      <button>Start Challenge</button>
      <h1>Total Word Count</h1>
    </div>
  )
}

export default App;
