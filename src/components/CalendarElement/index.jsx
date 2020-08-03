import React from "react";
import "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { isSameDay, isSameMonth, isFirstDay, getMonth } from "../../services/calendar";

const CalendarElement = ({ day, month }) => {
  const today = dayjs();

  // 月の最初にだけ月情報をつける
  const format = isFirstDay(day) ? "M月D日" : "D";

  // 当日かどうか判断する
  const isToday = isSameDay(day, today);

  // 今月以外をグレーダウン
  const currentMonth = getMonth(month);
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

  return (
    <div className="element">
      <Typography
        className="date"
        color={textColor}
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