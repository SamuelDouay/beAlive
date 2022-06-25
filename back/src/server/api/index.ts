import { Router } from "restify-router";
import apiConversation from "./api.conversation";
import apiGroupe from "./api.groupe";
import apiMap from "./api.map";
import apiUser from "./api.user";

const API_BASE : string = "/api"

const API: Router = new Router();

API.add(API_BASE, apiMap);
API.add(API_BASE, apiUser);
API.add(API_BASE, apiConversation);
API.add(API_BASE, apiGroupe);

export default API;