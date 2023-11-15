import mongoose from "mongoose";

export default async () => {
  const config = useRuntimeConfig();

  try {
    await mongoose.connect(config.mongodbUrl, {
      dbName: config.mongodbName,
    });
  } catch (err) {}
};
