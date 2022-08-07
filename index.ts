// 1.	Create class, which extends	from an	AbstractClass
// 2.	Apply interfaces to	class,	it's method, property
// 3.	Use	generics	there
// 4.	Analyze	transpiled	code in	ES5	and	explain	it

enum SupportedCountries {
  LT,
  DE,
  US,
  UK,
}

const CountryTaxes: Record<SupportedCountries, number> = {
  [SupportedCountries.LT]: 15,
  [SupportedCountries.DE]: 20,
  [SupportedCountries.UK]: 25,
  [SupportedCountries.US]: 30,
};

interface IEmployee {
  fullName: string;
  paySalary(): string;
}

interface IDeveloper {
  getDescription(): string;
  getSalary(): number;
}

enum DeveloperFocus {
  BACKEND = "Backend",
  FRONTEND = "Frontend",
  FULLSTACK = "Fullstack",
}

abstract class Employee implements IEmployee {
  constructor(
    public firstName: string,
    public lastName: string,
    public country: SupportedCountries
  ) {}

  abstract getSalary(): number;

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  paySalary() {
    return `Transaction to ${
      this.fullName
    } of ${this.getSalary()}€ has been made`;
  }
}

class Developer<T> extends Employee {
  constructor(
    firstName: string,
    lastName: string,
    country: SupportedCountries,
    public zipCode: T,
    private salary: number | string,
    private focus: DeveloperFocus
  ) {
    super(firstName, lastName, country);
  }

  getDescription() {
    return `Hi, I'm ${this.fullName} and I'm currently focusing on ${this.focus} development`;
  }

  getSalary() {
    return this.deductTaxes(this.salary);
  }

  private deductTaxes(salary: number | string): number {
    const parsedSalary =
      typeof salary === "number" ? salary : parseInt(salary, 10);
    return (parsedSalary * (100 - CountryTaxes[this.country])) / 100;
  }
}

const john = new Developer(
  "John",
  "Doe",
  SupportedCountries.UK,
  "N21 3DP",
  12000,
  DeveloperFocus.FRONTEND
);

console.log(typeof john.zipCode === "string");
console.log(john.getDescription());
console.log(john.paySalary());

const klaus = new Developer(
  "Klaus",
  "Fischer",
  SupportedCountries.DE,
  85652,
  "8000",
  DeveloperFocus.FULLSTACK
);

console.log(typeof klaus.zipCode === "number");
console.log(klaus.getDescription());
console.log(klaus.paySalary());
