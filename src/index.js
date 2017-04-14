import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/semantic-ui-css/semantic.css';

// Import store
import store  from './store'
import {Provider} from 'react-redux';



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
