const Employee = require("../lib/Employee");

test('create an Employee object', () => {
    const employee = new Employee("Hameed", 12394, "hameed1239@github.com")
    
    expect(employee.name).toBe('Hameed');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toMatch(/@/);
});

test('set employee name', () => {
    const employee = new Employee("Hameed")
    expect(employee.name).toBe("Hameed");
    employee.setName("Mike");
    expect(employee.name).toBe("Mike");
    expect(employee.getName()).toBe("Mike");
    
});

test('set employee id', () => {
    const employee = new Employee("Hameed", 1234)
    expect(employee.id).toBe(1234);
    employee.setID(5678);
    expect(employee.id).toBe(5678);
    expect(employee.getID()).toBe(5678);

});

test('set employee email', () => {
    const employee = new Employee("Hameed", 1234, "hameed1239@github.com")
    expect(employee.email).toBe("hameed1239@github.com");
    employee.setEmail("hameed1239@gmail.com");
    expect(employee.email).toBe("hameed1239@gmail.com");
    expect(employee.getEmail()).toBe("hameed1239@gmail.com");

});