const express = require('express');
const router = express.Router();
const projectController = require('../app/controllers/ProjectController');

router.get('/', projectController.project);
router.post('/', projectController.project);
router.get('/:slug', projectController.projectShow);

module.exports = router;
