const shortid = require('shortid');
class Users {
    constructor() {
        this.users = [];
    }
    add(name, email, password) {
        const id = shortid.generate();
        const user = { id: id, name: name, email: email, password: password };
        this.users.push(user);
        console.log(this.users)
    }
    findUser(key, value) {
        const user = this.users.find(item => item[key] === value)
        return user;
    }
}
module.exports = new Users();