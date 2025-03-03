import { response } from "express"
import { client, conection} from "../database/conection.js";
import bcryptjs from "bcryptjs";
import generateJWT from "../helpers/generate.JWT.js";

export const login = async (req,res=response) =>{
    try {
        const {nombre, password} = req.body;
        const db = await conection();
        const user = await db.User.findOne({nombre: nombre})

        if (!user){
            return res.status(400).json({
                msg: "User not found"
            })
        }

        const validPassword = bcryptjs.compareSync(password, user.password);
        if (!validPassword){
            return res.status(400).json({
                msg:"Password Incorrecto"
            })
        }

        const token = await generateJWT(user._id)
        res.cookie("token", token)

        res.json({
           user,
           token
        })

    } catch (error) {
        console.log(error);
        return res.json({
            msg:"contacte al servicio tecnico"
        })
    }
}