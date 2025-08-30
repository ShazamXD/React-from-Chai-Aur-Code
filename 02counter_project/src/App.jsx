import { useState } from 'react' /* A React hook that lets you use state(a variable that
remembers data) inside a function component */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' // importing css for styling

function App() { /* A React Functional Component, everthing inside it will define what
  appears on the screen */

  let[counter, setCounter] = useState(15) /* creates a state variable counter with an initial
  value 15. setCounter is a function to update the counter value while counter is the initial
  value of counter i.e. 15 */

  // let counter = 15; because above const doing the same thing

  const addValue = () => {
    setCounter(prevCounter => {
      if(prevCounter < 20){ // counter can't go above 20
        return counter+1;
      }
      return `aur koi kaam nhi hai ??`
    })
  }

  const removeValue = () => {
    setCounter(prevCounter => {
      if(prevCounter >0 ){ // counter can't go below 0
        return prevCounter-1
      }
      return 0
    })
  }
  

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2> 
      {/* shows current value of counter */}

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
