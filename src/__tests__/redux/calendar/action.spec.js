import { CALENDAR_SET_MONTH, calendarSetMonth } from "../../../redux/calendar/action";

describe("action.jsのテスト", () => {
  it("calendarSetMonth関数のテスト", () => {
    const dummy = { month: 8, year: 2020 };
    const action = calendarSetMonth(dummy);

    expect(action).toStrictEqual(
      {
        type: CALENDAR_SET_MONTH,
        payload: dummy
      }
    );
  });
});