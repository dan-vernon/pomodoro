import React from 'react';

export default (props) => {
  const minutes = Math.floor(props.length / 60)
  const seconds = props.length % 60 < 10 ? `0${props.length % 60}` : props.length  % 60
  return (
    <div>
      <div data-testid={`${props.name}-label`}>
        {props.name} length
      </div>
      <div data-testid={`${props.name}-length`}>
        {minutes}:{seconds}
      </div>
    </div>
  )
}
