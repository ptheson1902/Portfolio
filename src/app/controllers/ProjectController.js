const Projects = require('../models/Project');
const { mongooseToObject } = require('../../ulti/mongoose');
const { multipleMongooseToObject } = require('../../ulti/mongoose');

class ProjectController {
    // [GET] /project
    project(req, res, next) {
        Projects.find({})
            .then((projects) => {
                res.render('Project', {
                    projects: multipleMongooseToObject(projects),
                });
            })
            .catch(next);
    }

    // [GET] /project/:slug
    projectShow(req, res, next) {
        Projects.findOne({ _id: req.params.slug })
            .then((projects) =>
                res.render('Project/item', {
                    item: mongooseToObject(projects),
                }),
            )
            .catch(next);
    }
}

module.exports = new ProjectController();
