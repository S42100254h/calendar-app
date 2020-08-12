import addScheduleReducer from "../../../redux/addSchedule/reducer";
import {
  addScheduleSetValue,
  addScheduleOpenDialog,
  addScheduleCloseDialog
} from "../../../redux/addSchedule/action";
import Faker from "faker";

describe("addScheduleReducerのテスト", () => {
  const init = {
    form: {
      title: Faker.lorem.word(),
      description: Faker.lorem.text(),
      date: Faker.date.recent(),
      location: Faker.random.locale()
    },
    isDialogOpen: false
  };

  it("action.type === ADD_SCHEDULE_SET_VALUEのときのテスト", () => {
    const dummy = { title: "ダミータイトル" };
    const action = addScheduleSetValue(dummy);

    const newState = addScheduleReducer(init, action);
    expect(newState.form.title).toStrictEqual(dummy.title);

    expect(newState.form.description).toStrictEqual(init.form.description);
    expect(newState.form.date).toStrictEqual(init.form.date);
    expect(newState.form.location).toStrictEqual(init.form.location);
    expect(newState.isDialogOpen).toStrictEqual(false);
  });

  it("action.type === ADD_SCHEDULE_OPEN_DIALOG", () => {
    const action = addScheduleOpenDialog();

    const newState = addScheduleReducer(init, action);
    expect(newState.isDialogOpen).toStrictEqual(true);
    expect(newState.form).toStrictEqual(init.form);
  });

  it("aciton.type === ADD_SCHEDULE_CLOSE_DIALOG", () => {
    const action = addScheduleCloseDialog();

    const newState = addScheduleReducer(init, action);
    expect(newState.isDialogOpen).toStrictEqual(false);
  });
});
