import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Player } from './components/Player/Player';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Player video='https://vwaw368.cda.pl/x3Q-noh2CNhuWag1WK_fuw/1670396865/hd1cf07eb8f69b5e82d295199fecde4ee7.mp4' />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
