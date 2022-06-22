import * as jwt from 'jsonwebtoken';
import { Next, Request, Response } from 'restify';

export const checkToken = (req: Request, res: Response, next: Next) => {
    
    const token = req.header('x-access-token');

    if (!token) {
        console.error(`Authorisation refusée, pas de token`);
        next(new Error('Authorisation refusée, pas de token'));
    }

    try {
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET);

        (<any>req).user = decoded.user;

        next();
    } catch (err) {
        console.error(`Token invalide | ${err}`);
        next(new Error('Token invalide'));
    }
};