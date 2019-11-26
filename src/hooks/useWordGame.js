import {useState, useEffect,useRef} from 'react'

function useWordGame(startingTime){
    const [userInput,setText] = useState("")
    const [wordCount,setWordCount] = useState(0)
    const [timer, setTimer] = useState(startingTime)
    const [isRunning, setIsRunning] = useState(false)
  
    const textRef = useRef(null)
  
    function handleChange(event){
      const {value} = event.target
      setText(value)
    }
  
    function initializeGame(){
      setIsRunning(true)
      setTimer(startingTime)
      setText("") 
      textRef.current.disabled = false   
      textRef.current.focus()
    }
  
    function endGame(){
      setWordCount(wordCounter(userInput))
      setIsRunning(false)
    }
  
    useEffect(() =>{
      if(isRunning && timer > 0){
        setTimeout(() =>{
          console.log(timer)
          setTimer(prevState => prevState - 1)
        }, 1000)
      } else{
        endGame()
      }
    },[isRunning,timer])
  
    //World's longest string operation
    //Trim out the whitespace, split on the whitespace, filter out any remaining whitespace and return the number of elements of the array.
    function wordCounter(text){
      return text.trim().split(" ").filter(str => str !== "").length
    }

    return {textRef, handleChange, isRunning, userInput, timer, initializeGame, wordCount}
}

export default useWordGame