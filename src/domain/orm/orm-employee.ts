// const { getClient } = require('../repositories/repository_postgres');
import { db } from '../repositories/repository_postgres';
import { QueryResult } from 'pg';


export const getAll = async (): Promise<any> => {
    try {
        const query = {
            text: `SELECT * FROM employee`,
        };

        const result: QueryResult = await db.query(query);

        if (result.rows.length == 0) {
            return false;
        } else {
            return result.rows;
        }

    } catch (e) {
        return false;
    }
};




