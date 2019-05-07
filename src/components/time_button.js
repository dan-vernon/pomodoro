import React from 'react';

export const TimeButton = (props) => {
  return (
    <div className="time-buttons">
      <button data-testid={`${props.period}-increment`}>
        +
      </button>
      <button data-testid={`${props.period}-decrement`}>
        -
      </button>
    </div>
  )
}
