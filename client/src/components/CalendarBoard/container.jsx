import { connect } from "react-redux";
import CalendarBoard from "./index";
import { createCalendar } from "../../services/calendar";
import { addScheduleOpenDialog, addScheduleSetValue } from "../../redux/addSchedule/action";
import { setSchedules } from "../../services/schedule";
import { currentScheduleSetItem, currentScheduleOpenDialog } from "../../redux/currentSchedule/action";
import { asyncSchedulesFetchItem } from "../../redux/schedules/effects";

const mapStateToProps = state => ({
  calendar: state.calendar,
  schedules: state.schedules
});

const mapDispatchToProps = dispatch => ({
  openAddScheduleDialog: (d) => {
    dispatch(addScheduleOpenDialog());
    dispatch(addScheduleSetValue({date: d}));
  },
  openCurrentScheduleDialog: (schedule, e) => {
    // 他のイベントが発火するのをキャンセルする
    e.stopPropagation();

    dispatch(currentScheduleSetItem(schedule));
    dispatch(currentScheduleOpenDialog());
  },
  fetchSchedule: month => {
    dispatch(asyncSchedulesFetchItem(month));
  }
});

const mergeProps = (stateProps, dispatchProps) => {
  const { calendar: month, schedules: { items: schedules }} = stateProps;
  const calendar = setSchedules(createCalendar(month), schedules);

  return {
    ...stateProps,
    ...dispatchProps,
    fetchSchedule: () => dispatchProps.fetchSchedule(month),
    month,
    calendar
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalendarBoard);
