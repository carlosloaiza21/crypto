import React from 'react';
import Header from './components/Header';
import './App.css';
import { Link } from 'react-router-dom';

const App=() => {
  return (
    <div className="App">
      <Link to="/welcome">App</Link>
      
    </div>
  );
}

export default App;
