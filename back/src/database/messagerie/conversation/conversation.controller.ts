import { Next, Request, Response } from "restify";
import { createConversation } from "./conversation.interface";
import { Conversation } from "./conversation.model";
import { conversationSchema } from "./conversation.validation";

export default class ConversationController {

    public static async insert(req: Request, res: Response, next: Next) {

    }

    public static async update(req: Request, res: Response, next: Next) {
        try {
            await conversationSchema.validate(req.body, { abortEarly: false });
        } catch (err) {
            res.send(400, { errors: err.errors });
            return next();
        }
        
        try {
            if (!req.params.id) {
                res.send(404, { errors: "L'idendtifiant de la conversation doit être renseignée" });
                return next();
            }

            const params = createConversation(req.body);

            await Conversation.findByIdAndUpdate(req.params.id, params);

            res.send(200, { message: "Conversation update" });
            return next();
        } catch (err) {
            res.send(500, { errors: err.message });
            return next();
        }
    }

    public static async delete(req: Request, res: Response, next: Next) {
        try {
            if (!req.params.id) {
                res.send(404, { errors: "L'idendtifiant de la conversation doit être renseignée" });
                return next();
            }

            await Conversation.findByIdAndDelete(req.params.id);

            res.send(200, { message: "Conversation bien supprimée" });
            return next();
        } catch (err) {
            res.send(500, { errors: err.message });
            return next();
        }
    }

    public static async get(req: Request, res: Response, next: Next) {
        try {

            if (!req.params.id) {
                res.send(404, { errors: "L'idendtifiant de la conversation doit être renseignée" });
                return next();
            }
            const conv = await Conversation.find({ _id: req.query.id });
            res.send(200, { conv });
            return next();
        } catch (err) {
            res.send(500, { errors: err.message });
            return next();
        }
    }

    public static async getAll(req: Request, res: Response, next: Next) {
        try {
            let conv: any;

            conv = await Conversation.find();
            
            res.send(200, { conv });
            return next();
        } catch (err) {
            res.send(500, { errors: err.message });
            return next();
        }
    }
}