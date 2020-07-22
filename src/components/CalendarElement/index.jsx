import React from "react";
import "./style.css";
import { Typography } from "@material-ui/core";

// eslint-disable-next-line react/prop-types
const CalendarElement = ({ day }) => {

  // 月の最初にだけ月情報をつける
  const isFirstDay = day.date() === 1;
  const format = isFirstDay ? "M月D日" : "D";

  return (
    <div className="element">
      <Typography
        className="date"
        align="center"
        variant="caption"
        component="div"
      >
        {day.format(format)}
      </Typography>
    </div>
  );
};

export default CalendarElement;