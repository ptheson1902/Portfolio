const Projects = require('../models/Project');
const { mongooseToObject } = require('../../ulti/mongoose');
const { multipleMongooseToObject } = require('../../ulti/mongoose');

class ProjectController {
    // [GET, POST] /project
    project(req, res, next) {
        var data = req.body;
        if(Object.keys(data).length === 0){
            Projects.find({})
                .then((projects) => {
                    res.render('Project/', {
                        projects: multipleMongooseToObject(projects),
                    });
                })
                .catch(next);
        }else{
            if(data.data[0] == 'all'){
                Projects.find({})
                    .then((projects) => {
                        res.send(projects)
                    })
                    .catch(next);
            }else{
                Projects.find({ codeTechnologies : { '$all' : data.data} })
                    .then((projects) => {
                        res.send(projects);
                    })
                    .catch(next);
            }
        }
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
