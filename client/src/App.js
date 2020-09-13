import React from "react";
import CalendarBoard from "./components/CalendarBoard/container";
import Navigation from "./components/Navigation/container";
import AddScheduleDialog from "./components/AddScheduleDialog/container";
import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container";
import ErrorSnackbar from "./components/ErrorSnackbar/container";

const App = () => (
  <div>
    <Navigation />
    <CalendarBoard />
    <AddScheduleDialog />
    <CurrentScheduleDialog />
    <ErrorSnackbar />
  </div>
);

export default App;
