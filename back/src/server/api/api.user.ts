import { Router } from "restify-router";
import UserController from "../../database/messagerie/user/user.controller";
import { checkToken } from "../../middlewares/token.middlesware";

const apiUser: Router = new Router();

apiUser.group("/user", (router: Router) => {

    router.get("/", checkToken, UserController.getAll);

    router.get("/:id", checkToken, UserController.get);

    router.del("/:id", checkToken, UserController.delete);

    router.post("/", checkToken, UserController.insert);

    router.post("/:id", checkToken, UserController.update);

    router.post("/register", UserController.register);

    router.post("/login", UserController.login);
})

export default apiUser;