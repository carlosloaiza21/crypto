import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WelcomePage from './Pages/WelcomePage';
import reportWebVitals from './reportWebVitals';
import STORE from './STORE';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Dashboard from './Pages/Dashboard';

ReactDOM.render(
    <Provider store={STORE}>
    <Router>
      <Route path="/welcome">
        <WelcomePage />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
