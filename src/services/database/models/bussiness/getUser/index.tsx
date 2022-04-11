import { getRealm } from "../realm";
import { USER_SCHEMA } from "../../schema/user";
import { UserProps } from "../../../../../@types/models/user";

export const getUser = async () => {
  const realm = await getRealm();
  const data = realm.objects<UserProps>(USER_SCHEMA);
  return data;
};
