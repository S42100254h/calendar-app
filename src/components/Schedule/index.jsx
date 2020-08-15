import React from "react";
import "./style.css";

const Schedule = ({ schedule }) => {
  return (
    <div className={"schedule"}>
      {schedule.title}
    </div>
  );
};

export default Schedule;
