import mongoose from "mongoose";

export default async () => {
  const url =
    "mongodb+srv://<userdb>:<SXvrx9WQHjgNnRx4>@cluster0.bixs5.gcp.mongodb.net/?retryWrites=true&w=majority";
  try {
    await mongoose.connect(url, {});
    console.log("sss");
  } catch (err) {}
};
