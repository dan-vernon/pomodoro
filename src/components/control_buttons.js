import React from 'react';
import { Button } from 'react-bootstrap';

export default (props) => {
  return (
    <div className="buttons-container">
      <Button variant="primary" data-testid="start_stop" onClick={props.handleStartStop}>
      Start/Stop
      </Button>
      <Button variant="secondary" data-testid="reset">
      Reset
      </Button>
    </div>
  )
}
