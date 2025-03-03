import { ObjectId } from "mongodb";
import { client, conection } from "../database/conection.js";
import bcryptjs from "bcryptjs";

export const getUser = async (req, res) => {
  try {
    const userDB = (await conection()).User;
    const user = await userDB.find().toArray();
    
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const postUser = async (req, res) => {
  try {
    const { nombre, password} = req.body;
    const db = await conection();

    const salt = bcryptjs.genSaltSync();
    req.body.password = bcryptjs.hashSync(password, salt);
    
    const nuevo = { nombre, password: req.body.password};
    await db.User.insertOne(nuevo);
    res.json(nuevo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Hubo un error al registrar al usuario" });
  }
}

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = new ObjectId(id);
    const userDB = (await conection()).User;
    const user = await userDB.findOne({
      _id: userId,
    });
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    await userDB.deleteOne({ _id: userId });
    res.json({ message: "Se ha desactivado el usuario", user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Hubo un error al desactivar el usuario de la database" });
  }
};