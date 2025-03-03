import { ObjectId } from "mongodb";
import { client, conection } from "../database/conection.js";

export const getUsuarios = async (req, res) => {
    try {
        const usuariosDB = (await conection()).Usuarios;
        const usuarios = await usuariosDB.aggregate([
            {
                $lookup: {
                    from: "Direcciones",
                    localField: "_id",
                    foreignField: "usuario_id",
                    as: "direccion"
                }
            }
        ]).toArray();
        res.json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al obtener usuarios" });
    }
};

export const postUsuarios = async (req, res) => {
    try {
        const { nombre, correo, pais, foto, calle, ciudad, estado, codigo_postal } = req.body;
        const db = await conection();
        
        let usuario = await db.Usuarios.findOne({ correo });
        
        if (!usuario) {
            const resultado = await db.Usuarios.insertOne({ nombre, correo, pais, foto });
            usuario = await db.Usuarios.findOne({ _id: resultado.insertedId });
        } else {
            return res.status(400).json({ error: "El usuario ya existe" });
        }
        
        const nuevaDireccion = await db.Direcciones.insertOne({
            usuario_id: usuario._id,
            calle,
            ciudad,
            estado,
            codigo_postal
        });
        
        res.json({ mensaje: "Usuario y dirección registrados con éxito", usuario, direccion: nuevaDireccion });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Hubo un error al agregar al usuario" });
    }
};

export const getUsuariosId = async (req,res) =>{
    try {
        const usuariosDB = (await conection()).Usuarios;
        const idObj = new ObjectId(req.params.id)
        const usuarios = await usuariosDB.find({_id:idObj}).toArray()
        res.json(usuarios)
    } catch (error) {
        console.log(error);
    }
}