import express from "express";
import swaggerUi from "swagger-ui-express";

import {logger} from "./config/LogWinston";

export class App{
    
  public server: express.Application = express();

  constructor(){
    
    this.server;
    this.middleware();
    this.router();
    this.swagger();
    this.public();
  }

  private middleware(){
    logger.debug("Start middleware...")
    this.server.use(express.json());
  }

  private router(){
    logger.debug("Start routers...")

  }

  private swagger(){

    logger.debug("Start swagger documentation...")

    this.server.use("/docs",
                    swaggerUi.serve,
                    swaggerUi.setup(undefined, {
                      swaggerOptions: {
                        url: "/swagger.json",
                      },
    }));
  }

  private public(){
    this.server.use(express.static("public"));
  }
}
