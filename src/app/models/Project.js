const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Projects = new Schema({
    projectName: { type: String }, // String is shorthand for {type: String}
    description: { type: String },
    shortDescription: { type: String },
    projectImage: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    codeTechnologies: { type: Array },
});

module.exports = mongoose.model('Projects', Projects);
