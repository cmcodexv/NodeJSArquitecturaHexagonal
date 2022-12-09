import express, { Application } from "express";
import { routers } from '../routes';

export const server: Application = express();

// Index de rutas
routers(server);








