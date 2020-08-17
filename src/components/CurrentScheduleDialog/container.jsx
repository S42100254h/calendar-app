import { connect } from "react-redux";
import AddScheduleDialog from "./index";
import { currentScheduleCloseDialog } from "../../redux/currentSchedule/action";

const mapStateToProps = state => ({ schedule: state.currentSchedule });

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(currentScheduleCloseDialog());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleDialog);
