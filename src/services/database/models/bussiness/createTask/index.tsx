import { SchemaProps } from "../../../../../@types/models/shema";
import { TASK_SCHEMA } from "../../schema/task";
import { getRealm } from "../realm";

export const createTask = async (data: SchemaProps) => {
  let response: boolean = false;

  const realm = await getRealm();

  try {
    realm.write(() => {
      realm.create(TASK_SCHEMA, data, Realm.UpdateMode.Modified);
    });
    response = true;
  } finally {
    return response;
  }
};
