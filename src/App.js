import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return(
    <div className="container">
      <Period name="break" length={5} />
      <Period name="session" length={25} />
      <TimeButton period="break" />
      <TimeButton period="session" />
    </div>
  );
}

export default App;
