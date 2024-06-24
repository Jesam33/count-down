import React from 'react'

const TimerDisplay = ({timerSeconds, secondsClass}) => {
  return (
    <div>
      <h2 className='text-[100px]'>{timerSeconds}s</h2>
    </div>
  )
}

export default TimerDisplay
