import React from 'react';
import './App.css';

import {Period} from './components/period.js';
import {TimeButton} from './components/time_button.js';

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
