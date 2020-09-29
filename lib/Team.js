//const Manager = require("./Manager");
class Team{
    constructor(manager, engineersArr, internsArr) {
    
        this.manager = manager;
        this.engineersArr = engineersArr;
        this.internsArr = internsArr;
    }
    
    addTeamMember(teamMember) {
        if (teamMember.role === "Manager") {
            this.manager = teamMember;
        }
        else if (teamMember.role === "Engineer") {
            this.engineersArr.push(teamMember);
        }
        else if (teamMember.role === "Intern") {
            this.internsArr.push(this.internsArr);
        }
        else { }
    }
        

}

module.exports = Team;
