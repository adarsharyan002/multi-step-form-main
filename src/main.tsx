import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StepperContextProvider } from './contexts/StepperContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StepperContextProvider>
    <App />
    </StepperContextProvider>
  </React.StrictMode>,
)
