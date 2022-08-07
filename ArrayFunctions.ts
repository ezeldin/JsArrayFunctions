import { Employee } from "./employee";

const employees: Employee[] = [
    { "id": 0, "name": "Saideep", "address": "Tech Lead", "price": 100 },
    { "id": 1, "name": "Karthik", "address": "Manager", "price": 200 },
    { "id": 2, "name": "Kiran", "address": "Senior Systems Engineer", "price": 50 },
    { "id": 3, "name": "Revanth", "address": "Technology Analyst", "price": 500 },
    { "id": 4, "name": "Ravi", "address": "Systems Engineer", "price": 400 },
];

const filteredEmployees: Employee[] = employees.filter((emp) => {
    return emp.price > 200
});

const mappedEmployees: any[] = employees.map((emp) => {
    return emp.price;
})

const foundEmployees: Employee | undefined = employees.find((emp) => {
    return emp.name === 'Saideep'
})

employees.forEach((emp) => {
    console.log(emp.address);
})

const isEmployeeExist = employees.some((emp) => {
    return emp.name === 'Kiran' && emp.price == 1000
});

console.log("Filtered employees :", filteredEmployees);
console.log("mapped employees :", mappedEmployees);
console.log("found employees :", foundEmployees);
console.log("isEmployeeExist :", isEmployeeExist);
