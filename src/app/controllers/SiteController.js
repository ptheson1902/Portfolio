const { multipleMongooseToObject } = require('../../ulti/mongoose');
const { mongooseToObject } = require('../../ulti/mongoose');
class SiteController {
    // [GET] /home
    index(req, res, next) {
        res.render('home');
    }

    about(req, res, next) {
        res.render('about');
    }

    test(req, res, next) {
        res.render('test');
    }

    contact(req, res, next) {
        res.render('contact');
    }
}

module.exports = new SiteController();
