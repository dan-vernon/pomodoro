import React, { useEffect, useState } from 'react';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';


import Period from './components/period';
import TimeButtons from './components/time_buttons';
import ControlButtons from './components/control_buttons';
import Timer from './components/timer';

function App() {
  const [breakLength, setBreakLength] = useState(300)
  const [sessionLength, setSessionLength] = useState(1500)
  const [timerRunning, toggleTimer] = useState(false)
  const [session, setSession] = useState({started: false, duration: [sessionLength, breakLength]})
  const [timeLeft, setTimeLeft] = useState(1500)

  useEffect(() => {
    if (timerRunning && !session.started) setSession(true)
  }, [timerRunning])

  useEffect(() => {
    if (breakLength >= 3600) setBreakLength(3600)
    if (breakLength <= 0) setBreakLength(0)
  }, [breakLength])

  useEffect(() => {
    if (sessionLength >= 3600) setSessionLength(3600)
    if (sessionLength <= 0) setSessionLength(0)
    if (!timerRunning && !session.started) setTimeLeft(sessionLength)
  }, [sessionLength])

  return(
    <Container >
      <Row>
        <Period name="break" length={breakLength} />
        <TimeButtons
          period="break"
          handleIncrement={() => setBreakLength(breakLength + 60)}
          handleDecrement={() => setBreakLength(breakLength - 60)}
          />
      </Row>
      <Row>
        <Period name="session" length={sessionLength} />
        <TimeButtons
          period="session"
          handleIncrement={() => setSessionLength(sessionLength + 60)}
          handleDecrement={() => setSessionLength(sessionLength - 60)}
            />
      </Row>
      <Row>
        <Timer timeLeft={timeLeft} running={timerRunning} />
      </Row>
      <Row>
        <ControlButtons />
      </Row>
    </Container>
  );
}

export default App;
