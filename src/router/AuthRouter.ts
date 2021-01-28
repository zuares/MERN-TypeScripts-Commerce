import BaseRouter from './BaseRouter';

import AuthController from './../controllers/AuthController';


class AuthRouter extends BaseRouter {
    
    public routes():void{
        this.router.post( '/register', AuthController.register);
        this.router.post( '/login', AuthController.login);
        this.router.get( '/refresh_token', AuthController.refresh_token);
    }

}

export default new AuthRouter().router;