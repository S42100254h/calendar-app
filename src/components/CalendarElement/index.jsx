import React from "react";
import "./style.css";
import { Typography } from "@material-ui/core";

// eslint-disable-next-line react/prop-types
const CalendarElement = ({ day }) => {
  return (
    <div className="element">
      <Typography
        className="date"
        align="center"
        variant="caption"
        component="div"
      >
        {day.format("D")}
      </Typography>
    </div>
  );
};

export default CalendarElement;