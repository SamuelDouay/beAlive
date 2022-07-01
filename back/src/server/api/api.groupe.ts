import { Router } from "restify-router";
import GroupeController from "../../database/messagerie/groupe/groupe.controller";
import { checkToken } from "../../middlewares/token.middlesware";

const apiGroupe: Router = new Router();

apiGroupe.group('/conv', (router: Router) => {

    router.get("/", checkToken, GroupeController.getAll);

    router.get("/:id", checkToken, GroupeController.get);

    router.del("/:id", checkToken, GroupeController.delete);

    router.post("/", checkToken, GroupeController.create);

    router.put("/:id", GroupeController.update);
});

export default apiGroupe;