const Intern = require("../lib/Intern");

test('creat an Intern object', () => {
    const intern = new Intern("hameed", 1234, "hameed1239@github.com", "UC Berkeley");

    expect(intern.school).toBe("UC Berkeley");
    console.log(intern);
});

test("set Intern's GitHUb user name", () => {
    const intern = new Intern("hameed", 234, "hameed1239@github.com", "UC Berkeley")

    expect(intern.getSchool()).toBe("UC Berkeley");
    intern.setSchool("hameed");
    expect(intern.getSchool()).toEqual("hameed")

});