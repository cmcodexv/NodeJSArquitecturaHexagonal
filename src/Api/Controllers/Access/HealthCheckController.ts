import { Request, Response } from 'express';
import { route, GET } from 'awilix-express';
import { ApiConst } from '../../Utils/ApiConst';

@route('/check')
export class HealthCheckController {
    @GET()

    async index(req: Request, res: Response) {
        res.send(ApiConst.RUNNING_OK);
    }
}