import Realm from "realm";
import { TaskSchema } from "../schema/task/index";
import { UserSchema } from "../schema/user";

export const getRealm = async () =>
  await Realm.open({
    path: "Tasks",
    schema: [TaskSchema, UserSchema],
  });
