import Realm from "realm";

export type SchemaProps = {
  title: string;
  priority: boolean;
  status: boolean;
  content: string;
  alert: string;
  date: string;
  _id: string;
};

export type TaskSchemaObject = SchemaProps & Realm.Object;
