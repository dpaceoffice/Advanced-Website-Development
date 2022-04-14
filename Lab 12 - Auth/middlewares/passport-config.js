const { Strategy } = require('passport-local');
const passport = require('passport');
const users = require('../models/users-model');
function authenticateUser(email, password, done) {
    const user = users.findUser('email', email);
    if (user === undefined) {
        console.log("No user with that email");
        return done();
    }
    if (password === user.password) {
        console.log("User Authenticated");
        return done();
    }
    else {
        console.log("Password incorrect");
        return done();
    }
}
function setupPassport() {
    const formNames = { usernameField: 'email', passwordField: 'password' };
    const localStrategy = new Strategy(formNames, authenticateUser);
    passport.use(localStrategy)
}
setupPassport();
module.exports = passport;