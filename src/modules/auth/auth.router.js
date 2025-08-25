import { Router } from "express";
import { authLogin, authRegister } from "./auth.controller.js";
import validBodyRequest from "../../common/middlewares/valid-body.middlewares.js";
import { authLoginSchema, authRegisterSchema } from "./auth.schema.js";

const authRouter = Router();

authRouter.post("/register", validBodyRequest(authRegisterSchema), authRegister);
authRouter.post("/login", validBodyRequest(authLoginSchema), authLogin);

export default authRouter;
