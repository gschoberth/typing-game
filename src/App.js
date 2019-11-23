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

  const [userInput,setText] = useState("")
  const [wordCount,setWordCount] = useState(0)
  const [timer, setTimer] = useState(5)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() =>{
    if(isRunning && timer > 0){
      setTimeout(() =>{
        console.log(timer)
        setTimer(prevState => prevState - 1)
      }, 1000)
    } else{
      setIsRunning(false)
    }
  },[isRunning,timer])

  function handleChange(event){
    const {value} = event.target
    setText(value)
  }

  //World's longest string operation
  //Trim out the whitespace, split on the whitespace, filter out any remaining whitespace and return the number of elements of the array.
  function wordCounter(text){
    return text.trim().split(" ").filter(str => str !== "").length
  }

  return(
    <div>
      <h1>Typing Game</h1>
      
      <textarea 
        name="userInput"
        onChange={handleChange}
        
        value={userInput}
      />

      <h4>Time Remaining: {timer}</h4>
      <button onClick={() => setIsRunning(true)}>Start Challenge</button>
      <h1>Total Word Count:{wordCount}</h1>
    </div>
  )
}

export default App;
