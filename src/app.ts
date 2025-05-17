// Env files
import dotenv from 'dotenv';

dotenv.config({
    path: `${__dirname}/.env`
});

import express, { json } from 'express';
import { loadControllers } from 'awilix-express';
import Container from './Container';


// Create a new express app instance
const App: express.Application = express();


App.use(json());

// Load dependencies
Container(App);

// controllers
App.use('/api', loadControllers(
    'Api/Controllers/**/*.ts',
    { cwd: __dirname })
);

export { App };