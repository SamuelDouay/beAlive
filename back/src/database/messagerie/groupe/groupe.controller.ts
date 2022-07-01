import { Next, Request, Response } from "restify";
import { createGroupe } from "./groupe.interface";
import { Groupe } from "./groupe.model";
import { groupeSchema } from "./groupe.validation";

export default class GroupeController {

    public static async insert(req: Request, res: Response, next: Next) {

    }

    public static async update(req: Request, res: Response, next: Next) {
        try {
            await groupeSchema.validate(req.body, { abortEarly: false });
        } catch (err) {
            res.send(400, { errors: err.errors });
            return next();
        }

        try {
            if (!req.params.id) {
                res.send(404, { errors: "L'idendtifiant du groupe doit être renseignée" });
                return next();
            }

            const params = createGroupe(req.body);

            await  Groupe.findByIdAndUpdate(req.params.id, params);

            res.send(200, { message: "Groupe update" });
            return next();
        } catch (err) {
            res.send(500, { errors: err.message });
            return next();
        }
    }

    public static async delete(req: Request, res: Response, next: Next) {
        try {
            if (!req.params.id) {
                res.send(404, { errors: "L'idendtifiant du groupe doit être renseignée" });
                return next();
            }

            await Groupe.findByIdAndDelete(req.params.id);

            res.send(200, { message: "Groupe bien supprimée" });
            return next();
        } catch (err) {
            res.send(500, { errors: err.message });
            return next();
        }
    }

    public static async get(req: Request, res: Response, next: Next) {
        try {

            if (!req.params.id) {
                res.send(404, { errors: "L'idendtifiant du groupe doit être renseignée" });
                return next();
            }

            const groupe = await Groupe.find({ _id: req.query.id });

            res.send(200, { groupe });
            return next();
        } catch (err) {
            res.send(500, { errors: err.message });
            return next();
        }
    }

    public static async getAll(req: Request, res: Response, next: Next) {
        try {
            let conv: any;

            conv = await Groupe.find();

            res.send(200, { conv });
            return next();
        } catch (err) {
            res.send(500, { errors: err.message });
            return next();
        }
    }
}