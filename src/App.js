import React from 'react';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';


import {Period} from './components/period.js';
import {TimeButton} from './components/time_button.js';
import Timer from './components/timer.js';

function App() {
  return(
    <Container >
      <Period name="break" length={5} />
      <TimeButton period="break" />
      <Period name="session" length={25} />
      <TimeButton period="session" />
      <Timer timeLeft={2500} />
    </Container>
  );
}

export default App;
