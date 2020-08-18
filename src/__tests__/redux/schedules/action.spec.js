import { SCHEDULES_ADD_ITEM, schedulesAddItem } from "../../../redux/schedules/action";

describe("action.jsのテスト", () => {
  it("schedulesAddItemのテスト", () => {
    const dummy = "ダミースケジュール";
    const action = schedulesAddItem(dummy);

    expect(action).toStrictEqual(
      { 
        type: SCHEDULES_ADD_ITEM,
        payload: dummy
      }
    );
  });
});
