const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('../routes');
const database = require('../config/database');

const server = express();

const configureExpress = () => {
    server.use(cors());
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.use('/api', routes);
    server.use("/uploads", express.static('uploads'));

    server.get('/', (req, res) => {
        res.json({ message: 'Welcome to application.' });
    });

    return server;
};

module.exports = database.authenticate().then(configureExpress);
// module.exports = server;
