require('dotenv').config();
import API from "./server/api";
import { ApiServer } from "./server/constante/index";

const server = new ApiServer();
server.start(process.env.PORT);
API.applyRoutes(server.getServer());