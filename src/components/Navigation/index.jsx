import React from "react";
import { IconButton, Toolbar, Typography } from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";
import DateRangeTwoToneIcon from '@material-ui/icons/DateRangeTwoTone';

const Navigation = () => {
  return (
    <Toolbar>
      <IconButton>
        <DehazeIcon />
      </IconButton>
      <DateRangeTwoToneIcon size="large" />
      <Typography color="textSecondary" variant="h5" component="h1">
        カレンダー
      </Typography>
      <IconButton size="small">
        <ArrowBackIos />
      </IconButton>
      <IconButton size="small">
        <ArrowForwardIos />
      </IconButton>
    </Toolbar>
  );
};

export default Navigation;
