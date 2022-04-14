const users = require('../models/users-model');
class UserControllers {
    getIndex(request, response) {
        console.log(request.session.id);
        response.render('index.ejs', { name: 'data' });
    }
    getLogin(request, response) {
        console.log(request.session.id);
        response.render('login.ejs');
    }
    getRegister(request, response) {
        console.log(request.session.id);
        response.render('register.ejs');
    }
    postLogin(request, response, next) {
        const config = {};
        config.successRedirect = '/';
        config.failureRedirect = '/login';
        const authHandler = passport.authenticate('local', config);
        authHandler(request, response, next);
    }
    postRegister(request, response) {
        try {
            const { name, email, password } = request.body;
            users.add(name, email, password);
            response.redirect('/login');
        }
        catch {
            response.redirect('/register');
        }
    }
}
module.exports = new UserControllers();