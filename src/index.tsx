import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div id="wallpaper" className="wallpaper" data-image="../Content/images/background.jfif"></div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
