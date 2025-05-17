import { Employee } from "../../../../Domain/Access/Employees/Employee";
import { EmployeeRepository } from "../../../../Domain/Access/Employees/EmployeeRepository";

export class GetEmployees {
    constructor(
        private readonly employeeRepository: EmployeeRepository
    ) { }

    public async Execute(): Promise<Employee[]> {
        return await this.employeeRepository.getAll();
    }
}