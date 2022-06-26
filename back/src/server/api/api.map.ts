import { Router } from "restify-router";

const apiMap: Router = new Router();

apiMap.group("/map", (router: Router) => {
    router.get("/init", (req, res, next) => {
        res.send({ status: 'success' });
        next();
    });

    router.get("/next", (req, res, next) => {
        res.send({ status: 'success' });
        next();
    });
});

export default apiMap;