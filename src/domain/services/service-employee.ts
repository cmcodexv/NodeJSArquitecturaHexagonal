import { getAll } from '../orm/orm-employee';
import { Request, Response } from 'express';

export const GetAll = async (req: Request, res: Response) => {
    let message = '', data = '';
    try {
        const respOrm = await getAll();
        if (!respOrm) {
            return res.status(200).send("No data!");
        } else {
            message = 'Success Response', data = respOrm;
        }
        return res.status(200).send({ employees: respOrm });;
    } catch (err) {
        console.log("err = ", err);
        return res.status(500).send(err);
    }
}


