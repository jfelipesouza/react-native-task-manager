import { ObjectSchema } from "realm";

export const USER_SCHEMA = "User";

export const UserSchema: ObjectSchema = {
  name: USER_SCHEMA,
  properties: {
    _id: { type: "string", indexed: true },
    name: { type: "string?" },
    image: { type: "string?" },
  },
  primaryKey: "_id",
};
