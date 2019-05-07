import React from 'react';
import { Button } from 'react-bootstrap';

export const TimeButton = (props) => {
  return (
    <div className="time-buttons">
      <Button variant="success" data-testid={`${props.period}-increment`}>
      +
      </Button>
      <Button variant="danger" data-testid={`${props.period}-decrement`}>
      -
      </Button>
    </div>
  )
}
