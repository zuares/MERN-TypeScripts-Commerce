import { Router } from "express";

declare interface IRouter {
    route : Router;
    routes():void
}