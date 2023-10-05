const User = require("../../models/User");
  
export default class UserRepository {

    public async getAll() {
        
        const users =  await User.findAll();
        return users;
    }

    public async get(id: any) {

        const user =  await User.findByPk(id);
        return user;
    }

    public async getByTelephone(_telephone: any) {

        const user =  await User.findOne({
            where: {
                telephone: _telephone
            },
        });
        return user;
    }

    public async updateToken(user: any) {
        
        await User.update(
            {
                last_token: user.last_token
            },
            {
                where: {
                    user_id: user.user_id
                }
            }
        );
        return user;
    }

    public checkin() {
        return {
            message: "App template Node, Express, TypeScript, DotEnv COnfig, API and Swagger",
        };
    }

    public location() {
        return {
            message: "App template Node, Express, TypeScript, DotEnv COnfig, API and Swagger",
        };
    }
}



