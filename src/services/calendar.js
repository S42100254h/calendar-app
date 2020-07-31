import dayjs from "dayjs";

export const createCalendar = month => {
  // 引数月の最初の日を追加
  const firstDay = getMonth(month);
  // 最初の日の曜日を取得
  const firstDayIndex = firstDay.day();

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

export const getMonth = ({ year, month }) => {
  return dayjs(`${year}-${month}`);
};

export const isSameDay = (d1, d2) => {
  const format = "YYYYMMDD";
  return d1.format(format) === d2.format(format);
};

export const isSameMonth = (m1, m2) => {
  const format = "YYYYMM";
  return m1.format(format) === m2.format(format);
};

export const isFirstDay = day => day.date() === 1;