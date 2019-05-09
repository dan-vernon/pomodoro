import React, { useEffect, useState, useRef } from 'react';
import { ReactComponent as Logo } from './logo.svg';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import './App.css';


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
  const [progress, setProgress] = useState(0)
  const [speed, setSpeed] = useState(1000)

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
    if (timerRunning && timeLeft === 0 && !session.breaktime) {
      setTimeLeft(breakLength)
      console.log('breaktime')
      setSession({...session, breaktime: true})
      document.getElementById('root').insertAdjacentHTML('afterbegin',
    "<audio src='https://freesound.org/data/previews/320/320652_5260872-lq.mp3' id='sessionAudio' autoplay />")
    }
  }, [timeLeft])

  // declare end of Pomodoro
  useEffect(() => {
    if (timeLeft === 0 && session.breaktime) {
      console.log('Pomodoro finished')
      document.getElementById('root').insertAdjacentHTML('afterbegin',
    "<audio src='https://freesound.org/data/previews/171/171671_2437358-lq.mp3' id='beep' autoplay />")
    document.getElementById('timer-label').innerHTML="Get back to work!"
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
    let id = setInterval(tick, speed);
    return () => clearInterval(id);
  });
}

// start timer if conditions met
useInterval(() => {
  if (timerRunning && timeLeft > 0 && session.started) {
    setTimeLeft(timeLeft - 1)
    // update progress bar on tick
    session.breaktime ? setProgress(((breakLength-timeLeft)/breakLength)*100) : setProgress(((sessionLength-timeLeft)/sessionLength)*100)
  }
})

  function reset() {
  setSession({...session, started: false, breaktime: false})
  toggleTimer(false)
  setBreakLength(300)
  setSessionLength(1500)
  setTimeLeft(sessionLength)
}

  return(
    <Container >
      <h1>Pomodoro</h1>
      <Logo height='100px' width='100px'/>
      <hr/ >
      <Row>
        <Col>
          <Period name="session" length={sessionLength} />
        </Col>
        <Col>
          <Period name="break" length={breakLength} />
        </Col>

        <Col>
          <label value={speed} for="slider">Speed {100-(speed/10)}</label>
          <br />
          <input id="slider" type="range" min="0" max="100" value={100-(speed/10)} onChange={(e) => setSpeed((100-e.target.value)*10)} />
        </Col>

      </Row>
      <Row>
        <Col>
                  <TimeButtons
            period="session"
            handleIncrement={() => setSessionLength(sessionLength + 60)}
            handleDecrement={() => setSessionLength(sessionLength - 60)}
              />

        </Col>
                <Col>
                  <TimeButtons
            period="break"
            handleIncrement={() => setBreakLength(breakLength + 60)}
            handleDecrement={() => setBreakLength(breakLength - 60)}
          />
        </Col>

        <Col>

        </Col>
      </Row>
      <Row>
        <div style={{"width":"100%"}}>
          <ProgressBar now={progress} />
        </div>
      </Row>
      <Row>
      <Timer timeLeft={timeLeft} running={timerRunning} breaktime={session.breaktime} />
      </Row>
      <Row>
      <Col />
      <Col>
        <ControlButtons
        handleStartStop={() => toggleTimer(!timerRunning)}
        handleReset={reset} />

        </Col>
        <Col />
      </Row>
    </Container>
  );
}

export default App;
