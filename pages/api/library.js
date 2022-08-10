import { connectToDatabase } from "../../util/mongodb";
// const connectToDatabase = require("util/mongodb");

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const libraryList = await db
    .collection("library_002")
    .find({})
    .toArray();

  res.json(libraryList);
};