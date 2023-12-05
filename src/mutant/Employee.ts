
export class Employee {
    private id: string
    private name: string
    private salary: number

    constructor(id:string, name: string, salary: number) {
        this.id = id
        this.name = name.replace(/\s/g, '')
        this.salary = salary
    }

    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getSalary(): number {
        return this.salary
    }

    public setName(name: string): void {
        this.name = name.replace(/\s/g, '')
    }

    public setSalary(salary: number) : void {
        this.salary = salary
    }
}