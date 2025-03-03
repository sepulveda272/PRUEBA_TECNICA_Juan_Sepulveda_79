import { Router } from "express";
import { check } from "express-validator";

import { deleteUser, getUser, postUser } from "../controllers/user.controllers.js";
import validateDocuments from "../middleware/validate.documents.js";
import { validateJWT } from "../middleware/validate.jwt.js"


const routes = Router();

routes.get("/",[
    validateJWT,
    validateDocuments
],getUser);
routes.post("/add",[
    check('nombre','Nombre es obligatorio').not().isEmpty(),
    check('password','Password es obligatorio y Debe tener 6 digitos o más').not().isEmpty().isLength({min:6}),
], postUser)
routes.delete("/:id",[
    validateJWT,
    validateDocuments
], deleteUser)

export default routes