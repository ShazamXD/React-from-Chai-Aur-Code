import { useState, useCallback, useRef, useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8) // for the length of the password initially 8, setLength:function to update length
  const [numberAllowed, setNumberAllowed] = useState(false) // if numbers should be allowed or not initially false
  const [characterAllowed, setCharacterAllowed] = useState(false) // if characters should be allowed or not initially false
  const [password, setPassword] = useState("") // store the generated password, initially empty string 

  //useRef hook
  const passwordRef = useRef(null) /* To reference a DOM element (here, the input box) without causing re-renders.
  points to the password input box in the DOM, so we can select and copy text without re-rendering */

  const passwordGenerator = useCallback(()=>{ // To memorize functions so they don't get recreated unnecessarily on every render.
    let pass = "" // for storing password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789" // also include this if number allowed 
    if(characterAllowed) str+="!@#$%^&*()~?>:<" // also include this if character allowed 

    for (let i = 1; i < length; i++){
      let char = Math.floor(Math.random()*str.length+1) // this will give only the indexes
      pass += str.charAt(char) // add to pass
  }

    setPassword(pass) // state updated.... Why useCallback?To prevent creating a new function on every render unless dependencies change (length, numberAllowed, characterAllowed)

  }, [length, numberAllowed. characterAllowed, setPassword])

  // copy to clipboard 
  const copyPassordToClipboard = useCallback(()=>{
    passwordRef.current?.select(); // optional selection this check if not null then select 
    passwordRef.current?.setSelectionRange(0,999); // itna length will be selected when presses copy button
  },[password]) // used callback so it's not recreated everytime password changes


  useEffect(()=>{ //To run side effects (here, generate password when options change). Generate password automatically, on change in dependencies 
    passwordGenerator()
  },[length, numberAllowed, characterAllowed,passwordGenerator]) // runs evertime length, numberAllowed, characterAllowed changes since they are the dependencies
  // calls the passwordGenerator() automatically so new password is generated when options change. 


  return (
    <>
    <div className='flex justify-center items-center min-h-screen bg-gray-800'>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-300 bg-gray-600'>
        <h1 className="text-4xl text-center text-orange-400">Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-0.5 px-3 mb-1 mt-1'
          placeholder='Enter your password'
          readOnly
          ref={passwordRef} // this will provide the reference 
          />
          <button
          onClick={copyPassordToClipboard}
          className='outline-none bg-blue-600 h-7 w-12 mt-1 ml-1 rounded-md'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" className="cursor-pointer" 
            min={8}
            max={100}
            value={length}
            onChange={(e) => {setLength(e.target.value)}} // event handler for everytime the sliders value changes
            // when u move slider, length updates. Since, length used in passwordGenerator, a new password generated automatically becuause of the useEffect
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" className="checkbox" 
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange = {() => {
              setNumberAllowed((prev) => !prev); // so that agar true(ticked) ho to false(unticked) ho jaaye and visa-versa
            }}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" className="checkbox" 
            defaultChecked={characterAllowed}
            id="numberInput"
            onChange = {() => {
              setCharacterAllowed((prev) => !prev); // so that agar true(ticked) ho to false(unticked) ho jaaye and visa-versa
            }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
