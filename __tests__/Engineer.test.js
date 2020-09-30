const Engineer = require("../lib/Engineer");

test('creat an Engineer object', () => {
    const engineer = new Engineer("hameed", 1234, "hameed1239@github.com", "hameed1239");

    expect(engineer.gitHubUsername).toBe("hameed1239");
    console.log(engineer);
});

test("set Engineer's GitHUb user name and get Role", () => {
    const engineer = new Engineer("hameed", 234, "hameed1239@github.com", "hameed1239")

    expect(engineer.getGitHubUsername()).toBe("hameed1239");
    engineer.setGitHubUsername("hameed");
    expect(engineer.getGitHubUsername()).toEqual("hameed")
    expect(engineer.getRole()).toEqual('Engineer')
});