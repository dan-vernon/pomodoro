import React from 'react';
import ReactDOM from 'react-dom';

import { render, fireEvent } from 'react-testing-library';

import App from './App';



describe('Pomodoro app', () => {
  test('User Story #1: I can see an element with id="break-label" that contains a string (e.g. "Break Length").', () => {
    const {getByTestId} = render(<App />)
    expect(getByTestId('break-label')).toBeVisible()
    expect(getByTestId('break-label')).not.toBeEmpty()
  })

  test('User Story #2: I can see an element with id="session-label" that contains a string (e.g. "Session Length").', () => {
    const {getByTestId} = render(<App />)
    expect(getByTestId('session-label')).toBeVisible()
    expect(getByTestId('session-label')).not.toBeEmpty()
  })

  test('User Story #3: I can see two clickable elements with corresponding IDs: id="break-decrement" and id="session-decrement".', () => {
  const {getByTestId} = render(<App />)
  expect(getByTestId('break-decrement')).toBeVisible()
  expect(getByTestId('session-decrement')).toBeVisible()
  fireEvent.click(getByTestId('break-decrement'))
  fireEvent.click(getByTestId('session-decrement'))
})

  test('User Story #4: I can see two clickable elements with corresponding IDs: id="break-increment" and id="session-increment".', () => {
  const {getByTestId} = render(<App />)
  expect(getByTestId('break-increment')).toBeVisible()
  expect(getByTestId('session-increment')).toBeVisible()
  fireEvent.click(getByTestId('break-increment'))
  fireEvent.click(getByTestId('session-increment'))
})

  test('User Story #5: I can see an element with a corresponding id="break-length", which by default (on load) displays a value of 5.', () => {
    const {getByTestId} = render(<App />)
    expect(getByTestId('break-length')).toBeVisible()
    expect(getByTestId('break-length')).toHaveTextContent('5')
  })

  test('User Story #6: I can see an element with a corresponding id="session-length", which by default displays a value of 25.', () => {
    const {getByTestId} = render(<App />)
    expect(getByTestId('session-length')).toBeVisible()
    expect(getByTestId('session-length')).toHaveTextContent('25')
  })

  test('User Story #7: I can see an element with a corresponding id="timer-label", that contains a string indicating a session is initialized (e.g. "Session").', () => {
    const {getByTestId} = render(<App />)
    expect(getByTestId('timer-label')).toBeVisible()
    expect(getByTestId('timer-label')).toHaveTextContent('Time')
  })

  test('User Story #8: I can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).', () => {
    const {getByTestId} = render(<App />)
    expect(getByTestId('time-left')).toBeVisible()
    expect(getByTestId('time-left')).toHaveTextContent(/\d+:\d{2}/)
  })

  test('User Story #9: I can see a clickable element with a corresponding id="start_stop".', () => {
    const {getByTestId} = render(<App />)
    fireEvent.click(getByTestId('start_stop'))
    expect(getByTestId('start_stop')).toBeVisible()
})

  test('User Story #10: I can see a clickable element with a corresponding id="reset".', () => {
    const {getByTestId} = render(<App />)
    fireEvent.click(getByTestId('reset'))
    expect(getByTestId('reset')).toBeVisible()
})

  // test('User Story #11: When I click the element with the id of reset, any running timer should be stopped, the value within id="break-length" should return to 5, the value within id="session-length" should return to 25, and the element with id="time-left" should reset to its default state.', () => {})
  //
  test('User Story #12: When I click the element with the id of break-decrement, the value within id="break-length" decrements by a value of 1, and I can see the updated value.', () => {
    const {getByTestId} = render(<App />)
    fireEvent.click(getByTestId('break-increment'))
    expect(getByTestId('break-length')).toHaveTextContent('6:00')
})

  test('User Story #13: When I click the element with the id of break-increment, the value within id="break-length" increments by a value of 1, and I can see the updated value.', () => {
    const {getByTestId} = render(<App />)
    fireEvent.click(getByTestId('break-decrement'))
    expect(getByTestId('break-length')).toHaveTextContent('4:00')
})

  test('User Story #14: When I click the element with the id of session-decrement, the value within id="session-length" decrements by a value of 1, and I can see the updated value.', () => {
    const {getByTestId} = render(<App />)
    fireEvent.click(getByTestId('session-increment'))
    expect(getByTestId('session-length')).toHaveTextContent('26:00')
})

  test('User Story #15: When I click the element with the id of session-increment, the value within id="session-length" increments by a value of 1, and I can see the updated value.', () => {
    const {getByTestId} = render(<App />)
    fireEvent.click(getByTestId('session-decrement'))
    expect(getByTestId('session-length')).toHaveTextContent('24:00')
})

  test('User Story #16: I should not be able to set a session or break length to <= 0.', () => {
    const {getByTestId} = render(<App />)
    let i = 0
    while (i < 30) {
      fireEvent.click(getByTestId('break-decrement'))
      fireEvent.click(getByTestId('session-decrement'))
      i++
    }
    expect(getByTestId('break-length')).toHaveTextContent('0:00')
    expect(getByTestId('session-length')).toHaveTextContent('0:00')
})

  test('User Story #17: I should not be able to set a session or break length to > 60.', () => {
    const {getByTestId} = render(<App />)
    let i = 0
    while (i < 60) {
      fireEvent.click(getByTestId('break-increment'))
      fireEvent.click(getByTestId('session-increment'))
      i++
    }
    expect(getByTestId('break-length')).toHaveTextContent('60:00')
    expect(getByTestId('session-length')).toHaveTextContent('60:00')
})

  // test('User Story #18: When I first click the element with id="start_stop", the timer should begin running from the value currently displayed in id="session-length", even if the value has been incremented or decremented from the original value of 25.', () => {})
  //
  // test('User Story #19: If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms).', () => {})
  //
  // test('User Story #20: If the timer is running and I click the element with id="start_stop", the countdown should pause.', () => {})
  //
  // test('User Story #21: If the timer is paused and I click the element with id="start_stop", the countdown should resume running from the point at which it was paused.', () => {})
  //
  // test('User Story #22: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a break has begun.', () => {})
  //
  // test('User Story #23: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the id="break-length" element.', () => {})
  //
  // test('User Story #24: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a session has begun.', () => {})
  //
  // test('User Story #25: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the id="session-length" element.', () => {})
  //
  // test('User Story #26: When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 audio tag and have a corresponding id="beep".', () => {})
  //
  // test('User Story #27: The audio element with id="beep" must be 1 second or longer.', () => {})
  //
  // test('User Story #28: The audio element with id of beep must stop playing and be rewound to the beginning when the element with the id of reset is clicked.', () => {})

  })
