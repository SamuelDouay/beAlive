import { Router } from "restify-router";

const apiConversation: Router = new Router();

apiConversation.group('/conv', (router: Router) => {

});

export default apiConversation;