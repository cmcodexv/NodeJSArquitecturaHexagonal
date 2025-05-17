import { Response } from 'express';
import { route, GET } from 'awilix-express';
import { BaseController } from '../../Utils/Controllers/BaseController';
import { GetEmployees } from '../../../Core/Aplication/Access/Employees/GetEmployees/GetEmployees';
import { ApiConst } from '../../Utils/ApiConst';

@route('/employee')
export default class EmployeeController extends BaseController {
    constructor(private getEmployees: GetEmployees) {
        super();
    }

    @route('/list')
    @GET()
    async index(req: any, res: Response) {

        try {
            const result = await this.getEmployees.Execute();
            res.send({ code: ApiConst.HTTP_OK, res: result });

        } catch (error) {
            this.handleException(error, res);
        }
    }
}