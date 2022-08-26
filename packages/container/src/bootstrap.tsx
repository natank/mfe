import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const el = document.getElementById('root')
if(el) {
    console.log('rendering container')
    const root = ReactDOM.createRoot(el)
    root.render(<App />);
}
