import {
  CURRENT_SCHEDULE_SET_ITEM,
  CURRENT_SCHEDULE_OPEN_DIALOG,
  CURRENT_SCHEDULE_CLOSE_DIALOG,
  currentScheduleSetItem,
  currentScheduleOpenDialog,
  currentScheduleCloseDialog
} from "../../../redux/currentSchedule/action";

describe("action.jsのテスト", () => {
  it("currentScheduleSetItemのテスト", () => {
    const dummy = "ダミースケジュール";
    const action = currentScheduleSetItem(dummy);

    expect(action).toStrictEqual(
      {
        type: CURRENT_SCHEDULE_SET_ITEM,
        payload: dummy
      }
    );
  });

  it("currentScheduleOpenDialogのテスト", () => {
    const action = currentScheduleOpenDialog();

    expect(action).toStrictEqual({ type:   CURRENT_SCHEDULE_OPEN_DIALOG,
    });
  });

  it("currentScheduleCloseDialogのテスト", () => {
    const action = currentScheduleCloseDialog();

    expect(action).toStrictEqual({ type: CURRENT_SCHEDULE_CLOSE_DIALOG });
  });
});
