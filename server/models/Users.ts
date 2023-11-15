import { Schema, model } from "mongoose";

const UsersSchema = new Schema({
  username: { type: String },
  email: { type: String },
});

const UsersModel = model("Users", UsersSchema);

export default UsersModel;
