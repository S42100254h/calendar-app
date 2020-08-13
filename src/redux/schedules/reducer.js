import { SCHEDULES_ADD_ITEM } from "./action";

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
        items: [...state.items, { ...payload, id: state.items.length + 1 }]
      };
    default:
      return state;
  }
};

export default schedulesReducer;
