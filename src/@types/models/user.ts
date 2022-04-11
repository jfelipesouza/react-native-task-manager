export type UserProps = {
  _id:string,
  name?:string
  image?:string,
}

export type UserSchemaProps = UserProps & Realm.Object