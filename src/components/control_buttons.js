import React from 'react';
import { Button } from 'react-bootstrap';

export default (props) => {
  return (
    <div className="buttons-container">
      <Button variant="primary" data-testid={`${props.period}-increment`}>
      Start/Stop
      </Button>
      <Button variant="secondary" data-testid={`${props.period}-decrement`}>
      Reset
      </Button>
    </div>
  )
}
