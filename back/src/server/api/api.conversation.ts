import { Router } from "restify-router";
import ConversationController from "../../database/messagerie/conversation/conversation.controller";
import { checkToken } from "../../middlewares/token.middlesware";

const apiConversation: Router = new Router();

apiConversation.group('/conv', (router: Router) => {

    router.get("/", checkToken, ConversationController.getAll);

    router.get("/:id", checkToken, ConversationController.get);

    router.del("/:id", checkToken, ConversationController.delete);

    router.post("/", checkToken, ConversationController.insert);

    router.put("/:id", checkToken, ConversationController.update);
});

export default apiConversation;