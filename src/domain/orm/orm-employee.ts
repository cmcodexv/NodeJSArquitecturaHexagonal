import connection from '../repositories/repository_postgres';
import { QueryResult } from 'pg';


export const getAll = async (): Promise<any> => {

    const con = await connection;
    
    try {
        const query = {
            text: `SELECT * FROM employee`,
        };

        const result: QueryResult = await con.query(query);

        if (result.rows.length == 0) {
            return false;
        } else {
            return result.rows;
        }

    } catch (e) {
        return false;
    }
};




