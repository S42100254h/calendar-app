import React from 'react';
import "./style.css";

const CalendarElement = ({ children }) => {
  return (
    <div className="element">
      <div className="date">{children}</div>
    </div>
  );
};

export default CalendarElement;