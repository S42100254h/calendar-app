import React from "react";
import "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";

// eslint-disable-next-line react/prop-types
const CalendarElement = ({ day }) => {

  // 月の最初にだけ月情報をつける
  const isFirstDay = day.date() === 1;
  const format = isFirstDay ? "M月D日" : "D";

  // 当日かどうか判断する
  const today = dayjs();
  const compareFormat = "YYYYMMDD";
  const isToday = day.format(compareFormat) === today.format(compareFormat); 

  return (
    <div className="element">
      <Typography
        className="date"
        align="center"
        variant="caption"
        component="div"
      >
      <span className={isToday ? "today" : ""}>
        {day.format(format)}
      </span>  
      </Typography>
    </div>
  );
};

export default CalendarElement;