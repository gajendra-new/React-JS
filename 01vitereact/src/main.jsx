import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const anotherUser="chai aur react"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
