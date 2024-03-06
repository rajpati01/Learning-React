import './App.css'
import { useCallback, useEffect, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // function to generate random set of character
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "`~!@#$%^&*(){}[]"; 

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() *str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() =>{
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg
        p-2 py-3 my-6 text-orange-500 bg-gray-700'>

        {/* project heading */}
        <h1 className='text-3xl text-center text-white mx-4 my-6'>Password Generoator</h1>
        
        {/*input field for password and copy button*/}
        <div className='flex rounded-lg overflow-hidden p-3'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-2 px-3 rounded-lg'
          placeholder='password'
          readOnly
          />
          <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          {/* input fieldfor slider/ range */}
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={30}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
             />
            <label>length: {length}</label>
          </div>

          {/* input field for number checkbox */}
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }} />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          {/* input field for symbol checkbox */}
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            id='characterInput'
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }} />
            <label htmlFor='symbolInput'>Symbol</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
