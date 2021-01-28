import BaseRouter from './BaseRouter';

import ProductController from '../controllers/ProductController';
import { cekAdmin, cekLog } from '../middleware/AuthMiddleware';
import PaymentController from '../controllers/PaymentController';


class PaymentRouter extends BaseRouter {
    
    public routes():void{
        this.router.post( '/', cekLog, PaymentController.createPayment);
        this.router.get( '/', cekLog, cekAdmin, PaymentController.getPayment);
    }

}

export default new PaymentRouter().router;