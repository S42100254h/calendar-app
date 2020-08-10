import AddScheduleDialog from "./index";
import { connect } from "react-redux";
import { addScheduleCloseDialog } from "../../redux/addSchedule/action";

const mapStateToProps = state => ({ schedule: state.addSchedule });

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleDialog);
