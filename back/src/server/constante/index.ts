import { Server } from "restify";
import * as restify from "restify";
import connectMongoDb from "../../database/connection/connect.mongodb";


export class ApiServer {
    private restify: Server;

    public async start(port: string | number): Promise<void> {
        this.restify = restify.createServer();
        this.restify.use(restify.plugins.queryParser());
        this.restify.use(restify.plugins.bodyParser());
        this.restify.listen(port, () => {
            console.log(`Server is up & running on port ${port}`);
        });

        try {
            await connectMongoDb();
        } catch (err) {
            console.error(`Le serveur ne peut pas être démarré | ${err}`);
            process.exit(1);
        }
    }

    public getServer(): Server {
        return this.restify;
    }
}