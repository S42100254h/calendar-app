import schedulesReducer from "../../../redux/schedules/reducer";
import { schedulesAddItem } from "../../../redux/schedules/action";
import Faker from "faker";

describe("schedulesReducerのテスト", () => {
  const initSchedule = {
    form: {
      title: Faker.lorem.word(),
      description: Faker.lorem.text(),
      date: Faker.date.recent(),
      location: Faker.random.locale()
    },
    id: 1,
    isDialogOpen: false
  };

  const initState = {
    items:[initSchedule],
    isLoading: false
  };

  it("action.type === SCHEDULES_ADD_ITEMのときのテスト", () => {
    const dummy = ({
      form: {
        title: Faker.lorem.word(),
        description: Faker.lorem.text(),
        date: Faker.date.recent(),
        location: Faker.random.locale()
      },
      id: 2,
      isDialogOpen: false
    });
    const action = schedulesAddItem(dummy);
    const newState = schedulesReducer(initState, action);
    console.log(newState);

    expect(newState.items).toStrictEqual([initSchedule, dummy]);
  });
});
