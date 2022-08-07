import { Employee } from "./employee";

const employees: Employee[] = [
    { "id": 0, "name": "Saideep", "position": "Tech Lead", "salary": 100 },
    { "id": 1, "name": "Karthik", "position": "Manager", "salary": 200 },
    { "id": 2, "name": "Kiran", "position": "Senior Systems Engineer", "salary": 50 },
    { "id": 3, "name": "Revanth", "position": "Technology Analyst", "salary": 500 },
    { "id": 4, "name": "Ravi", "position": "Systems Engineer", "salary": 400 },
];

const filteredEmployees: Employee[] = employees.filter((emp) => {
    return emp.salary > 200
});

const mappedEmployees: any[] = employees.map((emp) => {
    return emp.salary;
})

const foundEmployees: Employee | undefined = employees.find((emp) => {
    return emp.name === 'Saideep'
})

employees.forEach((emp) => {
    console.log(emp.position);
})

const isEmployeeExist = employees.some((emp) => {
    return emp.name === 'Kiran' && emp.salary == 1000
});

const everyEmployee = employees.every((emp) => {
    return emp.salary > 0
})

const totalEmployees = employees.reduce((acc, emp) => {
    return acc + emp.salary;
}, 0)

const items: number[] = [1, 2, 3, 4, 5, 6]

const includesValues = items.includes(2);

console.log("Filtered employees :", filteredEmployees);
console.log("mapped employees :", mappedEmployees);
console.log("found employees :", foundEmployees);
console.log("is Employee Exist :", isEmployeeExist);
console.log("every Employee :", everyEmployee);
console.log("total Employees :", totalEmployees);
console.log("includes Values :", includesValues);
