import dayjs from "dayjs";

//今月の最初の日を追加
const firstDay = dayjs().startOf("month");

// 最初の日の曜日を取得
const firstDayIndex = firstDay.day();

export const createCalendar = () => {
  // fill(0)で初期化する
  // 1~35の連番の配列を得るため、map関数でインデックス番号を取得する
  // 月の最初の日の値が0になるように配列の要素をシフトさせる
  return Array(35)
    .fill(0)
    .map((_, i) => {
      // 月の最初の日からの差分を取得
      // index値を日付として表示
      const diffFromFirstDay = i - firstDayIndex;
      const day = firstDay.add(diffFromFirstDay, "day");

      return day;
    });
};
