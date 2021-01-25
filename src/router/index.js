const siteRouter = require('../router/site');

const projectRouter = require('../router/project');
function router(app) {
    app.use('/project', projectRouter);

    app.use('/', siteRouter);
}

module.exports = router;
