import React from "react";
import CalendarBoard from "./components/CalendarBoard/container";
import Navigation from "./components/Navigation/container";
import AddScheduleDialog from "./components/AddScheduleDialog";

const App = () => (
  <div>
    <Navigation />
    <CalendarBoard />
    <AddScheduleDialog />
  </div>
);

export default App;
