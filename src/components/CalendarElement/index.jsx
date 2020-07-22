import React from "react";
import "./style.css";

// eslint-disable-next-line react/prop-types
const CalendarElement = ({ children }) => {
  return (
    <div className="element">
      <div className="date">{children}</div>
    </div>
  );
};

export default CalendarElement;