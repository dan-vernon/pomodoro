import React from 'react';

class Timer extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    timeLeft: this.props.timeLeft,
    running: false
  };
  }
  render() {
    const seconds = this.state.timeLeft % 60 < 10 ? `0${this.state.timeLeft % 60}` : this.state.timeLeft  % 60
    return (
      <div>
        <div data-testid="timer-label">
          Session initialised
        </div>
        <div data-testid="time-left">
          {this.state.timeLeft / 60}:{seconds}
        </div>
      </div>
    )
  }
}

export default Timer;
