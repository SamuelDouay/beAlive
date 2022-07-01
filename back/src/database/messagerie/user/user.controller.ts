import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { Next, Request, Response } from "restify";
import { createUser, createUserLogin } from "./user.interface";
import { User } from "./user.model";
import { userSchema, userLoginSchema } from "./user.validations";

export default class UserController {

    public static async register(req: Request, res: Response, next: Next) {
        try {
            await userSchema.validate(req.body, { abortEarly: true });
        } catch (err) {
            res.send(400, { errors: err.error });
            return next();
        }

        try {
            const params = createUser(req.body);
            let user = await User.findOne({ email: params.email });
            if (user) {
                res.send(400, { errors: 'User déjà existant' });
                return next();
            }
            
            const salt = await bcrypt.genSalt(10);
            const passwordHash = await bcrypt.hash(params.password, salt);

            user = new User({
                name: params.name,
                email: params.email,
                password: passwordHash,
            });

            await user.save();

            const payload = {
                user: {
                    id: user.id,
                },
            };

            jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
                if (err) throw err;
                res.send(201, { message: 'User bien enregistré', token });
                return next();
            });
        } catch (err) {
            res.send(500, { errors: err.message });
            return next();
        }
    }

    public static async login(req: Request, res: Response, next: Next) {
        try {
            await userLoginSchema.validate(req.body, { abortEarly: false });
        } catch (err) {
            res.send(400, { errors: err.errors });
            return next();
        }

        try {
            const params = createUserLogin(req.body);
            const user = await User.findOne({ email: params.email });

            if (!user) {
                res.send(400, { message: 'User inconnu' });
                return next();
            }

            const isMatch = await bcrypt.compare(params.password, user.password);
            if (!isMatch) {
                res.send(400, { message: 'Password false' });
                return next();
            }

            const payload = {
                user: {
                id: user.id,
                },
            };
            
            jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
                if (err) throw err;
                res.send(200, { message: 'User validé', token });
                return next();
            });
            } catch (err) {
            res.send(500, { errors: err.message });
            return next();
        }
    }

    public static async get(req: Request, res: Response, next: Next) {
        try {

            if (!req.params.id) {
                res.send(404, { errors: 'L\'identifiant de l\'utilisateur doit être transmis' });
                return next();
            }
            
            const users = await User.findOne({ _id: req.query.id });

            res.send(200, { users });
            return next();
        } catch (err) {
            res.send(500, { errors: err.message });
            return next();
        }
    }

    public static async getAll(req: Request, res: Response, next: Next) {
        try {
            let users: any;

            users = await User.find();

            res.send(200, { users });
            return next();
            
        } catch (err) {
            res.send(500, { errors: err.message });
            return next();
        }
    }

    public static async insert(req: Request, res: Response, next: Next) {
        
        try {
            await userSchema.validate(req.body, { abortEarly: true });
        } catch (err) {
            res.send(400, { errors: err.errors });
            return next();
        }

        try {
            const params = createUser(req.body);
            let user = await User.findOne({ email: params.email });
            if (user) {
                res.send(400, { errors: 'User dejà existant' });
                return next();
            }

            user = new User({
                name: params.name,
                age: params.age,
                email: params.email,
                password: params.password
            });

            await user.save();

            res.send(201, { message: 'User insérer' });
            return next();
        } catch (err) {
            res.send(500, { errors: err.message });
            return next();
        }
    }

    public static async update(req: Request, res: Response, next: Next) {
        try {
            await userSchema.validate(req.body, { abortEarly: false });
        } catch (err) {
            res.send(400, { errors: err.errors });
            return next();
        }

        try {
            if (!req.params.id) {
                res.send(404, { errors: 'L\'identifiant de l\'utilisateur doit être transmis' });
                return next();
            }
            
            const params = createUser(req.body);
            
            await User.findByIdAndUpdate(req.params.id, params);
            
            res.send(200, { message: 'User update' });
            return next();
        } catch (err) {
            res.send(500, { errors: err.message });
            return next();
        }
    }

    public static async delete(req: Request, res: Response, next: Next) {
        try {
            if (!req.params.id) {
                res.send(404, { errors: 'L\'identifiant de l\'utilisateur doit être transmis' });
                return next();
            }

            await User.findByIdAndDelete(req.params.id);

            res.send(200, { message: 'User delete' });
            return next();
        } catch (err) {
            res.send(500, { errors: err.message });
            return next();
        }
    }

}