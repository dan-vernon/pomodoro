import React, { useEffect, useState, useRef } from 'react';
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
  const [session, setSession] = useState({started: false, breaktime: false})
  const [timeLeft, setTimeLeft] = useState(1500)

// monitor timerRunning and start session when true
  useEffect(() => {
    if (timerRunning && !session.started) setSession({...session, started: true})
  }, [timerRunning])

// enforce breakLength validations
  useEffect(() => {
    if (breakLength >= 3600) setBreakLength(3600)
    if (breakLength <= 0) setBreakLength(0)
  }, [breakLength])

  // enforce sessionLength validations
  useEffect(() => {
    if (sessionLength >= 3600) setSessionLength(3600)
    if (sessionLength <= 0) setSessionLength(0)
    // bind timeLeft to sessionLength unless the session has started
    if (!timerRunning && !session.started) setTimeLeft(sessionLength)
  }, [sessionLength])

// start break
  useEffect(() => {
    if (timeLeft === 0 && !session.breaktime) {
      setTimeLeft(breakLength)
      console.log('breaktime')
      setSession({...session, breaktime: true})
    }
  }, [timeLeft])

  // declare end of Pomodoro
  useEffect(() => {
    if (timeLeft === 0 && session.breaktime) {
      console.log('Let the games begin!')
      console.log(`${timeLeft} ${session.breaktime}`)
      console.log('Pomodoro finished')
    }
  }, [timeLeft, session.breaktime])

// hooks setInterval workaround
function useInterval(callback) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, 1);
    return () => clearInterval(id);
  });
}

// start timer if conditions met
useInterval(() => {
  if (timerRunning) setTimeLeft(timeLeft - 1)})

  function reset() {
  setSession({...session, started: false, breaktime: false})
  toggleTimer(false)
  setBreakLength(300)
  setSessionLength(1500)
}

  return(
    <Container >
      <Row>
        <Period name="break" length={breakLength} />
        <TimeButtons
          period="break"
          handleIncrement={() => setBreakLength(breakLength + 300)}
          handleDecrement={() => setBreakLength(breakLength - 300)}
          />
      </Row>
      <Row>
        <Period name="session" length={sessionLength} />
        <TimeButtons
          period="session"
          handleIncrement={() => setSessionLength(sessionLength + 300)}
          handleDecrement={() => setSessionLength(sessionLength - 300)}
            />
      </Row>
      <Row>
        <Timer timeLeft={timeLeft} running={timerRunning} />
      </Row>
      <Row>
        <ControlButtons
          handleStartStop={() => toggleTimer(!timerRunning)}
          handleReset={reset} />
      </Row>
    </Container>
  );
}

export default App;
