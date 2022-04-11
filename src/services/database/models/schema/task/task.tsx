import { ObjectSchema } from "realm";

export const TASK_SCHEMA = "Task";

export const TaskSchema: ObjectSchema = {
  name: TASK_SCHEMA,
  primaryKey: "_id",
  properties: {
    _id: { type: "string", indexed: true },
    priority: { type: "bool" },
    status: { type: "bool" },
    title: { type: "string" },
    content: { type: "string" },
    alert: { type: "string" },
    date: { type: "string" },
  },
};
