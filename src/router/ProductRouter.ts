import BaseRouter from './BaseRouter';

import ProductController from '../controllers/ProductController';
import { cekAdmin, cekLog } from '../middleware/AuthMiddleware';


class ProductRouter extends BaseRouter {
    
    public routes():void{
        this.router.get( '/', ProductController.index);
        this.router.get( '/:id', ProductController.show);
        this.router.post( '/', cekLog, cekAdmin, ProductController.create);
        this.router.put( '/:id', cekLog, cekAdmin, ProductController.update);
        this.router.delete( '/:id', cekLog, cekAdmin, ProductController.delete);
    }

}

export default new ProductRouter().router;