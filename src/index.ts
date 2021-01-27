import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import AuthRouter from './router/AuthRouter';
import {config} from 'dotenv';
import bodyParser from 'body-parser'

class App {
    public app;
    constructor() {
        this.app = express();
        this.plugins();
        this.routes();
    }
    
    protected plugins():void {
        this.app.use(helmet());
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.app.use(express.json());
    }
    
    protected routes():void{
        this.app.use('/api/v1/users', AuthRouter);
    }
}

config();

if(!process.env.PORT) {
    process.exit(1)
};
const port:number = parseInt(process.env.PORT);
const app = new App().app;
app.listen( port , () => console.log(`Server running on port ${port}`));