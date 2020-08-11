import AddScheduleDialog from "./index";
import { connect } from "react-redux";
import { addScheduleCloseDialog, addScheduleSetValue } from "../../redux/addSchedule/action";

const mapStateToProps = state => ({ schedule: state.addSchedule });

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  },
  setSchedule: (value) => {
    dispatch(addScheduleSetValue(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleDialog);
