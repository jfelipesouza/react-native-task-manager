import { getRealm } from "../realm";
import { SchemaProps } from "../../../../../@types/models/shema";
import { TASK_SCHEMA } from "../../schema/task";

export const getTasks = async () => {
  const realm = await getRealm();
  const data = realm.objects<SchemaProps>(TASK_SCHEMA);
  return data;
};
