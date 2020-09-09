import dayjs from "dayjs"
import {
  SCHEDULES_ADD_ITEM,
  SCHEDULES_FETCH_ITEM,
  SCHEDULES_SET_LOADING,
  SCHEDULES_DELETE_ITEM
} from "./action";

const init = {
  items: [],
  isLoading: false
};

const schedulesReducer = (state = init, action) => {
  const { type, payload } = action;

  // 予定を表示する際にmap関数を使用するため、idを付与する
  switch(type) {
    case SCHEDULES_ADD_ITEM:
      return {
        ...state,
        items: [...state.items, payload]
      };
    case SCHEDULES_SET_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case SCHEDULES_FETCH_ITEM:
      return {
        ...state,
        isLoading: false,
        items: payload
      };
    case SCHEDULES_DELETE_ITEM:
      return {
        ...state,
        isLoading: false,
        items: payload
      }
    default:
      return state;
  }
};

export default schedulesReducer;
