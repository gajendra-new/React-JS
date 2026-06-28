import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

  const addValue = () => {
    console.log(counter,'counter value')
    setCounter(prev => Math.min(prev + 1, 20))
  }

  const removeValue = () => {
    console.log(counter,'counter value')
    setCounter(prev => Math.max(prev - 1, 0))
  }

  return (

    <>
      <h1>Counter App</h1>
      <h2> Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>remove value </button>

    </>
  )
}

export default App
