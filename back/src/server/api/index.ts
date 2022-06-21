import { Router } from "restify-router";
import apiMap from "./game/map";
import apiUser from "./user/user";

const API_BASE : string = "/api"

const API: Router = new Router();

API.add(API_BASE, apiMap);
API.add(API_BASE, apiUser);

export default API;