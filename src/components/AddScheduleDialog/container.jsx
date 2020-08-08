import AddScheduleDialog from "./index";
import { connect } from "react-redux";

const mapStateToProps = state => ({ schedule: state.addSchedule });

export default connect(mapStateToProps)(AddScheduleDialog);
