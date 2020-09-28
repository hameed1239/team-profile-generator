const Manager = require("../lib/Manager");

test('create an Manager object', () => {
    const manager = new Manager("hameed", 1234,"hameed1239",123456);

    expect(manager.officeNumber).toBe(123456);
    console.log(manager);
});

test("set Manager's office number", () => {
    const manager = new Manager("hameed", 234, "hameed1239@github.com", 123456)

    expect(manager.getOfficeNumber()).toBe(123456);
    manager.setOfficeNumber(654321);
    expect (manager.getOfficeNumber()).toEqual(654321)
    
});