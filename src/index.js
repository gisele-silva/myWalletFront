import App from './components/App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import "./assets/App.css"
import "./assets/index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)