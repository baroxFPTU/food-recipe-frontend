import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './app/store';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint='xxs'
      >
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
