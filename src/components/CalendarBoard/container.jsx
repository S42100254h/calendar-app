import { connect } from "react-redux";
import CalendarBoard from "./index";
import { createCalendar } from "../../services/calendar";
import { addScheduleOpenDialog } from "../../redux/addSchedule/action";

const mapStateToProps = state => ({
  calendar: state.calendar
});

const mapDispatchToProps = dispatch => ({
  openAddScheduleDialog: () => {
    dispatch(addScheduleOpenDialog());
  }
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  month: stateProps.calendar,
  calendar: createCalendar(stateProps.calendar)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalendarBoard);
