// 1.	Create class, which extends	from an	AbstractClass
// 2.	Apply interfaces to	class,	it's method, property
// 3.	Use	generics	there
// 4.	Analyze	transpiled	code in	ES5	and	explain	it

export interface EmployeeInterface {
    firstName: string;
    lastName: string;
    getSalary(): number;
    paySalary(): string;
}

export interface FullName {
    fullName: string;
}

export interface Taxes {
    localTaxes: number;
}

export abstract class Employee implements EmployeeInterface {
    constructor(public firstName: string, public lastName: string) {}

    abstract getSalary(): number

    get fullName(): FullName {
        return {
            fullName: `${this.firstName} ${this.lastName}`
        };
    }

    paySalary(): string {
        return `${this.fullName.fullName} received ${this.getSalary()} Eur.`;
    }
}

class FullTimeEmployee extends Employee {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }

    getSalary(): number {
        return this.applyTaxes([this.salary]);
    }

    applyTaxes<T>(salary: T[]): T {
        let taxes = Math.floor(Math.random() * salary.length);
        return salary[taxes];
    }
}


let john = new FullTimeEmployee('John', 'Doe', 12000);

console.log(john.paySalary());





