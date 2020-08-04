import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import { IconButton, Toolbar, Typography, withStyles } from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";
import DateRangeTwoToneIcon from "@material-ui/icons/DateRangeTwoTone";

const StyledToobar = withStyles({
  root: { padding: "0" }
})(Toolbar);

const StyledTypography = withStyles({
  root: { margin: "0 30px 0 10px" }
})(Typography);

const StyledDatePicker = withStyles({
  root: { marginLeft: 30 }
})(DatePicker);

const Navigation = ({ setNextMonth, setPreviousMonth }) => {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <StyledToobar>
      <IconButton>
        <DehazeIcon />
      </IconButton>
      <DateRangeTwoToneIcon size="large" />
      <StyledTypography color="textSecondary" variant="h5" component="h1">
        カレンダー
      </StyledTypography>
      <IconButton size="small" onClick={setPreviousMonth}>
        <ArrowBackIos />
      </IconButton>
      <IconButton size="small" onClick={setNextMonth}>
        <ArrowForwardIos />
      </IconButton>
      <StyledDatePicker
        value={selectedDate}
        onChange={handleDateChange}
        variant="inline"
        format="YYYY年 M月"
        animateYearScrolling
        disableToolbar
      />
    </StyledToobar>
  );
};

export default Navigation;
