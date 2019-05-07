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
      <Row>
        <Period name="break" length={5} />
        <TimeButtons period="break" />
      </Row>
      <Row>
        <Period name="session" length={25} />
        <TimeButtons period="session" />
      </Row>
      <Row>
        <Timer timeLeft={2500} />
      </Row>
      <Row>
        <ControlButtons />
      </Row>
    </Container>
  );
}

export default App;
