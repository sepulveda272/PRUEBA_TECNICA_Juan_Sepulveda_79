import { Router } from "express";
import { check } from "express-validator";

import { getUsuarios, getUsuariosId, postUsuarios } from "../controllers/usuarios.controllers.js";
import validateDocuments from "../middleware/validate.documents.js";
import { validateJWT } from "../middleware/validate.jwt.js";


const routes = Router();

routes.get("/",[
    validateJWT,
    validateDocuments
],getUsuarios);
routes.get("/:id", getUsuariosId)
routes.post("/add",/* [
    check('nombre','Nombre es obligatorio').not().isEmpty(),
    check('password','Password es obligatorio y Debe tener 6 digitos o más').not().isEmpty().isLength({min:6}),
], */ postUsuarios)


export default routes