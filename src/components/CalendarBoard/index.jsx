import React from "react";
import CalendarElement from "../CalendarElement";
import { GridList } from "@material-ui/core";
import "./style.css";

import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

const calendar = createCalendar();

const CalendarBoard = () => {
  return (
    <div className="container">
      <GridList className="grid" cols={7} spacing={0} cellHeight="auto">
        {calendar.map(c => (
          <li key={c.toISOString()}>
            <CalendarElement>{c.format("D")}</CalendarElement>
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;