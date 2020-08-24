import {
  ADD_SCHEDULE_SET_VALUE,
  ADD_SCHEDULE_OPEN_DIALOG,
  ADD_SCHEDULE_CLOSE_DIALOG,
  addScheduleSetValue,
  addScheduleOpenDialog,
  addScheduleCloseDialog
} from "../../../redux/addSchedule/action";

describe("action.jsのテスト", () => {
  it("addScheduleSetValueのテスト", () => {
    const dummy = { month: 8, year: 2020 };
    const action = addScheduleSetValue(dummy);

    expect(action).toStrictEqual(
      {
        type: ADD_SCHEDULE_SET_VALUE,
        payload: dummy
      }
    )
  });

  it("addScheduleOpenDialogのテスト", () => {
    const action = addScheduleOpenDialog();

    expect(action).toStrictEqual(
      {
        type: ADD_SCHEDULE_OPEN_DIALOG
      }
    )
  });

  it("addScheduleOpenDialogのテスト", () => {
    const action = addScheduleCloseDialog();

    expect(action).toStrictEqual(
      {
        type: ADD_SCHEDULE_CLOSE_DIALOG
      }
    )
  });
});