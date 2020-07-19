import React from 'react';
import { GridList } from "@material-ui/core";
import "./style.css";

import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

//今月の最初の日を追加
const firstDay = dayjs().startOf("month");

// 最初の日の曜日を取得
const firstDayIndex = firstDay.day();

const createCalendar = () => {
  // fill(0)で初期化する
  // 1~35の連番の配列を得るため、map関数でインデックス番号を取得する
  // 月の最初の日の値が0になるように配列の要素をシフトさせる
  return Array(35).fill(0).map((_, i) => i - firstDayIndex);
};

const calendar = createCalendar();

const CalendarBoard = () => {
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