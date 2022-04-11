import { UserProps } from "../../../../../@types/models/user";
import { USER_SCHEMA } from "../../schema/user";
import { getRealm } from "../realm";

export const UpdateUser = async (data: UserProps) => {
  let response: boolean = false;

  const realm = await getRealm();

  try {
    realm.write(() => {
      realm.create(USER_SCHEMA, data, Realm.UpdateMode.Modified);
    });
    response = true;
  } finally {
    return response;
  }
};
