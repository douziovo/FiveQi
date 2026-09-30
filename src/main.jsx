import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import MainFrame from './MainFrame.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <MainFrame />
        </BrowserRouter>
    </StrictMode>,
)
