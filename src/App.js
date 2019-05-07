import React from 'react';
import './App.css';

import {Period} from './components/period.js';
import {TimeButton} from './components/time_button.js';
import Timer from './components/timer.js';

function App() {
  return(
    <div className="container">
      <Period name="break" length={5} />
      <Period name="session" length={25} />
      <TimeButton period="break" />
      <TimeButton period="session" />
      <Timer timeLeft={1500} />
    </div>
  );
}

export default App;
