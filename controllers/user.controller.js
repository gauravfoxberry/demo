import User from "../models/User.js";
export async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    console.log(error);
  }
}

export async function getUserById(req, res) {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
}

export async function saveUser(req, res) {
  try {
    const data = req.body;
    const user = new User(data);
    const newUser = await user.save();
    return res.json(newUser);
  } catch (error) {
    console.log(error);
  }
}
