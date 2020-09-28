//const Manager = require("./Manager");
class Team{
    constructor(manager, engineersArr, internsArr) {
    
        this.manager = manager;
        this.engineersArr = engineersArr;
        this.internsArr = internsArr;
    }
    
    addTeamMember(teamMember) {
        if (teamMember.role === "manager") {
            this.manager = teamMember;
        }
        else if (teamMember.role === "engineer") {
            this.engineersArr.push(teamMember);
        }
        else if (teamMember.role === "intern") {
            this.internsArr.push(this.internsArr);
        }
        else { }
    }
        

}

module.exports = Team;
