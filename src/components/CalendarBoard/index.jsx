import React from 'react';
import { GridList } from "@material-ui/core";
import "./style.css";

const createCalendar = () => {
  // fill(0)で初期化する
  // 1~35の連番の配列を得るため、map関数でインデックス番号を取得する
  return Array(35).fill(0).map((_, i) => i);
};

const calendar = createCalendar();

const CalendarBoard = () => {
  console.log(calendar);
  return (
    <div className="container">
      <GridList className="grid" cols={7} spacing={0} cellHeight="auto">
        {calendar.map(c => (
          <li>
            <div className="element">{c}</div>
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;