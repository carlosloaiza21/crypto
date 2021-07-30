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
  Switch
} from "react-router-dom";
import Dashboard from './Pages/Dashboard';

ReactDOM.render(
    <Provider store={STORE}>
    
    <Router>
    <Switch>
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      </Switch>
    </Router>
    
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
