import React from 'react';
import { Button } from 'react-bootstrap';

export default (props) => {
  return (
    <div className="buttons-container time-buttons">
      <Button variant="success" data-testid={`${props.period}-increment`}>
      +
      </Button>
      <Button variant="danger" data-testid={`${props.period}-decrement`}>
      -
      </Button>
    </div>
  )
}
