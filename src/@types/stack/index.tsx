import { SchemaProps } from "../models/shema";
import { UserProps } from "../models/user";

export type RootParamsTasksRouter = {
  home: undefined;
  newTask: SchemaProps;
  user: UserProps;
};
