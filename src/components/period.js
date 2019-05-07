import React from 'react';

export const Period = (props) => {
  return (
    <div>
      <div data-testid={`${props.name}-label`}>
        {props.name} length
      </div>
      <div data-testid={`${props.name}-length`}>
        {props.length}
      </div>
    </div>
  )
}
