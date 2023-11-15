import UsersModel from "~/server/models/users";

export default defineEventHandler(async () => {
  try {
    const users = await UsersModel.find();
    return users;
  } catch (err) {}
});
