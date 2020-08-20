import calendarReducer from "../../../redux/calendar/reducer";
import { calendarSetMonth } from "../../../redux/calendar/action";
import dayjs from "dayjs";
import { formatMonth } from "../../../services/calendar";

describe("calendarReducerのテスト", () => {
  it("action.type === ALENDAR_SET_MONTHのときのテスト", () => {
    const dummy = { month: 8, year: 2020 };
    const action = calendarSetMonth(dummy);

    const day = dayjs();
    const init = formatMonth(day);

    const newState = calendarReducer(init, action);

    expect(newState).toStrictEqual(dummy);
  });
});