import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Hello from './Hello';
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Hello name={28}/>
)

reportWebVitals()
