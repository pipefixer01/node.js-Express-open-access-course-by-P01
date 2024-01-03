const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.get("/", (req, res) => {

    res.send('Hello borntoDev Co, Ltd.');

})

app.listen(port, () => {
    debug("Listening on port " + chalk.green(port));
})