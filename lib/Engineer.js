const Employee = require("../lib/Employee");
class Engineer extends Employee{
    constructor(name, id, email, gitHubUsername) {
        super(name, id, email);
        this.gitHubUsername = gitHubUsername;
        this.setRole("Engineer");
    }

    setGitHubUsername(gitHubUsername) {
        this.gitHubUsername = gitHubUsername;
    }

    getGitHubUsername() {
        return this.gitHubUsername;
    }
}




module.exports = Engineer;