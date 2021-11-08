import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from '@emotion/react'



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorkerRegistration.unregister();

reportWebVitals();
