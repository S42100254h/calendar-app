import { connect } from "react-redux";
import CalendarBoard from "./index";

const mapStateToProps = state => ({
  calendar: state.calendar
});

export default connect(mapStateToProps)(CalendarBoard);
