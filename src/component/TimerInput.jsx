import React from "react";

const TimerInput = ({ inputType, inputClass, inputValue, inputOnchange }) => {
  return (
    <div>
      <input 
      type={inputType}
      className={inputClass}
      value={inputValue}
      onChange={inputOnchange}
      />
    </div>
  );
};

export default TimerInput;
