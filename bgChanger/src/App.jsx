import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  const colors = ['olive', 'red', 'green', 'blue', 'black', 'white', 'pink', 'purple', 'gray']

  return (
    <div
      className="h-screen w-full duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed inset-x-0 bottom-8 flex justify-center px-4">
        <div className="flex flex-wrap items-center justify-center gap-3 rounded-full bg-white px-4 py-3 shadow-lg">
          {colors.map((item) => (
            <button
              key={item}
              onClick={() => setColor(item)}
              className="h-8 w-8 rounded-full border border-gray-300 shadow-sm hover:scale-110 transition"
              style={{ backgroundColor: item }}
              title={item}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
 
export default App
