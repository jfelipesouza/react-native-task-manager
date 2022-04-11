import { SchemaProps } from "../../../../../@types/models/shema";
import { TASK_SCHEMA } from "../../schema/task";
import { getRealm } from "../realm";

export const deleteTask = async (data: SchemaProps) => {
  const realm = await getRealm();
  let response = false;
  try {
    realm.write(() => {
      realm.delete(realm.objectForPrimaryKey(TASK_SCHEMA, data._id));
    });
    response = true;
  } finally {
    return response;
  }
};
