import { Get, Post, Route } from "tsoa";
import UserRepository from "./UserRepository";
  
@Route("user")
export default class UserController {

    @Get("/")
    public async getAll() {

        const users = await new UserRepository().getAll();
        return JSON.stringify(users);
    }

    @Get("/{id}")
    public async get(params: any) {
        
        const {id} = params;
        const user = await new UserRepository().get(id);

        if (user == null) {
            return JSON.stringify({message: "User not found!"});
        }
        return JSON.stringify(user);
    }

    @Post("/token")
    public async token(params: any) {

        const {telephone} = params;
        const userRepo = new UserRepository();
        const user = await userRepo.getByTelephone(telephone);

        if(user == null) {
            return JSON.stringify({message: "User not found!"})
        }

        //TODO: Function to send SMS
        user.last_token = "XXXXXX";

        await userRepo.updateToken(user);
        return JSON.stringify(user)

    }

    @Post("/token-validated")
    public async tokenValidated(params: any) {
        
        const {telephone, token} = params;
        const userRepo = new UserRepository();
        const user = await userRepo.getByTelephone(telephone);

        if(user.last_token == token) {

            return JSON.stringify({message: "OK"})
        } 

        return JSON.stringify({message: "Token invalid!"})
    }

    @Post("/checkin")
    public checkin() {
        return {
            message: "App template Node, Express, TypeScript, DotEnv COnfig, API and Swagger",
        };
    }

    @Post("/location")
    public location() {
        return {
            message: "App template Node, Express, TypeScript, DotEnv COnfig, API and Swagger",
        };
    }
}



