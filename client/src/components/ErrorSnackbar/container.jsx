import { connect } from "react-redux";
import ErrorSnackbar from "./index";
import { schedulesResetError } from "../../redux/schedules/action";

const mapStateToProps = state => ({ error: state.schedules.error });

const mapDispatchToProps = dispatch => ({
  handleClose: () => {
    dispatch(schedulesResetError());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorSnackbar);
