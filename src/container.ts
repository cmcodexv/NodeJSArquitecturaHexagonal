import { Application } from 'express';
import { createContainer, asClass } from 'awilix';
import { scopePerRequest } from 'awilix-express';
import { EmployeePostgreSQLRepository } from './Core/Dao/Impl/Postgresql/EmployeeRepository';
import { GetEmployees } from './Core/Aplication/Access/Employees/GetEmployees/GetEmployees';

export default (app: Application) => {
    const container = createContainer({
        injectionMode: "CLASSIC"
    });

    container.register({
        // case uses
        getEmployees: asClass(GetEmployees).scoped(),
        // repositories
        employeeRepository: asClass(EmployeePostgreSQLRepository).scoped(),
    });

    app.use(scopePerRequest(container));
}