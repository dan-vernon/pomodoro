import React from 'react';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';


import Period from './components/period';
import TimeButtons from './components/time_buttons';
import ControlButtons from './components/control_buttons';
import Timer from './components/timer';

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
