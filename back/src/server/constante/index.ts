import { Server } from "restify";
import * as restify from "restify";
import connectMongoDb from "../../database/connection/connect.mongodb";


export class ApiServer {
    private restify: Server;

    public start(port: string | number): void {
        this.restify = restify.createServer();
        this.restify.use(restify.plugins.queryParser());
        this.restify.use(restify.plugins.bodyParser());
        this.restify.listen(port, () => {
            console.log(`Server is up & running on port ${port}`);
        });

        try {
            connectMongoDb();
        } catch (err) {
            console.error(`Servidor nao pode ser iniciado | ${err}`);
            process.exit(1);
        }
    }

    public getServer(): Server {
        return this.restify;
    }
}