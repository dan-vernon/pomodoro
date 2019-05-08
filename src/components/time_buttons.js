import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

export default (props) => {
  return (
    <div className="buttons-container time-buttons">
      <ButtonGroup>
        <Button
        variant="success"
        data-testid={`${props.period}-increment`}
        onClick={props.handleIncrement}
        value="+"
        >
        +
        </Button>
        <Button
        variant="danger"
        data-testid={`${props.period}-decrement`}
        onClick={props.handleDecrement}
        value="-"
        >
        -
        </Button>
      </ButtonGroup>
    </div>
  )
}
