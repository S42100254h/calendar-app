import { CALENDAR_SET_MONTH, calendarSetMonth } from "../../../redux/calendar/action";

describe("action.jsのテスト", () => {
  it("calendarSetMonth関数のテスト", () => {
    const dummyPayload = "ダミー引数";
    const action = calendarSetMonth(dummyPayload);

    expect(action).toStrictEqual(
      {
        type: CALENDAR_SET_MONTH,
        payload: dummyPayload
      }
    );
  });
});