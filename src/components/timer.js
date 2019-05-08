import React from 'react';
import { Card } from 'react-bootstrap';

class Timer extends React.Component {
  constructor(props) {
        super()
      }
  render() {
    const minutes = Math.floor(this.props.timeLeft / 60)
    const seconds = this.props.timeLeft % 60 < 10 ? `0${this.props.timeLeft % 60}` : this.props.timeLeft  % 60
    return (
      <div className="timer p-3">
        <Card className="text-center">
          <Card.Header>
            <div id="timer-label"up data-testid="timer-label">
              {this.props.breaktime ? "Breaktime!" : "Time remaining"}
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <div data-testid="time-left">
                {minutes}:{seconds}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Timer;
