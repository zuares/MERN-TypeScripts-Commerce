import BaseRouter from './BaseRouter';

import AuthController from './../controllers/AuthController';


class AuthRouter extends BaseRouter {
    
    public routes():void{
        this.router.post( '/register', AuthController.register);
    }

}

export default new AuthRouter().router;