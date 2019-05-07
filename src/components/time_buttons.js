import React from 'react';
import { Button } from 'react-bootstrap';

export default (props) => {
  return (
    <div className="buttons-container time-buttons">
      <Button
      variant="success"
      data-testid={`${props.period}-increment`}
      onClick={props.handleIncrement}
      value="+"
      />
      <Button
      variant="danger"
      data-testid={`${props.period}-decrement`}
      onClick={props.handleDecrement}
      value="-"
      />
      </div>
  )
}
