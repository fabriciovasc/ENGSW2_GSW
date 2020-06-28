const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = () => {
    const app = express();

    const corsOptions = {
        origin: 'http://localhost:4200',
        optionsSuccessStatus: 200
    };

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(express.json());
    app.use(cors(corsOptions));

    consign()
        .include('controles')
        .into(app)

    return app
}
