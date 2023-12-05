import { Company } from "./mutant/Company";
import { Employee } from "./mutant/Employee";

class CompanyRunner {
    public static main(): void {
        const company: Company = new Company("Schnitzels and Bits");

        console.log("Welcome to our company, " + company.getName());

        company.setName("Bob's Bicycle Repair");

        console.log("Renamed the company to " + company.getName());

        company.addEmployee(new Employee("001", " Alice", 100_000.00));
        company.addEmployee(new Employee("002", "Bob",    120_000.00));
        company.addEmployee(new Employee("003", "Carl",    80_000.00));
        company.addEmployee(new Employee("004", "Bob ",    90_000.00));

        console.log("There are " + company.numberOfEmployees() + " employees at the company");

        company.addEmployee(new Employee("005", "Billy Bob", 70_000.00));
        company.addEmployee(new Employee("006", "Anna Lee",  90_000.00));

        console.log(`Welcome ${company.findEmployeeById("005")?.getName()} and ${company.findEmployeeById("006")?.getName()} to the company`);
        console.log("Now there are " + company.numberOfEmployees() + " employees at the company");
        console.log("Time for a pay raise for everyone!");

        const bob = company.findEmployeeById("002");
        console.log(`${bob?.getName()}'s salary before the raise is ${bob?.getSalary()}`);

        company.everybodyGetsRaiseBy(0.1);

        console.log(`${bob?.getName()}'s salary after the raise is ${bob?.getSalary()}`);
    }
}

CompanyRunner.main()