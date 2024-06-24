import React, { useState, useEffect } from "react";
import TimerInput from "./component/TimerInput";
import TimerControl from "./component/TimerControl";
import TimerDisplay from "./component/TimerDisplay";

const CountdownTimer = () => {
  const [initialTime, setInitialTime] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning && seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, seconds]);

  const handleStart = () => {
    if (initialTime > 0) {
      setSeconds(initialTime);
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setInitialTime(0);
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-center min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-8">Countdown Timer</h1>

      <div className="mb-8">
        <TimerDisplay timerSeconds={seconds} 
        />
      </div>

      <div className="mb-8">
        <TimerInput
          inputType="number"
          inputClass="text-red-500 bg-gray-800 px-4 py-2 rounded-md focus:outline-none"
          inputValue={initialTime}
          inputOnchange={(e) => setInitialTime(parseInt(e.target.value))}
        />
      </div>

      <div className="space-x-4">
        <TimerControl
          handleStart={handleStart}
          handlePause={handlePause}
          handleReset={handleReset}
          isRunning={isRunning}
        />
      </div>
    </div>
  );
};

export default CountdownTimer;
