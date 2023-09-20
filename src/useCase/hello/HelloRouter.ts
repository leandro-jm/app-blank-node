import { Router } from "express";
import HelloController from "./HelloController";

const routerHello: Router = Router();

routerHello.get("/", (request, response) => {
    const controller = new HelloController();
    return response.send(controller.home());
});

export {routerHello} 


