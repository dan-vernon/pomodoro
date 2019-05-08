import React from 'react';

class Timer extends React.Component {
  // constructor(props) {
  // super(props);
  // this.state = {
  //   timeLeft: this.props.timeLeft,
  //   running: this.props.running,
  // };
  // }

  render() {
    const minutes = Math.floor(this.props.timeLeft / 60)
    const seconds = this.props.timeLeft % 60 < 10 ? `0${this.props.timeLeft % 60}` : this.props.timeLeft  % 60
    // const minutes = Math.floor(this.state.timeLeft / 60)
    // const seconds = this.state.timeLeft % 60 < 10 ? `0${this.state.timeLeft % 60}` : this.state.timeLeft  % 60
    return (
      <div>
        <div id="timer-label" data-testid="timer-label">
          {this.props.breaktime ? "Breaktime!" : "Time remaining"}
        </div>
        <div data-testid="time-left">
          {minutes}:{seconds}
        </div>
      </div>
    )
  }
}

export default Timer;
