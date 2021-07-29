import React from 'react';
import Header from './components/Header';
import './App.css';

const App=() => {
  return (
    <div className="App">
      <Header
        name="Carlos"
        lastName="Loaiza"
        email="carlosloaiza21@hotmail.com"
        phone="5572814214"

      />
      
    </div>
  );
}

export default App;
