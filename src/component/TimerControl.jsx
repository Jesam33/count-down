import React from "react";

const TimerControl = ({ handleStart, handlePause, handleReset, isRunning }) => {
  return (
    <div className="flex gap-5 ">
      <button className="px-3 border py-2" onClick={handleStart} >
        Start
      </button>
      <button className="px-3 border py-2" onClick={handlePause} >
        {isRunning ? "Pause" : "Resume"}
      </button>
      <button className="px-3 border py-2" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default TimerControl;
