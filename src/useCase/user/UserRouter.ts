import { Router } from "express";
import UserController from "./UserController";

const routerUser: Router = Router();

routerUser.get("/", async (request, response) => {
    const controller = new UserController();
    return response.send(await controller.getAll());
});

routerUser.get("/:id", async (request, response) => {
    const controller = new UserController();
    return response.send(await controller.get(request.params));
});

routerUser.post("/token", async (request, response) => {
    const controller = new UserController();
    return response.send(await controller.token(request.body));
});

routerUser.post("/token-validated", async (request, response) => {
    const controller = new UserController();
    return response.send(await controller.tokenValidated(request.body));
});

routerUser.post("/checkin", (request, response) => {
    const controller = new UserController();
    return response.send(controller.checkin());
});

routerUser.post("/location", (request, response) => {
    const controller = new UserController();
    return response.send(controller.location());
});

export {routerUser} 


