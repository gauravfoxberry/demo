import { getDb } from "../database/database.js";
import mongodb from "mongodb";

export default class User {
  constructor(userData) {
    this.name = userData.name;
    this.email = userData.email;
    this.password = userData.password;
    if (userData._id) {
      this.id = userData._id.toString();
    }
  }

  static async find() {
    try {
      const data = await getDb().collection("users").find().toArray();
      return data.map((user) => new User(user));
    } catch (error) {
      console.log(error);
    }
  }

  static async findById(id) {
    try {
      const userId = new mongodb.ObjectId(id);
      const data = await getDb().collection("users").findOne({ _id: userId });
      return new User(data);
    } catch (error) {
      console.log(error);
    }
  }

  async save() {
    const data = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    try {
      const insertedData = await getDb().collection("users").insertOne(data);
      //   console.log(insertedData);
      const newUser = User.findById(insertedData.insertedId);
      return newUser;
    } catch (error) {
      console.log(error);
    }
  }
}
