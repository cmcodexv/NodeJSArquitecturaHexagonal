import connection from '../../Context/Persistence/PersistencePostgresql';
import { EmployeeRepository } from '../../../Domain/Access/Employees/EmployeeRepository';
import { Employee } from "../../../Domain/Access/Employees/Employee";

export class EmployeePostgreSQLRepository implements EmployeeRepository {
    async getAll(): Promise<Employee[]> {

        const con = await connection;

        const result: any = await con.query(
            'SELECT id, name, age, address, salary FROM employee;'
        );

        return result.rows as Employee[];
    }
}