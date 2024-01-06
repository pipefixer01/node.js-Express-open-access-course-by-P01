const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const products = require("./data/products.json");
const productRouter = express.Router();

const app = express();
const port = process.env.PORT;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

productRouter.route("/").get((req, res) => {
    res.render("products",{
        products,
    });
});

productRouter.route("/1").get((req, res) => {
    res.send("Hello World !! I'm Product 1");
});

app.use("/products", productRouter);

app.get("/", (req, res) => {

    res.render('index', { username: 'Jhon 009', customers: ["Jo", "Lazia", "Rana"] });

})

app.listen(port, () => {
    debug("Listening on port " + chalk.green(port));
})