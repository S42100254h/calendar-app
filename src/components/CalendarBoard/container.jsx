import { connect } from "react-redux";
import CalendarBoard from "./index";
import { createCalendar } from "../../services/calendar";
import { addScheduleOpenDialog, addScheduleSetValue } from "../../redux/addSchedule/action";
import { setSchedules } from "../../services/schedule";

const mapStateToProps = state => ({
  calendar: state.calendar,
  schedules: state.schedules
});

const mapDispatchToProps = dispatch => ({
  openAddScheduleDialog: (d) => {
    dispatch(addScheduleOpenDialog());
    dispatch(addScheduleSetValue({date: d}))
  }
});

const mergeProps = (stateProps, dispatchProps) => {
  const { calendar: month, schedules: { items: schedules }} = stateProps;
  const calendar = setSchedules(createCalendar(month), schedules);

  return {
    ...stateProps,
    ...dispatchProps,
    month,
    calendar
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalendarBoard);
