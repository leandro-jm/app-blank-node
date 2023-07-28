import { Router } from "express";
import HelloController  from "./useCase/hello/HelloController";

const router: Router = Router();

//Routes
router.get("/", (request, response) => {
     const controller = new HelloController();
     return response.send(controller.home());
});

export { router };