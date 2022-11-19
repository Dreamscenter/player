import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Player } from './components/Player';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Player video='https://vwaw360.cda.pl/k2KSFN7ePwcNTpZgRQONzw/1668931435/hd911cdd8c783b28ec1bd8441f91b640d7.mp4' />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
