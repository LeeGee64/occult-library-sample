import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const libraryList = await db
    .collection("movies")
    .find({})
    .toArray();

  res.json(libraryList);
};