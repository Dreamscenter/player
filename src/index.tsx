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
    <Player video='https://vcze303.cda.pl/iSmeuk8D7uy-1gUuSWEN_Q/1669514961/hdb3138ccfc8beb79301efe3d791ca6a1d.mp4' />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
