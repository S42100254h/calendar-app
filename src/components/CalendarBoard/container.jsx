import { connect } from "react-redux";
import CalendarBoard from "./index";
import { createCalendar } from "../../services/calendar";

const mapStateToProps = state => ({
  calendar: state.calendar
});

const mergeProps = stateProps => ({
  calnedar: createCalendar(stateProps.calendar)
});

export default connect(mapStateToProps, null, mergeProps)(CalendarBoard);
