import { Response } from 'express';
import { ApplicationException } from "../../Exceptions/ApplicationException";
import { ApiConst } from '../ApiConst';

export abstract class BaseController {
    handleException(err: any, res: Response) {
        if (err instanceof ApplicationException) {
            res.status(ApiConst.HTTP_BAD_REQUEST);
            res.send(err.message);
        } else {
            throw new Error(err);
        }
    }
}