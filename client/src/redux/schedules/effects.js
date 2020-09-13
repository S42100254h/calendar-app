import {
  schedulesSetLoading,
  schedulesFetchItem,
  schedulesAddItem,
  schedulesDeleteItem
} from "./action";
import { get, post, deleteRequest } from "../../services/api";
import { formatSchedule } from "../../services/schedule";

export const asyncSchedulesFetchItem = ({ month, year }) => async dispatch => {
  dispatch(schedulesSetLoading());

  try {
    const result = await get(`schedules?month=${month}&year=${year}`);
    const formatedSchedule = result.map(r => formatSchedule(r));
    dispatch(schedulesFetchItem(formatedSchedule));
  } catch(error) {
    console.error(error);
  }
};

export const asyncSchedulesAddItem = schedule => async dispatch => {
  dispatch(schedulesSetLoading());

  try {
    const body = { ...schedule, date: schedule.date.toISOString() };
    const result = await post("schedules", body);
    const newSchedule = formatSchedule(result);
    dispatch(schedulesAddItem(newSchedule));
  } catch(error) {
    console.error(error);
  }
};

export const asyncSchedulesDeleteItem = id => async(dispatch, getState) => {
  dispatch(schedulesSetLoading());
  try {
    const currentSchedules = getState().schedules.items;
    await deleteRequest(`schedules/${id}`);

    // 成功したら、ローカルのstateを削除する
    const newSchedules = currentSchedules.filter(s => s.id !== id);
    dispatch(schedulesDeleteItem(newSchedules));
  } catch(error) {
    console.error(error);
  }
};
