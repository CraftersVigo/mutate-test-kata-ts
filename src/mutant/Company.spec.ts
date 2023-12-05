import {Company} from "./Company";
import {Employee} from "./Employee";


describe('Company test', () => {
    let company: Company
    beforeEach(() => {
        company = new Company('Megadyne, Inc.')
    })

    it('company renamed', () => {
        const proposedName = "Cybertron Unlimited, Ltd."
        company.setName(proposedName)
        expect(company.getName()).not.toBeNull()
    })

    it('leadingTrailingSpacesRemovedFromEmployeeName', () => {
        const employee1 = new Employee("001", " Bob", 100_000.00)
        expect(employee1.getName()).toEqual("Bob")
        const employee2 = new Employee("002", "Alice  ", 100_000.00)
        expect(employee2.getName()).toEqual("Alice")
    })

    it('employeeWithLargestSalary', () => {
        company.addEmployee(new Employee("001", "Alice", 120_000.00))
        company.addEmployee(new Employee("002", "Bob",   115_000.00))
        company.addEmployee(new Employee("003", "Carl",  110_000.00))

        const highestEarner: Employee = company.employeeWithLargestSalary()
        expect(highestEarner.getName()).toEqual("Alice")
    })

    it('employeeAdded', () => {
        company.addEmployee(new Employee("123", "Dave", 100_000.00))
        expect(company.numberOfEmployees()).toBeGreaterThan(0)

        company.addEmployee(new Employee("456", "Bob", 50_000.00))
        expect(company.numberOfEmployees()).toBeGreaterThan(0)
    })

    it('everybodyGetsRaise', () => {
        const increaseBy = 0.1
        const davesOriginalSalary = 100000.00

        company.addEmployee(new Employee("123", "Dave",  davesOriginalSalary))
        company.addEmployee(new Employee("456", "Alice", 120000.00))
        company.addEmployee(new Employee("789", "Bob",   110000.00))

        company.everybodyGetsRaiseBy(increaseBy)

        const dave = company.findEmployeeById("123") as Employee
        expect(dave.getSalary()).toEqual(davesOriginalSalary * increaseBy)
    })

    it('findEmployeeById', () => {
        company.addEmployee(new Employee("123", "Dave",  100_000.00));
        company.addEmployee(new Employee("456", "Alice", 100_000.00));
        company.addEmployee(new Employee("789", "Bob",   100_000.00));

        const hopefullyDave = company.findEmployeeById("123");
        const hopefullyNoOne = company.findEmployeeById("999");
    })

    it('employeeNameChanged', () => {
        company.addEmployee(new Employee("123", "Dave",  100_000.00));
        company.addEmployee(new Employee("456", "Alice", 100_000.00));
        company.addEmployee(new Employee("789", "Bob",   100_000.00));

        let employee = company.findEmployeeById("123") as Employee;
        employee.setName("Tommy Lee");
        employee = company.findEmployeeById("123") as Employee;
        console.log(employee.getName() === "Tommy Lee" ? "PASSED" : "FAILED");
    })
})
