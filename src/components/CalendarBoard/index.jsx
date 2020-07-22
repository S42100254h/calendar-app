import React from "react";
import CalendarElement from "../CalendarElement";
import { GridList } from "@material-ui/core";
import { createCalendar } from "../../services/calendar";
import "./style.css";

const calendar = createCalendar();

const CalendarBoard = () => {
  return (
    <div className="container">
      <GridList className="grid" cols={7} spacing={0} cellHeight="auto">
        {calendar.map(c => (
          <li key={c.toISOString()}>
            <CalendarElement day={c} />
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;