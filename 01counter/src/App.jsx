import { useState } from 'react';
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(5)

  // let counterValue = 5;

  const addValue = () => {
    // console.log("value added", counter);
    // counterValue = counterValue + 1;
    if(counter > 19) {
      counter = 20;
    } else{
      setCounter(counter + 1);
    }
  }

  const subtractValue = () => {
    if(counter < 1) {
      counter = 1;
    }
    else {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h2>Counter | Project 01</h2>
      <h3>counter value: {counter}</h3>
      <button onClick={addValue}>Increment</button> 
      <button onClick={subtractValue}>Decrement</button>
    </>
  )
}

export default App
