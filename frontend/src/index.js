  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import App from './App';
  import {Provider} from 'react-redux'
  import store from './store';
  import './index.css'
  import { BrowserRouter } from 'react-router-dom';
  import { SpeedInsights } from '@vercel/speed-insights/react';
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
          <App />
          <SpeedInsights/>
      </Provider>
    
      </BrowserRouter>
    
    </React.StrictMode>
  );


