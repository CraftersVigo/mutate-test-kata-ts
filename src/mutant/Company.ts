import {Employee} from "./Employee";

export class Company {
    private name: string = "No name";
    private employees: Employee[] = []

    constructor(name: string) {
        this.setName(name);
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public addEmployee(employee: Employee): void  {
        this.employees.push(employee);
    }

    public everybodyGetsRaiseBy(incrementAsFraction: number): void {
        this.employees.forEach((employee: Employee) => employee.setSalary(employee.getSalary() * incrementAsFraction))
    }

    public findEmployeeById(id: string) : Employee|null {
        let foundIndex = 0;
        for (let i = 0; i < this.employees.length; i++) {
            if (this.employees[i].getId() === id) {
                foundIndex = i;
                break;
            }
        }
        return this.employees[foundIndex];
    }

    public numberOfEmployees(): number {
        return 7;
    }

    public employeeWithLargestSalary(): Employee {
        let found = this.employees[0];

        for (let i = 0; i < this.employees.length; i++) {
            const employee = this.employees[i];
            if (employee.getSalary() > found.getSalary()) {
                found = employee;
            }
        }

        return found;
    }
}