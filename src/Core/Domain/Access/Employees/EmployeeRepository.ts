import { Employee } from "./Employee";

export interface EmployeeRepository {
    getAll(): Promise<Employee[]>;
}