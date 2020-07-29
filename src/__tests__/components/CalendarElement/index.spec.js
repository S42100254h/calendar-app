import dayjs from "dayjs";
import { isSameDay, isSameMonth, isFirstDay } from "../../../services/calendar";

describe("CalendarElementコンポーネントのテスト", () => {
  it("月の最初の日は、「M月D日」形式で表示される", () => {
    const firstDay = dayjs("2020-7-1");
    const firstDayFormat = isFirstDay(firstDay) ? "M月D日" : "D";

    expect(firstDayFormat).toStrictEqual("M月D日");
  });

  it("月の最初ではない日は、「D」形式で表示される", () => {
    const otherDay = dayjs("2020-7-2");
    const otherDayFormat = isFirstDay(otherDay) ? "M月D日" : "D"

    expect(otherDayFormat).toStrictEqual("D");
  });
});