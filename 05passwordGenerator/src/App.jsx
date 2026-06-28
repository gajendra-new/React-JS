import { useEffect, useRef, useState, useCallback } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (charAllowed) str += '!@#$%^&*()_+'
    if (numberAllowed) str += '0123456789'

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    generatePassword()
  }, [generatePassword])

  const copyPassword = useCallback(async () => {
    if (passwordRef.current) {
      passwordRef.current.select()
      await navigator.clipboard.writeText(password)
      passwordRef.current.focus()
    }
  }, [password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h3 className='text-white text-center whitespace-nowrap'>Password Generator</h3>

        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input
            ref={passwordRef}
            type='text'
            value={password}
            className='w-full px-3 py-1 bg-white text-black focus:outline-none'
            placeholder='Your Password'
            readOnly
          />
          <button
            onClick={copyPassword}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 focus:outline-none'
          >
            copy
          </button>
        </div>

        <div className='flex items-center gap-x-2 text-sm text-white whitespace-nowrap overflow-x-auto'>
          <span>Length: {length}</span>
          <input
            type='range'
            min={6}
            max={20}
            value={length}
            className='w-24 cursor-pointer'
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label className='flex items-center gap-x-1 whitespace-nowrap'>
            <input
              type='checkbox'
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            Numbers
          </label>
          <label className='flex items-center gap-x-1 whitespace-nowrap'>
            <input
              type='checkbox'
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            Characters
          </label>
        </div>

        <button
          onClick={generatePassword}
          className='mt-3 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none'
        >
          Generate Password
        </button>
      </div>
    </>
  )
}

export default App
