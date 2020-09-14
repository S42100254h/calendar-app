import dayjs from "dayjs";
import { isSameDay } from "./calendar";

const isScheduleEmpty = schecule =>  !schedule.title && !schedule.description && !schedule.location;

export const isCloseDialog = schedule => {
  const message = "保存されていない変更を破棄しますか？";

  return isScheduleEmpty(schedule) || window.confirm(message);
};

export const setSchedules = (calendar, schedules) =>
  calendar.map(c => ({
    date: c,
    schedules: schedules.filter(e => isSameDay(e.date, c))
  }));

// ISOString, JSON.stringifyによりタイムゾーンが変更されてしまうことによって、
// dayが１日前に戻ってしまうエラーを修正
export const formatSchedule = schedule => ({
  ...schedule,
  date: dayjs(schedule.date).add(1, "day")
});
