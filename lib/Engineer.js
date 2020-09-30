const Employee = require("../lib/Employee");
class Engineer extends Employee{
    constructor(name, id, email, gitHubUsername) {
        super(name, id, email);
        this.gitHubUsername = gitHubUsername;
        
    }

    setGitHubUsername(gitHubUsername) {
        this.gitHubUsername = gitHubUsername;
    }

    getGitHubUsername() {
        return this.gitHubUsername;
    }

    getRole() {
        return ("Engineer")
    }
}




module.exports = Engineer;