class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "employee"
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return (this.name);
    }

    setID(id) {
        this.id = id;
    }
    
    getID() {
        return (this.id);
    }

    setEmail(email) {
        this.email = email;
    }

    getEmail() {
        return (this.email);
    }

    setRole(role) {
        this.role = role;
    }

    getRole() {
        return (this.Role);
    }
}

module.exports = Employee;