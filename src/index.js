const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const db = require('./config/db');

// Connect to DB
db.connect();

const router = require('./router');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// HTTP logger
app.use(morgan('combined'));

// Router init
router(app);

app.listen(port, () => {
    console.log(`Server start on Port ${port} `);
});
